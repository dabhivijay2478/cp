import React from "react";
import { useEffect, useState, useRef } from "react";

export default function EvetnReport() {
  const [mongoData, setMongoData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const searchInputRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/Eventreport");
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
              <th>EventName</th>
              <th>HandlerName</th>
              <th>Descrption</th>
              <th>Venue</th>
              <th>Certifiacate</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td></td>

                <td>{item.ClubName}</td>
                <td>{item.EventName}</td>
                <td>{item.HandlerName}</td>
                <td>{item.Descrption}</td>
                <td>{item.Venue}</td>
                <td>{item.Certifiacate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
