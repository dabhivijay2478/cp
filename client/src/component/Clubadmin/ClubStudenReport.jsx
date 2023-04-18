import React from "react";
import { useEffect, useState, useRef } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import UpdateStudentReport from "../Common/UpdateStudentReport";

export default function ClubStudenReport() {
  const Navigation = useNavigate();
  const [mongoData, setMongoData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  // const [clubName, setClubName] = useState("");

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
                <UpdateStudentReport
                  Name={item.Name}
                  EnrollmentNo={item.EnrollmentNo}
                  Email={item.Email}
                  PhoneNO={item.PhoneNO}
                  Class={item.Class}
                  Batch={item.Batch}
                  ClubName={item.ClubName}
                  FavTech={item.FavTech}
                  Role="Student"
                  Password={item.EnrollmentNo}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
