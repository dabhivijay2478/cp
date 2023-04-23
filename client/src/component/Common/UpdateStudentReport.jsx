import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./update.css";
export default function UpdateStudentReport(props) {
  const { selectedRow } = props;
  const [UpName, setUpName] = useState(selectedRow?.Name || "");
  const [UpEnrollmentNo, setUpEnrollmentNo] = useState(
    selectedRow?.EnrollmentNo || ""
  );
  const [UpEmail, setUpEmail] = useState(selectedRow?.Email || "");
  const [UpPhoneNO, setUpPhoneNO] = useState(selectedRow?.PhoneNO || "");
  const [UpClass, setUpClass] = useState(selectedRow?.Class || "");
  const [UpBatch, setUpBatch] = useState(selectedRow?.Batch || "");
  const [UpClubName, setUpClubName] = useState(selectedRow?.ClubName || "");
  const [UpFavTech, setUpFavTech] = useState(selectedRow?.FavTech || "");
  const [UpRole, setUpRole] = useState(selectedRow?.Role || "");
  const [UpPassword, setUpPassword] = useState(selectedRow?.EnrollmentNo || "");

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleModalToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setUpName(selectedRow?.Name || "");
    setUpEnrollmentNo(selectedRow?.EnrollmentNo || "");
    setUpEmail(selectedRow?.Email || "");
    setUpPhoneNO(selectedRow?.PhoneNO || "");
    setUpClass(selectedRow?.Class || "");
    setUpBatch(selectedRow?.Batch || "");
    setUpClubName(selectedRow?.ClubName || "");
    setUpFavTech(selectedRow?.FavTech || "");
    setUpRole(selectedRow?.Role || "");
    setUpPassword(selectedRow?.EnrollmentNo || "");
  }, [selectedRow]);

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
    // Reset all error messages
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

    if (UpName === "") {
      setNameError("Name is required.");
      isValid = false;
    }
    if (UpEnrollmentNo === "") {
      setEnrollmentNoError("Enrollment number is required.");
      isValid = false;
    }
    if (UpEmail === "") {
      setEmailError("Email is required.");
      isValid = false;
    }
    if (UpPhoneNO === "") {
      setPhoneNOError("Phone number is required.");
      isValid = false;
    }
    if (UpClass === "") {
      setClassError("Class is required.");
      isValid = false;
    }
    if (UpBatch === "") {
      setBatchError("Batch is required.");
      isValid = false;
    }
    if (UpClubName === "") {
      setClubNameError("Club name is required.");
      isValid = false;
    }
    if (UpFavTech === "") {
      setFavTechError("Favorite technology is required.");
      isValid = false;
    }
    if (UpRole === "") {
      setRoleError("Role is required.");
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(UpEmail)) {
      setEmailError("Invalid email format.");
      isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(UpPhoneNO)) {
      setPhoneNOError("Invalid phone number format.");
      isValid = false;
    }

    return isValid;
  };

  const updateUser = async (e) => {
    e.preventDefault();
    if (!validateInput()) {
      return;
    }
    setIsOpen(false);
    setIsLoading(true);
    try {
      const response = await axios.put(`/updateuser/${UpEnrollmentNo}`, {
        Name: UpName,
        EnrollmentNo: UpEnrollmentNo,
        Email: UpEmail,
        PhoneNO: UpPhoneNO,
        Class: UpClass,
        Batch: UpBatch,
        ClubName: UpClubName,
        FavTech: UpFavTech,
        Role: UpRole,
        Password: UpPassword,
      });

      window.alert("Successfully Update User");
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
      <input
        type="checkbox"
        id="UpdateStudentReport"
        className="modal-toggle"
        checked={isOpen}
        onChange={handleModalToggle}
      />
      <label htmlFor="UpdateStudentReport" className="modal cursor-pointer">
        <div className="modal-box w-11/12 max-w-5xl ">
          <h3 className="font-bold text-lg text-teal-500">
            Update User Profile
          </h3>
          <label
            htmlFor="UpdateStudentReport"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <span className="text-white">
            User EnrollmentNo:{UpEnrollmentNo}{" "}
          </span>
          <p className="py-4">
            <div className="flex justify-center">
              <form method="POST" class="space-y-4 text-slate-900 font-bold ">
                <div>
                  <label class="sr-only" for="name">
                    Name
                  </label>
                  <input
                    class="w-full rounded-lg bg-white border-solid border border-blue-400   p-3 input input-bordered  input-primary text-sm"
                    placeholder="Name"
                    type="text"
                    value={UpName}
                    onChange={(e) => setUpName(e.target.value)}
                    id="name"
                  />{" "}
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
                    value={UpEnrollmentNo}
                    onChange={(e) => setUpName(e.target.value)}
                    id="EnrollmentNo"
                    readOnly
                  />{" "}
                  {EnrollmentNoError && (
                    <span className="error text-red-500">
                      {EnrollmentNoError}
                    </span>
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
                      value={UpEmail}
                      onChange={(e) => setUpEmail(e.target.value)}
                      id="email"
                    />{" "}
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
                      value={UpPhoneNO}
                      onChange={(e) => setUpPhoneNO(e.target.value)}
                      id="phone"
                    />{" "}
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
                      value={UpClass}
                      onChange={(e) => setUpClass(e.target.value)}
                      id="class"
                    />{" "}
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
                      value={UpBatch}
                      onChange={(e) => setUpBatch(e.target.value)}
                      id="Batch"
                    />{" "}
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
                      value={UpClubName}
                      onChange={(e) => setUpClubName(e.target.value)}
                      id="ClubName"
                    />{" "}
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
                    value={UpFavTech}
                    onChange={(e) => setUpFavTech(e.target.value)}
                    id="Fav Tech"
                  ></input>{" "}
                  {FavTechError && (
                    <span className="error text-red-500">{FavTechError}</span>
                  )}
                </div>
                <div>
                  <label class="sr-only" for="favtech">
                    Role
                  </label>

                  <input
                    class="w-full rounded-lg bg-white border-solid border border-blue-400 p-3 input input-bordered  input-primary text-sm"
                    placeholder="Role"
                    value={UpRole}
                    onChange={(e) => setUpRole(e.target.value)}
                    id="Role"
                  ></input>
                  {RoleError && (
                    <span className="error text-red-500">{RoleError}</span>
                  )}
                </div>
                <div>
                  <label class="sr-only" for="favtech">
                    Password
                  </label>

                  <input
                    class="w-full rounded-lg bg-white border-solid border border-blue-400 p-3 input input-bordered  input-primary text-sm"
                    placeholder="Password"
                    value={UpPassword}
                    onChange={(e) => setUpPassword(e.target.value)}
                    id="Password"
                  ></input>
                  {PasswordError && (
                    <span className="error text-red-500">{PasswordError}</span>
                  )}
                </div>
              </form>
            </div>
          </p>
          <div className="modal-action">
            <label
              htmlFor="UpdateStudentReport"
              onClick={updateUser}
              className="btn btn-outline btn-accent"
            >
              Update
            </label>
          </div>
        </div>
      </label>
      {isLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-gray-900 flex justify-center items-center z-50">
          <div class="item">
            <div class="loader-pulse"></div>
          </div>
        </div>
      )}
    </>
  );
}
