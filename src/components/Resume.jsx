import { pdfjs, Document, Page } from "react-pdf";

import resume from "../assets/Rafi David Cv.pdf";
import { styles } from "../utils/styles";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Header } from "../utils/UtilityComponents";
import { ColorModeContext } from "../App";
import { useContext } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};

const Resume = ({ onLoad }) => {
  const dark = useContext(ColorModeContext);
  return (
    <section
      className={`${styles.padding} max-w-7xl mx-auto relative z-30`}
      id="resume-section"
    >
      <Header text="Resume." dark={dark} />
      <div className="flex items-center justify-center mt-[5rem] relative">
        <Document
          className="pdfdoc"
          file={resume}
          options={options}
          onLoadSuccess={() => onLoad(true)}
        >
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
        <a
          className="absolute top-[90%] hover:cursor-pointer hover:underline hover:text-[#a2e06c] text-purple-600 font-bold text-[1.6rem]"
          href={resume}
        >
          Download Cv
        </a>
      </div>
    </section>
  );
};

export default Resume;
