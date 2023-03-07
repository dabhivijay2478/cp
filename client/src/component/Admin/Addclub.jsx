import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { useNavigate } from "react-router-dom";

export default function Addclub() {
  const history = useNavigate();

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

  const addclub = async (e) => {
    e.preventDefault();
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
    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invaild");
    } else if (res.status === 422 || !data) {
      window.alert("Bad");
    } else {
      window.alert("SucessFully Add Club");
      history("/Admindash");
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
            <input
              type="text"
              value={Factulty}
              onChange={(e) => setFactulty(e.target.value)}
              placeholder="Main Handler Factulty"
              className="input input-bordered  input-primary w-full bg-white max-w-xs text-black"
            />
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
    </>
  );
}
