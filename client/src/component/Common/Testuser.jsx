import React, { useState } from "react";
import axios from "axios";
import "./loader.css";
export default function Testuser() {
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [toEmail, setToEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("/sendemail", {
      method: "POST",
      changeOrigin: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ToEmail: toEmail,
        EnrollmentNo: enrollmentNo,
      }),
    });

    const Maildata = response.json();

    if (sendEmail.status === 400 || !Maildata) {
      window.alert("Invaild");
    } else if (sendEmail.status === 422 || !Maildata) {
      window.alert("Bad");
    } else {
      window.alert("Send Email");
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="bg-white text-gray-900 border border-solid border-emerald-600 rounded-lg">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="rounded-lg bg-white p-8 shadow-lg border dark:hover:border-blue-600 border-solid shadow-blue-500 lg:col-span-3 lg:p-12">
              <form
                action="#"
                onSubmit={sendEmail}
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label className="sr-only" htmlFor="name">
                    EnrollmentNo
                  </label>
                  <input
                    className="w-full rounded-lg bg-white border-solid border border-blue-400 p-3 input input-bordered input-primary text-sm"
                    placeholder="EnrollmentNo"
                    type="text"
                    id="EnrollmentNo"
                    value={enrollmentNo}
                    onChange={(e) => setEnrollmentNo(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg bg-white border-solid border border-blue-400 p-3 input input-bordered input-primary text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      value={toEmail}
                      onChange={(e) => setToEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    onClick={sendEmail}
                    className="inline-block w-full rounded-lg dark:hover:bg-green-400 border-solid border border-blue-400 bg-blue-400 px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Mail
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {isLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-gray-900 flex justify-center items-center z-50">
          <div className="mailloader w-10 h-5 flex justify-center"></div>
        </div>
      )}
    </>
  );
}
