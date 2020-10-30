import React , { useEffect } from "react";
// reactstrap components

// core components
import IndexNavbar from "layouts/Navbars/IndexNavbar.js";
import IndexHeader from "layouts/Headers/IndexHeader.js";
import Footer from "layouts/Footers/Footer.js";

// index sections
import SectionConsumption from "views/sections/index/SectionConsumption.js";
import SectionMerchants from "views/sections/index/SectionMerchants.js";
import SectionGraphs from "views/sections/index/SectionGraphs";
import SectionReport from "views/sections/index/SectionReport";



function Index() {

  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionReport />
        <SectionGraphs />
        <SectionConsumption />
        <SectionMerchants />
      
        <Footer />
      </div>
    </>
  );
}

export default Index;
