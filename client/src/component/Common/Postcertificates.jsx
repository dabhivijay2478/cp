import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Postcertificates() {
  const [Certificate, setCertificate] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handlerest = () => {
    setCertificate("");
    setSelectedFiles([]);
  };

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const addcertificates = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append(selectedFiles[i]);
    }
    axios
      .post("/upload", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex justify-center container">
        <div className="card w-full  bg-white border-double  container  shadow-lg ">
          <div className="flex px-2 py-3 justify-center">
            <input
              type="text"
              value={Certificate}
              onChange={(e) => setCertificate(e.target.value)}
              placeholder="Enter Certificate Info"
              className="input input-bordered  input-accent w-full max-w-xs mt-2 px-3 py-2 bg-white text-gray-900"
            />
          </div>
          <div className="flex px-2 py-2 bg-white text-gray-900 justify-center">
            <input
              type="file"
              // value={Certificateimg}
              onChange={handleFileChange}
              className="file-input file-input-bordered file-input-info w-full bg-white text-gray-900 max-w-xs"
              multiple
            />
          </div>

          <div className="px-2 py-2">
            <button
              onClick={handlerest}
              class="px-5 py-2.5 relative rounded group  text-white font-medium inline-block"
            >
              <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span class="relative">Reset</span>
            </button>
            <button
              onClick={addcertificates}
              class="px-5 ml-5 py-2.5 relative rounded group  text-white font-medium inline-block"
            >
              <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span class="relative">Add</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
