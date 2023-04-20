import React from "react";
import { useEffect, useState, useRef } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import UpdateStudentReport from "../Common/UpdateStudentReport";
import ReactPaginate from "react-paginate";

export default function ClubStudenReport() {
  const Navigation = useNavigate();
  const [selectedRow, setSelectedRow] = useState(null);

  const [mongoData, setMongoData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const [userData, setUserData] = useState({});
  const email = Cookies.get("ClubAdminemail");
  const searchInputRef = useRef(null);
  const ClubName = userData.ClubName;
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/users/${email}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (email) {
      fetchUserData();
    }
  }, [email]);

  useEffect(() => {
    async function fetchData() {
      //   const response = await fetch("/ClubStudentReport");

      const response = await fetch("/ClubStudentReport", {
        method: "POST",
        changeOrigin: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ClubName: ClubName,
        }),
      });
      const result = await response.json();
      setMongoData(result);
    }

    fetchData();
  }, [ClubName]);

  useEffect(() => {
    const filterData = () => {
      const filteredData = mongoData.filter((item) => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
          (typeof item.Name === "string" &&
            item.Name.toLowerCase().includes(searchTermLower)) ||
          (typeof item.EnrollmentNo === "number" &&
            item.EnrollmentNo.toString().includes(searchTermLower)) ||
          (typeof item.Email === "string" &&
            item.Email.toLowerCase().includes(searchTermLower)) ||
          (typeof item.PhoneNO === "number" &&
            item.PhoneNO.toString().includes(searchTermLower)) ||
          (typeof item.Class === "string" &&
            item.Class.toLowerCase().includes(searchTermLower)) ||
          (typeof item.Batch === "string" &&
            item.Batch.toLowerCase().includes(searchTermLower)) ||
          (typeof item.ClubName === "string" &&
            item.ClubName.toLowerCase().includes(searchTermLower)) ||
          (typeof item.FavTech === "string" &&
            item.FavTech.toLowerCase().includes(searchTermLower)) ||
          (typeof item.Role === "string" &&
            item.Role.toLowerCase().includes(searchTermLower))
        );
      });
      setFilteredData(filteredData);
    };
    filterData();
  }, [mongoData, searchTerm]);

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      searchInputRef.current.focus();
    }
  };
  document.addEventListener("keydown", handleKeyDown);

  async function handleDeleteUser(e, EnrollmentNo) {
    try {
      const response = await fetch(`/deleteuser/${EnrollmentNo}`, {
        method: "DELETE",
      });
      const data = await response.json();
      // window.alert("SucessFully Delete");
      // Navigation("/ClubAdmin");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleRowClick = (item) => {
    setSelectedRow(item);
  };
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const getPaginatedData = () => {
    const startIndex = pageNumber * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };
  return (
    <>
      {userData.ClubName && <span>{userData.ClubName}</span>}
      <div className="overflow-x-auto">
        <div className="px-3 py-4 ">
          <input
            type="text"
            className="input input-primary sticky input-bordered ml-3"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={searchInputRef}
          />
          <i> CTRL+K</i>
        </div>
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>EnrollmentNo</th>
              <th>Email</th>
              <th>PhoneNO</th>
              <th>Class</th>
              <th>Batch</th>
              <th>ClubName</th>
              <th>FavTech</th>
              <th>Role</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {getPaginatedData().map((item, index) => (
              <tr key={index}>
                <td></td>

                <td>{item.Name}</td>
                <td>{item.EnrollmentNo}</td>
                <td>{item.Email}</td>
                <td>{item.PhoneNO}</td>
                <td>{item.Class}</td>
                <td>{item.Batch}</td>
                <td>{item.ClubName}</td>
                <td>{item.FavTech}</td>
                <td>{item.Role}</td>
                <td>
                  <label
                    htmlFor="UpdateStudentReport"
                    className="btn btn-warning dark:hover:bg-teal-500"
                    onClick={() => handleRowClick(item)}
                  >
                    Update
                  </label>
                </td>
                <td>
                  <button
                    className="btn btn-error dark:hover:bg-red-500"
                    onClick={(e) => handleDeleteUser(e, item.EnrollmentNo)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="flex justify-center mt-4"
          pageClassName="mx-1 rounded-lg py-1 px-3 text-blue-500 cursor-pointer"
          activeClassName="bg-blue-500 text-white"
          previousClassName="mx-1 rounded-lg py-1 px-3 text-blue-500 cursor-pointer"
          nextClassName="mx-1 rounded-lg py-1 px-3 text-blue-500 cursor-pointer"
          disabledClassName="opacity-50 cursor-not-allowed"
          previousLinkClassName="btn"
          nextLinkClassName="btn"
        >
          <div className="btn-group">
            <button className="btn">«</button>
            <button className="btn">Page {pageNumber + 1}</button>
            <button className="btn">»</button>
          </div>
        </ReactPaginate>
      </div>
      <UpdateStudentReport selectedRow={selectedRow} />
    </>
  );
}
