import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./changepasswordloader.css";
import axios from "axios";

export default function Userchangepassword(props) {
  const { Enrollment } = props;
  const nav = useNavigate();
  const [Currentpassword, setCurrentpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [changepasswordmodal, setChangepasswordmodal] = useState(false);

  const Chnagepassmodal = () => {
    setChangepasswordmodal(!changepasswordmodal);
  };
  const Changepassword = async () => {
    setIsLoading(true);
    setChangepasswordmodal(false);

    try {
      const response = await axios.put(
        `/changepassword`,
        {
          EnrollmentNo: Enrollment,
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
      <div>
        <div>
          <input
            type="checkbox"
            id="changepassword"
            className="modal-toggle"
            checked={changepasswordmodal}
            onChange={Chnagepassmodal}
          />
          <label htmlFor="changepassword" className="modal cursor-pointer">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Change Password{" "}
                <label
                  htmlFor="changepassword"
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
                  value={Enrollment}
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
                  // htmlFor="changepassword"
                  onClick={Changepassword}
                  className="btn btn-outline btn-accent"
                >
                  Change Password
                </label>
              </div>
            </div>
          </label>
        </div>
        {isLoading && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-gray-900 flex justify-center items-center z-50">
            <div class="passloader"></div>
          </div>
        )}
      </div>
    </>
  );
}
