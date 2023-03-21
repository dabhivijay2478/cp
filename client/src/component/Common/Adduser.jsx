import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Adduser() {
  const history = useNavigate();

  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNO, setPhoneNO] = useState("");
  const [Class, setClass] = useState("");
  const [Batch, setBatch] = useState("");
  const [ClubName, setClubName] = useState("");
  const [FavTech, setFavTech] = useState("");

  const adduser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signupserver", {
      method: "POST",
      changeOrigin: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Password,
        Email,
        PhoneNO,
        Class,
        Batch,
        ClubName,
        FavTech,
      }),
    });
    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invaild");
    }
    else if (res.status === 422 || !data) {
      window.alert("Bad");
    } else {
      window.alert("SucessFully Add");
      history("/Admindash");
    }
  };

  return (
    <>
      <section class="bg-white text-gray-900 border border-solid border-emerald-600 rounded-lg ">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:col-span-2 lg:py-12">
              <p class="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div class="mt-8">
                <a href="" class="text-2xl font-bold text-pink-600">
                  0151 475 4450
                </a>

                <address class="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div class="rounded-lg bg-white p-8 shadow-lg border dark:hover:border-blue-600 border-solid shadow-blue-500 lg:col-span-3 lg:p-12">
              <form
                action="#"
                onSubmit={adduser}
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
                    password
                  </label>
                  <input
                    class="w-full rounded-lg bg-white border-solid border border-blue-400  p-3 input input-bordered  input-primary text-sm"
                    placeholder="password"
                    type="text"
                    id="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    // readOnly
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
    </>
  );
}
