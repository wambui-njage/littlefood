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



function Index() {


  document.documentElement.classList.remove("nav-open");
  
  useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  }, [] );
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionGraphs />
        <SectionConsumption />
        <SectionMerchants />
        <Footer />
      </div>
    </>
  );
}

export default Index;
