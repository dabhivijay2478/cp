import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import csvtojson from "csvtojson";
import "./adduser.css"
export default function Adduser() {
  const history = useNavigate();

  const [Name, setName] = useState("");
  const [EnrollmentNo, setEnrollmentNo] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNO, setPhoneNO] = useState("");
  const [Class, setClass] = useState("");
  const [Batch, setBatch] = useState("");
  const [ClubName, setClubName] = useState("");
  const [FavTech, setFavTech] = useState("");
  const [Role, setRole] = useState("");
  const [Password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleAddUsers = async () => {
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = async () => {
        const jsonData = await csvtojson().fromString(reader.result);
        fetch("/addmutilpe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(jsonData),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      };
    }
  };

  const adduser = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch("/signupserver", {
      method: "POST",
      changeOrigin: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        EnrollmentNo,
        Email,
        PhoneNO,
        Class,
        Batch,
        ClubName,
        FavTech,
        Role,
        Password: EnrollmentNo,
      }),
    });
    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invaild");
    } else if (res.status === 422 || !data) {
      window.alert("Bad");
    } else {
      window.alert("SucessFully Add");
      setIsLoading(false);

      history("/Admindash");
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const response = await fetch("/sendemail", {
      method: "POST",
      changeOrigin: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ToEmail: Email,
        EnrollmentNo: EnrollmentNo,
      }),
    });

    const Maildata = response.json();

    if (sendEmail.status === 400 || !Maildata) {
      window.alert("Invaild");
    } else if (sendEmail.status === 422 || !Maildata) {
      window.alert("Bad");
    } else {
      window.alert("Send Email");
    }
  };

  return (
    <>
      <section class="bg-white text-gray-900 border border-solid border-emerald-600 rounded-lg ">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:col-span-2 lg:py-12">
              <p class="max-w-xl text-lg">
                Ganpat University - U. V. Patel College of Engineering is an
                Institute situated inside Ganpat University campus at Ganpat
                Vidyanagar, Kherva, Mehsana in the state of Gujarat, India.
              </p>

              <div class="mt-8">
                <a href="" class="text-2xl font-bold text-pink-600">
                  CMS
                </a>

                <address class="mt-2 not-italic">
                  U. V. Patel College of Engineering, Ganpat Vidyanagar
                  Mehsana-Gozaria, Highway, Kherva, Gujarat 384012
                </address>

                <div class="mt-4">
                  <button
                    type="submit"
                    // onClick={adduser}
                    class="inline-block w-full rounded-lg dark:hover:bg-green-400  border-solid border border-blue-400 bg-blue-400 px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    <label htmlFor="my-modal-3">Add User using CSV File</label>
                  </button>
                </div>
              </div>
            </div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box bg-white relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <div>
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-success w-full max-w-xs bg-white"
                    onChange={handleFileInputChange}
                  />

                  <button
                    onClick={handleAddUsers}
                    className="btn btn-ghost dark:hover:bg-cyan-700 px-2 py-3 ml-2"
                  >
                    <label htmlFor="my-modal-3">Add Users</label>
                  </button>
                </div>
              </div>
            </div>
            <div class="rounded-lg bg-white p-8 shadow-lg border dark:hover:border-blue-600 border-solid shadow-blue-500 lg:col-span-3 lg:p-12">
              <form
                // action="#"
                // onSubmit={sendEmail}
                method="POST"
                class="space-y-4"
              >
                <span>User Id:20220</span>
                <div>
                  <label class="sr-only" for="name">
                    Name
                  </label>
                  <input
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={EnrollmentNo}
                    onChange={(e) => setEnrollmentNo(e.target.value)}
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
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
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
                <div>
                  <label class="sr-only" for="favtech">
                    Fav Tech
                  </label>

                  <input
                    class="w-full rounded-lg bg-white border-solid border border-blue-400 p-3 input input-bordered  input-primary text-sm"
                    placeholder="Role"
                    id="Role"
                    value={Role}
                    onChange={(e) => setRole(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label class="sr-only" for="name">
                    password
                  </label>
                  <input
                    class="w-full rounded-lg bg-white border-solid border border-blue-400  p-3 input input-bordered  input-primary text-sm"
                    placeholder="password"
                    type="text"
                    id="password"
                    value={EnrollmentNo}
                    onChange={() => setPassword(EnrollmentNo)}
                    readOnly
                  />
                </div>

                <div class="mt-4">
                  <button
                    type="submit"
                    onClick={adduser}
                    class="inline-block w-full rounded-lg dark:hover:bg-green-400  border-solid border border-blue-400 bg-blue-400 px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {isLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-gray-900 flex justify-center items-center z-50">
          <div class="adduserloader">
            <div class="dot dot-1"></div>
            <div class="dot dot-2"></div>
            <div class="dot dot-3"></div>
            <div class="dot dot-4"></div>
            <div class="dot dot-5"></div>
          </div>
        </div>
      )}
    </>
  );
}
