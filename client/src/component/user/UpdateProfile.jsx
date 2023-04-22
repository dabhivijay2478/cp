import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function UpdateProfile(props) {
  const { Enrollment } = props;
  const { Email } = props;
  const { Name } = props;
  const { PhoneNO } = props;
  const { Class } = props;
  const { ClubName } = props;
  const { FavTech } = props;
  const { Role } = props;
  const { Batch } = props;

  const [UpName, setUpName] = useState(Name || "");
  const [UpEnrollmentNo, setUpEnrollmentNo] = useState(Enrollment || "");
  const [UpEmail, setUpEmail] = useState(Email || "");
  const [UpPhoneNO, setUpPhoneNO] = useState(PhoneNO || "");
  const [UpClass, setUpClass] = useState(Class || "");
  const [UpBatch, setUpBatch] = useState(Batch || "");
  const [UpClubName, setUpClubName] = useState(ClubName || "");
  const [UpFavTech, setUpFavTech] = useState(FavTech || "");
  const [UpRole, setUpRole] = useState(Role || "");
  const [UpPassword, setUpPassword] = useState(Enrollment || "");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setUpName(Name || "");
    setUpEnrollmentNo(Enrollment || "");
    setUpEmail(Email || "");
    setUpPhoneNO(PhoneNO || "");
    setUpClass(Class || "");
    setUpBatch(Batch || "");
    setUpClubName(ClubName || "");
    setUpFavTech(FavTech || "");
    setUpRole(Role || "");
    setUpPassword(Enrollment || "");
  }, [props]);

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
  const [isOpen, setIsOpen] = useState(false);
  const handleModalToggle = () => {
    setIsOpen(!isOpen);
  };

  const validateInput = () => {
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
      setIsLoading(false);
      return await response;
    } catch (error) {
      setIsLoading(false);
      if (error.response && error.response.status === 400) {
        window.alert("Server Error");
      } else if (error.response && error.response.status === 422) {
        window.alert("Data Not Valid!!");
      } else {
        window.alert("An error occurred.");
      }
      throw error;
    }
  };
  return (
    <>
      <input
        type="checkbox"
        id="updateprofile"
        className="modal-toggle "
        checked={isOpen}
        onChange={handleModalToggle}
      />
      <label htmlFor="updateprofile" className="modal cursor-">
        <div className="modal-box w-11/12 max-w-5xl ">
          <h3 className="font-bold text-lg text-teal-500">
            Update User Profile
          </h3>
          <label
            htmlFor="updateprofile"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <span className="text-white">User EnrollmentNo: {Enrollment}</span>
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
                    value={UpEnrollmentNo}
                    onChange={(e) => setUpEnrollmentNo(e.target.value)}
                    id="EnrollmentNo"
                    readOnly
                  />
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
                      value={UpPhoneNO}
                      onChange={(e) => setUpPhoneNO(e.target.value)}
                      id="phone"
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
                      value={UpClass}
                      onChange={(e) => setUpClass(e.target.value)}
                      id="class"
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
                      value={UpBatch}
                      onChange={(e) => setUpBatch(e.target.value)}
                      id="Batch"
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
                      value={UpClubName}
                      onChange={(e) => setUpClubName(e.target.value)}
                      id="ClubName"
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
                    value={UpFavTech}
                    onChange={(e) => setUpFavTech(e.target.value)}
                    id="Fav Tech"
                  ></input>
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
                    readOnly
                  ></input>
                </div>
              </form>
            </div>
          </p>
          <div className="modal-action">
            <label
              // htmlFor="updateprofile"
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
          <div class="passloader"></div>
        </div>
      )}
    </>
  );
}
