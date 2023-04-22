import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./changepasswordloader.css";
export default function RegisterForEvent(props) {
  const history = useNavigate();

  const email = Cookies.get("Studentemail");
  const { eventName } = props;
  const { ClubNameprops } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const Name = userData.Name;
  const EnrollmentNo = userData.EnrollmentNo;
  const [PhoneNO, setPhoneNO] = useState("");
  const [Class, setClass] = useState("");
  const [Batch, setBatch] = useState("");
  const [ClubName, setClubName] = useState("");
  const [FavTech, setFavTech] = useState("");
  const [eventNameerror, seteventNameerror] = useState("");
  const [ClubNamepropserror, setClubNamepropseroor] = useState("");

  const [NameError, setNameError] = useState("");
  const [EnrollmentNoError, setEnrollmentNoError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PhoneNOError, setPhoneNOError] = useState("");
  const [ClassError, setClassError] = useState("");
  const [BatchError, setBatchError] = useState("");
  const [ClubNameError, setClubNameError] = useState("");
  const [FavTechError, setFavTechError] = useState("");
  const [RoleError, setRoleError] = useState("");
  const [PasswordError, setPasswordError] = useState("");

  const validateInput = () => {
    seteventNameerror("");
    setClubNamepropseroor("");
    setNameError("");
    setEnrollmentNoError("");
    setEmailError("");
    setPhoneNOError("");
    setClassError("");
    setBatchError("");
    setClubNameError("");
    setFavTechError("");
    setRoleError("");
    setPasswordError("");

    let isValid = true;

    if (eventName === "") {
      seteventNameerror("EventName is required.");
      isValid = false;
    }
    if (ClubNameprops === "") {
      setClubNamepropseroor("ClubName is required.");
      isValid = false;
    }

    if (Name === "") {
      setNameError("Name is required.");
      isValid = false;
    }
    if (EnrollmentNo === "") {
      setEnrollmentNoError("Enrollment number is required.");
      isValid = false;
    }
    if (email === "") {
      setEmailError("Email is required.");
      isValid = false;
    }
    if (PhoneNO === "") {
      setPhoneNOError("Phone number is required.");
      isValid = false;
    }
    if (Class === "") {
      setClassError("Class is required.");
      isValid = false;
    }
    if (Batch === "") {
      setBatchError("Batch is required.");
      isValid = false;
    }
    if (ClubName === "") {
      setClubNameError("Club name is required.");
      isValid = false;
    }
    if (FavTech === "") {
      setFavTechError("Favorite technology is required.");
      isValid = false;
    }
    if (Role === "") {
      setRoleError("Role is required.");
      isValid = false;
    }
    if (Password === "") {
      setPasswordError("Password is required.");
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format.");
      isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(PhoneNO)) {
      setPhoneNOError("Invalid phone number format.");
      isValid = false;
    }

    return isValid;
  };

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
  const handleModalToggle = () => {
    setIsOpen(!isOpen);
  };

  const registeruser = async (e) => {
    e.preventDefault();

    if (!validateInput()) {
      return;
    }

    setIsLoading(true);

    setIsOpen(false);

    try {
      const registerresponse = await axios.post("/registerstudentevent", {
        EventName: eventName,
        Name,
        EnrollmentNo,
        Email: email,
        PhoneNO,
        Class,
        Batch,
        ClubName,
        FavTech,
      });

      if (registerresponse.status === 400) {
        window.alert("Error occurred while registering");
      } else {
        window.alert(`Successfully registered for event ${eventName}`);
        setIsLoading(false);

        history("/User");
      }
    } catch (error) {
      if (error.response.status === 400) {
        window.alert("Server not found");
      } else if (error.response.status === 422) {
        window.alert("Validation error");
      } else {
        window.alert("Unknown error occurred while registering");
      }
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id="registermodal"
        className="modal-toggle"
        checked={isOpen}
        onChange={handleModalToggle}
      />
      <label htmlFor="registermodal" className="modal cursor-pointer">
        <div className="modal-box w-11/12 max-w-5xl ">
          <h3 className="font-bold text-lg text-teal-500">
            Register For This Event : {eventName}
          </h3>
          <label
            htmlFor="registermodal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          ClubName : {ClubNameprops}
          <p className="py-4">
            <div className="flex justify-center">
              <form method="POST" class="space-y-4 text-slate-900 font-bold ">
                <div>
                  <label class="sr-only" for="name">
                    Name
                  </label>
                  <input
                    value={userData.Name}
                    class="w-full rounded-lg bg-white border-solid border border-blue-400   p-3 input input-bordered  input-primary text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                  {NameError && (
                    <span className="error text-red-500">{NameError}</span>
                  )}
                </div>
                <div>
                  <label class="sr-only" for="name">
                    EnrollmentNo
                  </label>
                  <input
                    class="w-full rounded-lg bg-white border-solid border border-blue-400  p-3 input input-bordered  input-primary text-sm"
                    placeholder="EnrollmentNo"
                    type="text"
                    id="EnrollmentNo"
                    value={userData.EnrollmentNo}
                  />
                  {EnrollmentNoError && (
                    <span className="error text-red-500">{EnrollmentNoError}</span>
                  )}
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="sr-only" for="email">
                      Email
                    </label>
                    <input
                      class="w-full rounded-lg bg-white border-solid border border-blue-400 p-3 input input-bordered  input-primary text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      value={userData.Email}
                    />
                    {EmailError && (
                      <span className="error text-red-500">{EmailError}</span>
                    )}
                  </div>

                  <div>
                    <label class="sr-only" for="phone">
                      Phone
                    </label>
                    <input
                      class="w-full rounded-lg bg-white border-solid border border-blue-400 p-3 input input-bordered  input-primary text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      value={PhoneNO}
                      onChange={(e) => setPhoneNO(e.target.value)}
                    />
                    {PhoneNOError && (
                      <span className="error text-red-500">{PhoneNOError}</span>
                    )}
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <label class="sr-only" for="phone">
                      class
                    </label>
                    <input
                      class="w-full rounded-lg bg-white border-solid border border-blue-400 p-3 input input-bordered  input-primary text-sm"
                      placeholder="class"
                      type="text"
                      id="phone"
                      value={Class}
                      onChange={(e) => setClass(e.target.value)}
                    />
                    {ClassError && (
                      <span className="error text-red-500">{ClassError}</span>
                    )}
                  </div>

                  <div>
                    <label class="sr-only" for="phone">
                      Batch
                    </label>
                    <input
                      class="w-full rounded-lg bg-white border-solid border border-blue-400 p-3 input input-bordered  input-primary text-sm"
                      placeholder="Batch"
                      type="text"
                      id="phone"
                      value={Batch}
                      onChange={(e) => setBatch(e.target.value)}
                    />
                    {BatchError && (
                      <span className="error text-red-500">{BatchError}</span>
                    )}
                  </div>

                  <div>
                    <label class="sr-only" for="phone">
                      Club Name
                    </label>
                    <input
                      class="w-full rounded-lg bg-white border-solid border border-blue-400 p-3 input input-bordered  input-primary text-sm"
                      placeholder="Club Name"
                      type="tel"
                      id="phone"
                      value={ClubName}
                      onChange={(e) => setClubName(e.target.value)}
                    />
                    {ClubNameError && (
                      <span className="error text-red-500">
                        {ClubNameError}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label class="sr-only" for="favtech">
                    Fav Tech
                  </label>

                  <input
                    class="w-full rounded-lg bg-white border-solid border border-blue-400 p-3 input input-bordered  input-primary text-sm"
                    placeholder="Fav Tech"
                    id="Fav Tech"
                    value={FavTech}
                    onChange={(e) => setFavTech(e.target.value)}
                  ></input>
                  {FavTechError && (
                    <span className="error text-red-500">{FavTechError}</span>
                  )}
                </div>
              </form>
            </div>
          </p>
          <div className="modal-action">
            <label
              htmlFor="registermodal"
              onClick={registeruser}
              className="btn btn-outline btn-accent"
            >
              Register For Event
            </label>
          </div>
        </div>
      </label>
      {isLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-gray-900 flex justify-center items-center z-50">
          <div class="passloader"></div>
        </div>
      )}
    </>
  );
}
