import React from "react";
import { useEffect, useState, useRef } from "react";

export default function StudentReport() {
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
