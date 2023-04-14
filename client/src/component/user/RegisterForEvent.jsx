import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function RegisterForEvent(props) {
  const history = useNavigate();

  const { eventName } = props;
  const { ClubNameprops } = props;

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

  const Name = userData.Name;
  const EnrollmentNo = userData.EnrollmentNo;
  const [PhoneNO, setPhoneNO] = useState("");
  const [Class, setClass] = useState("");
  const [Batch, setBatch] = useState("");
  const [ClubName, setClubName] = useState("");
  const [FavTech, setFavTech] = useState("");
  const registeruser = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    const registerres = await fetch("/registerstudentevent", {
      method: "POST",
      changeOrigin: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        EventName: eventName,
        Name,
        EnrollmentNo,
        Email: email,
        PhoneNO,
        Class,
        Batch,
        ClubName,
        FavTech,
      }),
    });

    const registerresponse = await registerres.json();

    if (registeruser.status === 400 || !registerresponse) {
      window.alert("Invaild");
    } else if (registeruser.status === 422 || !registerresponse) {
      window.alert("Vaildtion Error");
    } else {
      window.alert(`SucessFully You Register This Evetn ${eventName}`);
      // setIsLoading(false);

      history("/User");
    }
  };

  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle " />
      <label htmlFor="my-modal-5" className="modal cursor-pointer">
        <div className="modal-box w-11/12 max-w-5xl">
          <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>
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
              htmlFor="my-modal-5"
              onClick={registeruser}
              className="btn btn-success dark:hover:bg-cyan-500"
            >
              Register For Event
            </label>
          </div>
        </div>
      </label>
    </>
  );
}
