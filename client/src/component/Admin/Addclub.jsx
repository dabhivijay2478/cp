import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { useNavigate } from "react-router-dom";
import "./addclub.css";
export default function Addclub() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [Dates, setDates] = useState({
    startDate: null,
  });
  const handleDatesChange = (newDates) => {
    console.log("newDates:", newDates);
    setDates(newDates);
  };

  const [Factulty, setFactulty] = useState("");
  const [Student, setStudent] = useState("");
  const [ClubName, setClubName] = useState("");

  const [clubNameError, setClubNameError] = useState("");
  const [facultyError, setFacultyError] = useState("");
  const [studentError, setStudentError] = useState("");
  const [datesError, setDatesError] = useState("");

  const validateInput = () => {
    let formValid = true;
    if (!ClubName.trim()) {
      setClubNameError("Club Name is required.");
      formValid = false;
    } else {
      setClubNameError("");
    }
    if (!Factulty.trim()) {
      setFacultyError("Main Handler Factulty is required.");
      formValid = false;
    } else {
      setFacultyError("");
    }
    if (!Student.trim()) {
      setStudentError("Main Handler Student is required.");
      formValid = false;
    } else {
      setStudentError("");
    }
    if (!Dates.startDate) {
      setDatesError("Date is required.");
      formValid = false;
    } else {
      setDatesError("");
    }
  };
  const addclub = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!validateInput()) {
      setIsLoading(false);
      return;
    }
    const res = await fetch("/addnewclub", {
      method: "POST",
      changeOrigin: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ClubName,
        Factulty,
        Student,
        Dates,
      }),
    });
    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invaild");
    } else if (res.status === 422 || !data) {
      window.alert("Bad");
    } else {
      window.alert("SucessFully Add Club");
      setIsLoading(false);

      navigate("/Admindash");
    }
  };
  const handlerest = () => {
    setClubName("");
    setFactulty("");
    setStudent("");
    setDates("DD-MM-YYYY");
  };

  return (
    <>
      <div className="flex justify-center container">
        <div className="card w-full bg-white border-double  container  shadow-lg ">
          <div className="flex px-2 py-3 justify-center">
            <input
              type="text"
              placeholder="Club Name"
              value={ClubName}
              onChange={(e) => setClubName(e.target.value)}
              className="input input-bordered  input-primary w-full bg-white max-w-xs text-black"
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
          .
          <div className="flex px-2 py-3 justify-center">
            {datesError && (
              <span className="error text-red-500">{datesError}</span>
            )}
          </div>
          <div>
            <button
              onClick={handlerest}
              class="inline-flex items-center ml-5 mb-2 justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              data-rounded="rounded-md"
              data-primary="blue-600"
              data-primary-reset="{}"
            >
              Reset
            </button>
            <button
              onClick={addclub}
              class="inline-flex items-center ml-10 mb-2 justify-end px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              data-rounded="rounded-md"
              data-primary="blue-600"
              data-primary-reset="{}"
            >
              Add Club
            </button>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-gray-900 flex justify-center items-center z-50">
          <div class="three-body">
            <div class="three-body__dot"></div>
            <div class="three-body__dot"></div>
            <div class="three-body__dot"></div>
          </div>
        </div>
      )}
    </>
  );
}
