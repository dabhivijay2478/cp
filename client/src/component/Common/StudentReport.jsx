import React from "react";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UpdateStudentReport from "./UpdateStudentReport";

export default function StudentReport() {
  const Navigation = useNavigate();
  const [selectedRow, setSelectedRow] = useState(null);

  const [mongoData, setMongoData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const searchInputRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data");
      const result = await response.json();
      setMongoData(result);
    }
    fetchData();
  }, []);

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
      window.alert("SucessFully Delete The User");
      Navigation("/Admindash");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleRowClick = (item) => {
    setSelectedRow(item);
  };

  return (
    <>
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
            {filteredData.map((item, index) => (
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
      </div>
      <UpdateStudentReport selectedRow={selectedRow} />
    </>
  );
}
