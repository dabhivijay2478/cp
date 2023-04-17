import React from "react";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import UpdateProfile from "./UpdateProfile";
import Userchangepassword from "./Userchangepassword";
export default function UserProfile() {
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

  return (
    <>
      <div className="mt-16 flex justify-center">
        <div className="card w-11/12 bg-base-100 shadow-cyan-400 shadow-xl">
          <div className="card-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            <div class="rounded-lg p-8 shadow-lg border dark:hover:border-blue-600 border-solid shadow-blue-500 lg:col-span-3 lg:p-12">
              <form method="POST" class="space-y-4 font-bold text-slate-800">
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
                      value={userData.PhoneNO}
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
                      value={userData.Class}
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
                      value={userData.Batch}
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
                      value={userData.ClubName}
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
                    value={userData.FavTech}
                  ></input>
                </div>
                <div>
                  <label class="sr-only" for="favtech">
                    Fav Tech
                  </label>

                  <input
                    class="w-full rounded-lg bg-white border-solid border border-blue-400 p-3 input input-bordered  input-primary text-sm"
                    placeholder="Role"
                    id="Role"
                    value={userData.Role}
                  ></input>
                </div>
              </form>
            </div>

            <div className="px-3 py-2">
              <label
                htmlFor="changepassword"
                className="btn btn-outline btn-success items-center px-3 py-2 mt-1 flex justify-center "
              >
                Change Password
              </label>
              <label
                htmlFor="updateprofile"
                className="btn btn-outline  btn-info items-center px-3 py-2 mt-3 flex justify-center "
              >
                Change Profile
              </label>
            </div>
          </div>
        </div>
      </div>
      <Userchangepassword Enrollment={userData.EnrollmentNo} />

      <UpdateProfile
        Enrollment={userData.EnrollmentNo}
        Email={userData.Email}
      />
    </>
  );
}
