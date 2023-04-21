import React from "react";
import { useState ,useEffect} from "react";

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
  // const { Password } = props;

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

  return (
    <>
      <input type="checkbox" id="updateprofile" className="modal-toggle " />
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
                    readOnly
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
              htmlFor="updateprofile"
              // onClick={updateUser}
              className="btn btn-outline btn-accent"
            >
              Update
            </label>
          </div>
        </div>
      </label>
    </>
  );
}
