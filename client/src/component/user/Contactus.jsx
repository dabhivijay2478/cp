import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contactuse.css";
export default function Contactus() {
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [Name, setName] = useState("");
  const [EnrollmentNo, setEnrollmentNo] = useState("");
  const [Email, setEmail] = useState("");
  const [ClubName, setClubName] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");

  const [NameError, setNameError] = useState("");
  const [EnrollmentNoError, setEnrollmentNoError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [ClubNameError, setClubNameError] = useState("");
  const [SubjectError, setSubjectError] = useState("");
  const [MessageError, setMessageError] = useState("");

  const validateInput = () => {
    setNameError("");
    setEnrollmentNoError("");
    setEmailError("");
    setClubNameError("");
    setSubjectError("");
    setMessageError("");

    let isError = false;

    if (Name.trim() === "") {
      setNameError("Name is required");
      isError = true;
    }

    if (EnrollmentNo.trim() === "") {
      setEnrollmentNoError("Enrollment No. is required");
      isError = true;
    }

    if (!/\S+@\S+\.\S+/.test(Email)) {
      setEmailError("Email is invalid");
      isError = true;
    }

    if (ClubName.trim() === "") {
      setClubNameError("Club Name is required");
      isError = true;
    }

    if (Subject.trim() === "") {
      setSubjectError("Subject is required");
      isError = true;
    }

    if (Message.trim() === "") {
      setMessageError("Message is required");
      isError = true;
    }

    return !isError;
  };

  const sendmessage = async (e) => {
    e.preventDefault();
    if (!validateInput()) {
      return;
    }
    setIsLoading(true);

    const res = await fetch("/Contactus", {
      method: "POST",
      changeOrigin: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        EnrollmentNo,
        Email,
        ClubName,
        Subject,
        Message,
      }),
    });
    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invaild");
    } else if (res.status === 422 || !data) {
      window.alert("Bad");
    } else {
      window.alert("SucessFully Send Message");
      setIsLoading(false);
      history("/User");
    }
  };

  return (
    <>
      <section className="mt-16">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            <br /> Let us know.
          </p>
          <form method="POST" class="space-y-8">
            <div>
              <label
                for="Name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="Name"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {NameError && (
                <span className="error text-red-500">{NameError}</span>
              )}
            </div>
            <div>
              <label
                for="EnrollmentNo"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your EnrollmentNo
              </label>
              <input
                type="text"
                id="EnrollmentNo"
                value={EnrollmentNo}
                onChange={(e) => setEnrollmentNo(e.target.value)}
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your EnrollmentNo"
                required
              />
              {EnrollmentNoError && (
                <span className="error text-red-500">{EnrollmentNoError}</span>
              )}
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="youremail@gmail.com"
                required
              />
              {EmailError && (
                <span className="error text-red-500">{EmailError}</span>
              )}
            </div>
            <div>
              <label
                for="Clubname"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Clubname
              </label>
              <input
                type="text"
                id="Clubname"
                value={ClubName}
                onChange={(e) => setClubName(e.target.value)}
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your Clubname"
                required
              />
              {ClubNameError && (
                <span className="error text-red-500">{ClubNameError}</span>
              )}
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={Subject}
                onChange={(e) => setSubject(e.target.value)}
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
              {SubjectError && (
                <span className="error text-red-500">{SubjectError}</span>
              )}
            </div>

            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your Message."
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              {MessageError && (
                <span className="error text-red-500">{MessageError}</span>
              )}
            </div>
            <button
              type="submit"
              onClick={sendmessage}
              class="py-3 px-5 text-sm font-medium text-center dark:bg-blue-500 text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      {isLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-gray-900 flex justify-center items-center z-50">
          <div class="contactusloader">
            <div class="contactusloaderdot"></div>
          </div>
          <div class="contactusloader">
            <div class="contactusloaderdot"></div>
          </div>
          <div class="contactusloader">
            <div class="contactusloaderdot"></div>
          </div>
          <div class="contactusloader">
            <div class="contactusloaderdot"></div>
          </div>
          <div class="contactusloader">
            <div class="contactusloaderdot"></div>
          </div>
          <div class="contactusloader">
            <div class="contactusloaderdot"></div>
          </div>
        </div>
      )}
    </>
  );
}
