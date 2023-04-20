import React from "react";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export default function UpdateStudentReport(props) {
  const { selectedRow } = props;
  console.log(selectedRow);
  const [UpName, setUpName] = useState(selectedRow?.Name || '');
  const [UpEnrollmentNo, setUpEnrollmentNo] = useState(selectedRow?.EnrollmentNo || '');
  const [UpEmail, setUpEmail] = useState(selectedRow?.Email || '');
  const [UpPhoneNO, setUpPhoneNO] = useState(selectedRow?.PhoneNO || '');
  const [UpClass, setUpClass] = useState(selectedRow?.Class || '');
  const [UpBatch, setUpBatch] = useState(selectedRow?.Batch || '');
  const [UpClubName, setUpClubName] = useState(selectedRow?.ClubName || '');
  const [UpFavTech, setUpFavTech] = useState(selectedRow?.FavTech || '');
  const [UpRole, setUpRole] = useState(selectedRow?.Role || '');
  const [UpPassword, setUpPassword] = useState(selectedRow?.EnrollmentNo || '');
  

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setUpName(selectedRow?.Name || '');
    setUpEnrollmentNo(selectedRow?.EnrollmentNo || '');
    setUpEmail(selectedRow?.Email || '');
    setUpPhoneNO(selectedRow?.PhoneNO || '');
    setUpClass(selectedRow?.Class || '');
    setUpBatch(selectedRow?.Batch || '');
    setUpClubName(selectedRow?.ClubName || '');
    setUpFavTech(selectedRow?.FavTech || '');
    setUpRole(selectedRow?.Role || '');
    setUpPassword(selectedRow?.EnrollmentNo || '');
  }, [selectedRow]);
  
  const handleModalToggle = () => {
    setIsOpen(!isOpen);
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
          <span className="text-white">User EnrollmentNo: </span>
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
                      value={UpEmail}
                      onChange={(e) => setUpEmail(e.target.value)}
                      id="email"
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
                      value={UpPhoneNO}
                      onChange={(e) => setUpPhoneNO(e.target.value)}
                      id="phone"
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
                      value={UpClass}
                      onChange={(e) => setUpClass(e.target.value)}
                      id="class"
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
                      value={UpBatch}
                      onChange={(e) => setUpBatch(e.target.value)}
                      id="Batch"
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
                      value={UpClubName}
                      onChange={(e) => setUpClubName(e.target.value)}
                      id="ClubName"
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
                    value={UpFavTech}
                    onChange={(e) => setUpFavTech(e.target.value)}
                    id="Fav Tech"
                  ></input>
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
                </div>
              </form>
            </div>
          </p>
          <div className="modal-action">
            <label
              htmlFor="UpdateStudentReport"
              // onClick={registeruser}
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
