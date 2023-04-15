import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function Test() {
  const [pdfs, setPdfs] = useState([]);
  const [userData, setUserData] = useState({});
  const email = Cookies.get("Studentemail");
  const [EnrollmentNo, setEnrollmentNo] = useState("");
  const [pdfurl, setPdfurl] = useState(null);

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

    async function fetchPdfs() {
      try {
        const response = await axios.get(`/certificates/${EnrollmentNo}`);
        setPdfs(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPdfs();
  }, [EnrollmentNo]);

  async function fetchpdf(filename, id) {
    try {
      const response = await axios.get(`/fileinfo/${filename}`);
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      setPdfurl(pdfUrl);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <input
        value={userData.EnrollmentNo}
        onChange={(e) => setEnrollmentNo(e.target.value)}
        readOnly
      />

      <div className="mt-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 py-9 ">
          {pdfs.map((file) => (
            <div class="p-4 max-w-sm" key={file._id}>
              <div class="max-w-sm rounded overflow-hidden shadow-xl m-4 shadow-cyan-400">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{file.filename}</div>
                  <p class="text-gray-700 text-base">
                    <label
                      class="btn dark:hover:text-red-500"
                      htmlFor="my-modal-3"
                      onClick={() => fetchpdf(file.filename, file._id)}
                    >
                      <i class="fa-sharp fa-regular fa-file px-2 py-3"></i>
                      <i> open Certificate</i>
                    </label>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show the PDF in an iframe */}
      {pdfurl && (
        <iframe src={pdfurl} title="PDF" width="100%" height="600px" />
      )}
    </>
  );
}
