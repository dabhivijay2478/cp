import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import "./loader.css";
export default function UpdateClub(props) {
  const { selectedRow } = props;
  const history = useNavigate();

  const [Dates, setDates] = useState({
    startDate: null,
  });
  const handleDatesChange = (newDates) => {
    console.log("newDates:", newDates);
    setDates(newDates);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleModalToggle = () => {
    setIsOpen(!isOpen);
  };
  const [Factulty, setFactulty] = useState(selectedRow?.Factulty || "");
  const [Student, setStudent] = useState(selectedRow?.Student || "");
  const [ClubName, setClubName] = useState(selectedRow?.ClubName || "");

  const [clubNameError, setClubNameError] = useState("");
  const [facultyError, setFacultyError] = useState("");
  const [studentError, setStudentError] = useState("");
  const [datesError, setDatesError] = useState("");

  useEffect(() => {
    setFactulty(selectedRow?.Factulty || "");
    setClubName(selectedRow?.ClubName || "");
    setStudent(selectedRow?.Student || "");
  }, [selectedRow]);
  const validateInput = () => {
    let isValid = true;
    if (ClubName === "") {
      setClubNameError("Club Name is required.");
      isValid = false;
    } else {
      setClubNameError("");
    }
    if (Factulty === "") {
      setFacultyError("Main Handler Factulty is required.");
      isValid = false;
    } else {
      setFacultyError("");
    }
    if (Student === "") {
      setStudentError("Main Handler Student is required.");
      isValid = false;
    } else {
      setStudentError("");
    }
    if (!Dates.startDate) {
      setDatesError("Please select a date");
      isValid = false;
    } else {
      setDatesError("");
    }

    return isValid;
  };

  const handleUpdateClub = async (e, ClubName) => {
    e.preventDefault();
    if (!validateInput()) {
      return;
    }
    setIsOpen(false);
    setIsLoading(true);
    try {
      const response = await axios.put(`/updateclub/${ClubName}`, {
        ClubName,
        Factulty,
        Student,
        Dates,
      });

      window.alert("Successfully Update Club");
      history("/Admindash");

      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      if (error.response.status === 400 || !error.response.data) {
        window.alert("Server Error");
      } else if (error.response.status === 422 || !error.response.data) {
        window.alert("Data Not Valid!!");
      }
      throw error;
    }
  };
  return (
    <>
      <div>
        <input
          type="checkbox"
          id="updateclub"
          className="modal-toggle"
          checked={isOpen}
          onChange={handleModalToggle}
        />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Update Club</h3>
            <label
              htmlFor="updateclub"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="flex justify-center container">
              <div className="card w-full bg-white border-double  container  shadow-lg ">
                <div className="flex px-2 py-3 justify-center">
                  <input
                    type="text"
                    placeholder="Club Name"
                    value={ClubName}
                    onChange={(e) => setClubName(e.target.value)}
                    className="input input-bordered  input-primary w-full bg-white max-w-xs text-black"
                    readOnly
                  />
                </div>
                <div className="flex px-2 py-3 justify-center">
                  {" "}
                  {clubNameError && (
                    <span className="error text-red-500">{clubNameError}</span>
                  )}
                </div>
                <div className="flex px-2 py-3 justify-center">
                  <input
                    type="text"
                    value={Factulty}
                    onChange={(e) => setFactulty(e.target.value)}
                    placeholder="Main Handler Factulty"
                    className="input input-bordered  input-primary w-full bg-white max-w-xs text-black"
                  />
                </div>
                <div className="flex px-2 py-3 justify-center">
                  {facultyError && (
                    <span className="error text-red-500">{facultyError}</span>
                  )}
                </div>
                <div className="flex px-2 py-3 justify-center">
                  <input
                    type="text"
                    value={Student}
                    onChange={(e) => setStudent(e.target.value)}
                    placeholder="Main Handler Student"
                    className="input input-bordered  input-primary w-full bg-white max-w-xs text-black"
                  />
                </div>
                <div className="flex px-2 py-3 justify-center">
                  {studentError && (
                    <span className="error text-red-500">{studentError}</span>
                  )}
                </div>
                <span className="flex justify-center text-red-600">
                  {selectedRow?.Dates.startDate}
                </span>
                <div className="flex px-2 py-3  justify-center  ">
                  <div className=" w-full bg-white max-w-xs text-black border rounded-lg border-purple-500">
                    <Datepicker
                      useRange={false}
                      asSingle={true}
                      inputClassName="font-normal  dark:bg-white  datepickertext dark:placeholder:input-primary dark:placeholder:text-gray-700"
                      displayFormat={"DD-MM-YYYY"}
                      primaryColor={"teal"}
                      value={Dates}
                      onChange={handleDatesChange}
                      // showShortcuts={true}
                    />
                  </div>
                </div>

                <div className="flex px-2 py-3 justify-center">
                  {datesError && (
                    <span className="error text-red-500">{datesError}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-action">
              <label
                //   htmlFor="updateclub"
                className="btn"
                onClick={(e) => handleUpdateClub(e, ClubName)}
              >
                Update Club
              </label>
            </div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-gray-900 flex justify-center items-center z-50">
          <div class="clubspinner">
            <div class="clubspinnerdot"></div>
            <div class="clubspinnerdot"></div>
            <div class="clubspinnerdot"></div>
            <div class="clubspinnerdot"></div>
            <div class="clubspinnerdot"></div>
          </div>
        </div>
      )}
    </>
  );
}
