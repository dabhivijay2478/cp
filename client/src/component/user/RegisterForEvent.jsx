import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./changepasswordloader.css";
export default function RegisterForEvent(props) {
  const history = useNavigate();

  const { eventName } = props;
  const { ClubNameprops } = props;
  const [isLoading, setIsLoading] = useState(false);

  const [userData, setUserData] = useState({});

  const Name = userData.Name;
  const EnrollmentNo = userData.EnrollmentNo;
  const [PhoneNO, setPhoneNO] = useState("");
  const [Class, setClass] = useState("");
  const [Batch, setBatch] = useState("");
  const [ClubName, setClubName] = useState("");
  const [FavTech, setFavTech] = useState("");
  const email = Cookies.get("Studentemail");

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

  const registeruser = async (e) => {
    e.preventDefault();
    setIsLoading(true);

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
      <input type="checkbox" id="registermodal" className="modal-toggle " />
      <label htmlFor="registermodal" className="modal cursor-">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            <label
              htmlFor="registermodal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </h3>
          <h3 className="font-bold text-lg text-teal-500">
            Register For This Event : {eventName}
          </h3>
          <p className="py-4 text-sky-500">ClubName : {ClubNameprops}</p>
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
              </div>
            </form>
          </div>
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
