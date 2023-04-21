import React, { useState, useEffect } from "react";
import axios from "axios";
import { Viewer } from "@react-pdf-viewer/core";
import Cookies from "js-cookie";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { Worker } from "@react-pdf-viewer/core";
export default function ShowCertificate() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [pdfs, setPdfs] = useState([]);
  const [userData, setUserData] = useState({});
  const email = Cookies.get("Studentemail");
  const EnrollmentNo = userData.EnrollmentNo;
  const [viewPdf, setViewPdf] = useState(null);
  const [pdfurl, setPdfurl] = useState(null);
  const [id, setId] = useState(null);
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
    const fetchCertificatesByRollNo = async (rollNo) => {
      try {
        const response = await axios.get(`/certificates/${rollNo}`);
        const files = response.data;
        return files;
      } catch (error) {
        console.log(error);
        return [];
      }
    };
    const fetchPdfs = async () => {
      const files = await fetchCertificatesByRollNo(EnrollmentNo);
      setPdfs(files);
    };

    if (EnrollmentNo) {
      fetchPdfs();
    }
  }, [EnrollmentNo]);
  const fetchpdf = (e, id, pdfurl) => {
    axios
      .get(`/fileinfo/${id}/${pdfurl}`, { responseType: "arraybuffer" })
      .then((res) => {
        const blob = new Blob([res.data], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        setViewPdf(url);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="mt-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 py-9 ">
          {pdfs.map((file) => (
            <div class="p-4 max-w-sm" key={file._id}>
              <div class="max-w-sm rounded overflow-hidden shadow-xl m-4 shadow-cyan-300 border border-double border-emerald-300">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{file.filename}</div>
                  <p class="text-gray-700 text-base">
                    <label
                      class="btn dark:hover:text-red-500"
                      htmlFor="my-modal-3"
                      onClick={() => setPdfurl(file.filename)}
                    >
                      <i class="fa-sharp fa-regular fa-file px-2 py-3"></i>
                      <i onClick={(e) => fetchpdf(e, file._id, file.filename)}>
                        {`Open ${file.filename}`}
                      </i>
                    </label>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal bg-fixed ">
        <div className="modal-box relative w-3/20 max-w-full">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>

          <div className="max-w-7xl ">
            {viewPdf && (
              <>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
                  <Viewer
                    fileUrl={viewPdf}
                    // plugins={[defaultLayoutPluginInstance]}
                    scale="page-width"
                  />
                </Worker>
              </>
            )}

            {!viewPdf && <>No pdf file selected</>}
          </div>
        </div>
        <label
          htmlFor="my-modal-3"
          className="btn btn-sm  bg-cyan-400 text-slate-900 px-2  dark:hover:bg-red-500 absolute right-2 bottom-2"
        >
          Close Modal
        </label>
        
      </div>
    </>
  );
}
