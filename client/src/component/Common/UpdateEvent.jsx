import React from "react";
import "./update.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Datepicker from "react-tailwindcss-datepicker";

export default function UpdateEvent(props) {
  const { selectedRow } = props;
  const history = useNavigate();

  const [Certifiacate, setCertifiacate] = useState(
    selectedRow?.Certifiacate || ""
  );

  const [ClubName, setClubname] = useState(selectedRow?.ClubName || "");
  const [EventName, setEventName] = useState(selectedRow?.EventName || "");
  const [HandlerName, setHandlerName] = useState(
    selectedRow?.HandlerName || ""
  );
  const [Descrption, setDescrption] = useState(selectedRow?.Descrption || "");
  const [Venue, setVenue] = useState(selectedRow?.Venue || "");
  const Certifiacatechange = (e) => {
    setCertifiacate(e.target.value);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [Dates, setDates] = useState({
    startDate: null,
  });

  const handleDatesChange = (newDates) => {
    console.log("newDates:", newDates);
    setDates(newDates);
  };
  const handleModalToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setCertifiacate(selectedRow?.Certifiacate || "");
    setClubname(selectedRow?.ClubName || "");
    setEventName(selectedRow?.EventName || "");
    setHandlerName(selectedRow?.HandlerName || "");
    setDescrption(selectedRow?.Descrption || "");
    setVenue(selectedRow?.Venue || "");
  }, [selectedRow]);

  const [clubNameError, setClubNameError] = useState("");
  const [eventNameError, setEventNameError] = useState("");
  const [handlerNameError, setHandlerNameError] = useState("");
  const [descrptionError, setDescrptionError] = useState("");
  const [venueError, setVenueError] = useState("");
  const [datesError, setDatesError] = useState("");
  const [Certifiacateerror, setCertifiacateerror] = useState("");
  const validateForm = () => {
    let isValid = true;

    if (!ClubName) {
      setClubNameError("Please enter Club Name");
      isValid = false;
    } else {
      setClubNameError("");
    }

    if (!Certifiacate) {
      setCertifiacateerror("Please Select the yes or no for certificate");
      isValid = false;
    } else {
      setCertifiacateerror("");
    }

    if (!EventName) {
      setEventNameError("Please enter Event Name");
      isValid = false;
    } else {
      setEventNameError("");
    }

    if (!HandlerName) {
      setHandlerNameError("Please enter Handler Name");
      isValid = false;
    } else {
      setHandlerNameError("");
    }

    if (!Venue) {
      setVenueError("Please enter Venue");
      isValid = false;
    } else {
      setVenueError("");
    }

    if (!Descrption) {
      setDescrptionError("Please enter Description");
      isValid = false;
    } else {
      setDescrptionError("");
    }

    if (!Dates.startDate) {
      setDatesError("Please select a date");
      isValid = false;
    } else {
      setDatesError("");
    }

    return isValid;
  };

  const handleUpdateEvent = async (e, eventname) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsOpen(false);
    setIsLoading(true);
    try {
      const response = await axios.put(`/updateevent/${eventname}`, {
        ClubName,
        EventName,
        HandlerName,
        Descrption,
        Venue,
        Certifiacate,
        Dates,
      });

      window.alert("Successfully Update Event");
      // history("/Admindash");

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
          id="updateevent"
          className="modal-toggle"
          checked={isOpen}
          onChange={handleModalToggle}
        />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Update Event</h3>
            <label
              htmlFor="updateevent"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="flex justify-center">
              <div className="card bg-white border-double container shadow-lg w-full md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
                <div className="flex px-2 py-3 justify-center">
                  <input
                    type="text"
                    value={ClubName}
                    onChange={(e) => setClubname(e.target.value)}
                    placeholder="Enter The Club Name"
                    className="input input-bordered  input-accent w-full max-w-xs mt-2 px-3 py-2 bg-white text-gray-900"
                    readOnly
                  />
                </div>
                <div className="flex px-2 py-3  justify-center  ">
                  {clubNameError && (
                    <span className="error text-red-500">{clubNameError}</span>
                  )}
                </div>
                <div className="flex px-2 py-3 justify-center">
                  <input
                    type="text"
                    value={EventName}
                    onChange={(e) => setEventName(e.target.value)}
                    placeholder="Enter The Event Name"
                    className="input input-bordered  input-accent w-full max-w-xs mt-2 px-3 py-2 bg-white text-gray-900"
                    readOnly
                  />
                </div>
                <div className="flex px-2 py-3  justify-center  ">
                  {eventNameError && (
                    <span className="error text-red-500">{eventNameError}</span>
                  )}
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
                <div className="flex px-2 py-3  justify-center  ">
                  {handlerNameError && (
                    <span className="error text-red-500">
                      {handlerNameError}
                    </span>
                  )}
                </div>
                <div className="flex px-2 py-2 bg-white text-gray-900 justify-center">
                  <textarea
                    type="text"
                    value={Descrption}
                    rows={3}
                    onChange={(e) => setDescrption(e.target.value)}
                    placeholder="Enter The Descrption"
                    className="textarea textarea-accent  input-accent w-full max-w-xs  mt-2 px-3 py-2 bg-white text-gray-900"
                  />
                </div>
                <div className="flex px-2 py-3  justify-center  ">
                  {descrptionError && (
                    <span className="error text-red-500">
                      {descrptionError}
                    </span>
                  )}
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
                <div className="flex px-2 py-3  justify-center  ">
                  {venueError && (
                    <span className="error text-red-500">{venueError}</span>
                  )}
                </div>
                <div className="flex px-2 py-2  text-gray-900 justify-center">
                  <h3 class="mb-4 font-normal text-green input input-bordered  input-accent w-full max-w-xs mt-2 px-3 py-2 bg-white text-gray-900">
                    Certifiacate :
                    <input
                      type="radio"
                      name="radio-4"
                      className="radio radio-accent ml-3"
                      value="YES"
                      checked={Certifiacate === "YES"}
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
                      checked={Certifiacate === "NO"}
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
                <div className="flex px-2 py-3  justify-center  ">
                  {Certifiacateerror && (
                    <span className="error text-red-500">
                      {Certifiacateerror}
                    </span>
                  )}
                </div>
                <span className="flex justify-center text-red-600">
                  {selectedRow?.Dates.startDate}
                </span>
                <div className="flex px-2 py-3  justify-center  ">
                  <div className=" w-full bg-white max-w-xs text-black border rounded-lg border-purple-500">
                    <Datepicker
                      startDate={Dates.startDate}
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
                <div className="flex px-2 py-3  justify-center  ">
                  {datesError && (
                    <span className="error text-red-500">{datesError}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-action">
              <label
                className="btn btn-outline btn-info"
                onClick={(e) => handleUpdateEvent(e, EventName)}
              >
                Update
              </label>
            </div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-gray-900 flex justify-center items-center z-50">
          <div class="item">
            <div class="loading">
              <div class="d1"></div>
              <div class="d2"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
