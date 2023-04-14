import React from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./loader.css";
export default function UserProfile() {
  const nav = useNavigate();

  const [EnrollmentNo, setEnrollmentNo] = useState("");
  const [Currentpassword, setCurrentpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [userData, setUserData] = useState({});
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

  const Changepassword = async () => {
    setIsLoading(true);
    try {
      const response = await axios.put(
        `/changepassword`,
        {
          EnrollmentNo: userData.EnrollmentNo,
          Password: Currentpassword,
          newPassword: newpassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      window.alert("Password changed successfully");
      setIsLoading(false);

      nav("/User");
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <>
      <div className="mt-16 flex justify-center">
        <div className="card w-11/12 bg-base-100 shadow-cyan-400 shadow-xl">
          <div className="card-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            <div className="px-3 py-2">
              <h2 className="text-xl">Name</h2>
              <input
                type="text"
                placeholder="Name"
                value={userData.Name}
                className="input input-bordered input-primary w-full max-w-xs"
                readOnly
              />
            </div>
            <div className="px-3 py-2">
              <h2 className="text-xl">Email</h2>
              <input
                type="text"
                placeholder="Email"
                value={Cookies.get("email")}
                className="input input-bordered input-primary w-full max-w-xs"
                readOnly
              />
            </div>
            <div className="px-3 py-2">
              <h2 className="text-xl">Mobile No</h2>
              <input
                type="text"
                placeholder="PhoneNO"
                value={userData.PhoneNO}
                className="input input-bordered input-primary w-full max-w-xs"
                readOnly
              />
            </div>
            <div className="px-3 py-2">
              <h2 className="text-xl">Enrollment No</h2>
              <input
                type="text"
                placeholder="Enrollment No"
                value={userData.EnrollmentNo}
                className="input input-bordered input-primary w-full max-w-xs"
                readOnly
              />
            </div>
            <div className="px-3 py-2">
              <h2 className="text-xl">Class</h2>
              <input
                type="text"
                value={userData.Class}
                placeholder="Class"
                className="input input-bordered input-primary w-full max-w-xs"
                readOnly
              />
            </div>
            <div className="px-3 py-2">
              <h2 className="text-xl">Batch</h2>
              <input
                type="text"
                value={userData.Batch}
                placeholder="Batch"
                className="input input-bordered input-primary w-full max-w-xs"
                readOnly
              />
            </div>
            <div className="px-3 py-2">
              <h2 className="text-xl">ClubName</h2>
              <input
                type="text"
                value={userData.ClubName}
                placeholder="ClubName"
                className="input input-bordered input-primary w-full max-w-xs"
                readOnly
              />
            </div>
            <div className="px-3 py-2">
              <h2 className="text-xl">Fav Tech</h2>
              <input
                type="text"
                value={userData.FavTech}
                placeholder="Fav Tech"
                className="input input-bordered input-primary w-full max-w-xs"
                readOnly
              />
            </div>
            <div className="px-3 py-2">
              <h2 className="text-xl">Role</h2>
              <input
                type="text"
                value={userData.Role}
                placeholder="Role"
                className="input input-bordered input-primary w-full max-w-xs"
                readOnly
              />
            </div>
            <div className="px-3 py-2">
              <label
                htmlFor="my-modal"
                className="btn btn-outline btn-success items-center flex justify-center "
              >
                Change Password
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* The button to open modal */}

        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Change Password{" "}
              <label
                htmlFor="my-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
            </h3>
            <p className="py-4 items-center">
              <input
                type="text"
                placeholder="Enter The Enrollment No"
                className="input input-bordered input-accent w-full max-w-xs px-2 py-1 mt-1 mb-1"
                value={userData.EnrollmentNo}
                onChange={(e) => setEnrollmentNo(e.target.value)}
                readOnly
              />{" "}
              <input
                type="text"
                placeholder="Enter The Current Password"
                className="input input-bordered input-accent w-full max-w-xs px-2 py-1 mt-1 mb-1"
                value={Currentpassword}
                onChange={(e) => setCurrentpassword(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter The New Password"
                className="input input-bordered input-accent w-full max-w-xs px-2 py-1 mt-1 mb-1"
                value={newpassword}
                onChange={(e) => setnewpassword(e.target.value)}
              />
            </p>
            <div className="modal-action">
              <label
                htmlFor="my-modal"
                onClick={Changepassword}
                className="btn btn-outline btn-accent"
              >
                Change Password
              </label>
            </div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-gray-900 flex justify-center items-center z-50">
          <div class="spinner">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      )}
    </>
  );
}
