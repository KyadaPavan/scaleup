import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import FAQ from "./components/FAQ";
import GrowingCommunity from "./components/GrowingCommunity";
import SEO from "./components/SEO";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuccessPage from "./components/SuccessPage";
import SupportSection from "./components/SupportSection";
import AccountSetup from "./components/AccountSetup";
import { BackgroundBeamsWithCollision } from "./components/ui/Background-beams-with-collision";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import ContactUs from "./components/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import RefundPolicy from "./components/RefundPolicy";
import BentoGridStructure from "./components/BentoGridStructure";
import ServicePackage from "./components/ServicePackage";
import { FormHighlightProvider } from "./context/FormHighlightContext";

const MainContent = () => (
  <>
    <div>
      <Navbar />

      <div className=" bg-gradient-to-r from-[#1e1f3e] via-[#663bd8] to-[#04061c] md:pt-16 pb-16">
        <HomeSection />
        <BentoGridStructure />
      </div>

      <div
        style={{
          backgroundImage: `url('./global-payment-bg.png')`,
        }}
        className="my-10 bg-center bg-cover md:pb-20 md:my-0"
      >
        <AccountSetup />
      </div>

      <div className="mb-10">
        <GrowingCommunity />
      </div>

      <div
        className=" bg-gradient-to-r from-[#1e1f3e] via-[#663bd8] to-[#04061c] md:pt-16 pb-16 pt-16"
        id="ServicePacakage"
      >
        <ServicePackage />
      </div>

      {/* <div className="mt-10" id="Benifits">
        <div className="hidden lg:block">
          <DottedLineBoxes />
        </div>
        <div className="hidden md:block lg:hidden">
          <DottedLineTablet />
        </div>
        <div className="block md:hidden">
          <DottedLineBoxSmallScreen />
        </div>
      </div> */}
      <div
        className="bg-center bg-cover"
        style={{
          backgroundImage: `url('/testimonials-bg.png')`,
        }}
      >
        <FAQ />
      </div>
      <div className="py-16">
        <SupportSection />
      </div>

      <div
        className="relative h-[500px] md:block hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="relative h-[calc(100vh+500px)] -top-[100vh]">
          <div className="h-[440px] sticky top-[calc(100vh-440px)]">
            <BackgroundBeamsWithCollision />
          </div>
        </div>
      </div>
      <div
        className="relative h-[520px] block md:hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="relative h-[calc(100vh+500px)] -top-[100vh]">
          <div className="h-[500px] sticky top-[calc(100vh-500px)]">
            <BackgroundBeamsWithCollision />
          </div>
        </div>
      </div>
    </div>
  </>
);

function App() {
  // useEffect(() => {
  //   const handleContextMenu = (e) => {
  //     e.preventDefault();
  //   };

  //   const handleClick = (e) => {
  //     if (e.button === 0) {
  //       e.preventDefault();
  //       e.stopPropagation();
  //     }
  //   };

  //   document.addEventListener("contextmenu", handleContextMenu);
  //   document.addEventListener("click", handleClick);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, []);
  return (
    <HelmetProvider>
      <FormHighlightProvider>
        <SEO />
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Router>
      </FormHighlightProvider>
    </HelmetProvider>
  );
}

export default App;
