import React from "react";
import { useEffect, useState, useRef } from "react";
import ReactPaginate from "react-paginate";
export default function Admincontactusreport() {
  const [mongoData, setMongoData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const searchInputRef = useRef(null);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/contactusreport");
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
          (typeof item.ClubName === "string" &&
            item.ClubName.toLowerCase().includes(searchTermLower)) ||
          (typeof item.Message === "string" &&
            item.Message.toLowerCase().includes(searchTermLower))
        );
      });
      setFilteredData(filteredData);
    };
    filterData();
  }, [mongoData, searchTerm]);

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.keycode === "k") {
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
          />{" "}
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
              <th>ClubName</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {getPaginatedData().map((item, index) => (
              <tr key={index}>
                <td></td>
                <td>{item.Name}</td>
                <td>{item.EnrollmentNo}</td>
                <td>{item.Email}</td>
                <td>{item.ClubName}</td>
                <td>{item.Message}</td>
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
          previousClassName="mx-1 rounded-lg py-1 px-3 text-blue-500 cursor-pointer "
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
    </>
  );
}
