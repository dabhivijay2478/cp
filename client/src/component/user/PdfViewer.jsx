import React, { useState, useEffect } from "react";
import axios from "axios";
import { pdf } from "@react-pdf/renderer";
import { Document, Page } from "react-pdf";

export default function PdfViewer({}) {
  const [pdfData, setPdfData] = useState(null);
  const [numPages, setNumPages] = useState(null);

  const loadPdf = async () => {
    const filename = "2022.pdf";
    const response = await fetch(`/fileinfo/${filename}`);
    const data = await response.blob();
    const pdfURL = URL.createObjectURL(data);
    setPdfData(pdfURL);
    pdf(URL.createObjectURL(data)).then((res) => {
      setNumPages(res.numPages);
    });

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
      };
    
  };

  return (
    <div>
      <button
        onClick={loadPdf}
        class="px-5 ml-5 py-2.5 relative rounded group  text-white font-medium inline-block"
      >
        <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
        <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
        <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
        <span class="relative">Search</span>
      </button>
      {pdfData && (
        <Document
          file={pdfData}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      )}
    </div>
  );
}
