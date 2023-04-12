import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Addevent() {
  const history = useNavigate();
  const [Certifiacate, setCertifiacate] = useState("");
  const [ClubName, setClubname] = useState("");
  const [EventName, setEventName] = useState("");
  const [HandlerName, setHandlerName] = useState("");
  const [Descrption, setDescrption] = useState("");
  const [Venue, setVenue] = useState("");
  const Certifiacatechange = (e) => {
    setCertifiacate(e.target.value);
  };
  const handlerest = () => {
    setClubname("");
    setEventName("");
    setHandlerName("");
    setVenue("");
    setDescrption("");
    setCertifiacate("");
  };
  const Addevent = async (e) => {
    e.preventDefault();
    const res = await fetch("/addnewevent", {
      method: "POST",
      changeOrigin: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ClubName,
        EventName,
        HandlerName,
        Descrption,
        Venue,
        Certifiacate,
      }),
    });
    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invaild");
    } else if (res.status === 422 || !data) {
      window.alert("Bad");
    } else {
      window.alert("SucessFully Add Event");
      history("/Admindash");
    }
  };

  return (
    <>
      <div className="flex justify-center container">
        <div className="card w-full  bg-white border-double  container  shadow-lg ">
          <div className="flex px-2 py-3 justify-center">
            <input
              type="text"
              value={ClubName}
              onChange={(e) => setClubname(e.target.value)}
              placeholder="Enter The Club Name"
              className="input input-bordered  input-accent w-full max-w-xs mt-2 px-3 py-2 bg-white text-gray-900"
            />
          </div>
          <div className="flex px-2 py-3 justify-center">
            <input
              type="text"
              value={EventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Enter The Event Name"
              className="input input-bordered  input-accent w-full max-w-xs mt-2 px-3 py-2 bg-white text-gray-900"
            />
          </div>
          <div className="flex px-2 py-2 bg-white text-gray-900 justify-center">
            <input
              type="text"
              value={HandlerName}
              onChange={(e) => setHandlerName(e.target.value)}
              placeholder="Enter The Handler Name"
              className="input input-bordered  input-accent w-full max-w-xs mt-2 px-3 py-2 bg-white text-gray-900"
            />
          </div>
          <div className="flex px-2 py-2 bg-white text-gray-900 justify-center">
            <input
              type="text"
              value={Descrption}
              onChange={(e) => setDescrption(e.target.value)}
              placeholder="Enter The Descrption"
              className="input input-bordered  input-accent w-full max-w-xs mt-2 px-3 py-2 bg-white text-gray-900"
            />
          </div>
          <div className="flex px-2 py-2 bg-white text-gray-900 justify-center">
            <input
              type="text"
              value={Venue}
              onChange={(e) => setVenue(e.target.value)}
              placeholder="Venue"
              className="input input-bordered  input-accent w-full max-w-xs mt-2 px-3 py-2 bg-white text-gray-900"
            />
          </div>
          <div className="flex px-2 py-2  text-gray-900 justify-center">
            <h3 class="mb-4 font-normal text-green input input-bordered  input-accent w-full max-w-xs mt-2 px-3 py-2 bg-white text-gray-900">
              Certifiacate :
              <input
                type="radio"
                name="radio-4"
                className="radio radio-accent ml-3"
                value="YES"
                onChange={Certifiacatechange}
              />
              <label
                for="default-radio-1"
                class="ml-2 text-lg font-medium text-gray-900 dark:text-black"
              >
                Yes
              </label>
              <input
                type="radio"
                name="radio-4"
                value="NO"
                onChange={Certifiacatechange}
                className="radio radio-accent ml-3"
              />
              <label
                for="default-radio-2"
                class="ml-2 text-lg font-medium text-gray-900 dark:text-black"
              >
                No
              </label>
            </h3>
          </div>
          <div className="px-2 py-2">
            <button
              onClick={handlerest}
              class="px-5 py-2.5 relative rounded group  text-white font-medium inline-block"
            >
              <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span class="relative">Reset</span>
            </button>
            <button
              onClick={Addevent}
              class="px-5 ml-5 py-2.5 relative rounded group  text-white font-medium inline-block"
            >
              <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span class="relative">Add</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
