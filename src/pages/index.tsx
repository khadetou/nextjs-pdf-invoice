import { Page, PDFDownloadLink } from "@react-pdf/renderer";
import type { NextPage } from "next";
import PDFFile from "../components/Pdfile";
import dynamic from "next/dynamic";
import Pdf from "../components/Pdf";

const DynamicPDF = dynamic(() => import("../components/Pdfile"), {
  ssr: false,
});

const PdfDwonloadLink = dynamic(
  () => import("../components/pdfdowloadbutton"),
  {
    ssr: false,
  }
);

const PDFViewer = dynamic(() => import("../components/PdfViewer"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      {/* <PdfDwonloadLink /> */}
      <PDFViewer>
        <Pdf section="Section #1" />
      </PDFViewer>
    </>
  );
};

export default Home;
