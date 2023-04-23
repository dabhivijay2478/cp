import React from "react";
import { useEffect, useState, useRef } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ClubReport() {
  const Navigation = useNavigate();

  const [mongoData, setMongoData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const searchInputRef = useRef(null);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/clubreport");
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
          (typeof item.EventName === "string" &&
            item.EventName.toLowerCase().includes(searchTermLower)) ||
          (typeof item.HandlerName === "string" &&
            item.HandlerName.toLowerCase().includes(searchTermLower)) ||
          (typeof item.Descrption === "string" &&
            item.Descrption.toLowerCase().includes(searchTermLower)) ||
          (typeof item.Venue === "string" &&
            item.Venue.toLowerCase().includes(searchTermLower)) ||
          (typeof item.Certifiacate === "string" &&
            item.Certifiacate.toLowerCase().includes(searchTermLower)) ||
          (typeof item.ClubName === "string" &&
            item.ClubName.toLowerCase().includes(searchTermLower))
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

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const getPaginatedData = () => {
    const startIndex = pageNumber * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  async function handleDeleteClubName(e, ClubName) {
    e.preventDefault();
    try {
      const response = await axios.delete(`/deleteClubName/${ClubName}`);
      const data = response.data;
      window.alert("Successfully Delete The ClubName");
      Navigation("/Admindash");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
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
              <th>ClubName</th>
              <th>Factulty</th>
              <th>Student</th>
              <th>start Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {getPaginatedData().map((item, index) => (
              <tr key={index}>
                <td></td>

                <td>{item.ClubName}</td>
                <td>{item.Factulty}</td>
                <td>{item.Student}</td>
                <td>{item.Dates.startDate}</td>
                <td>
                  <label
                    htmlFor="updateclub"
                    className="btn btn-outline btn-accent"
                  >
                    Update
                  </label>
                </td>

                <td>
                  <button
                    className="btn btn-square btn-outline dark:hover:bg-red-500"
                    onClick={(e) => handleDeleteClubName(e, item.ClubName)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="flex flex-col sm:flex-row justify-center items-center mt-4"
          pageClassName="mx-1 rounded-lg py-1 px-3 text-white cursor-pointer"
          activeClassName="bg-blue-500 text-white"
          previousClassName="mx-1 rounded-lg py-1 px-3 text-blue-500 cursor-pointer"
          nextClassName="mx-1 rounded-lg py-1 px-3 text-blue-500 cursor-pointer"
          disabledClassName="opacity-50 cursor-not-allowed"
          previousLinkClassName="btn dark:hover:bg-blue-500"
          nextLinkClassName="btn dark:hover:bg-blue-500"
        >
          <div className="btn-group flex">
            <button className="btn">«</button>
            <button className="btn">Page {pageNumber + 1}</button>
            <button className="btn">»</button>
          </div>
        </ReactPaginate>
      </div>

      <div>
        <input type="checkbox" id="updateclub" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <label htmlFor="updateclub" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
