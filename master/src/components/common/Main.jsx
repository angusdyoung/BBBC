import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Hero from "../Hero.jsx/Hero";
import Header from "./Header";
import BubblesLoader from "./Loader";

const Main = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <div className=" main-section   ">
      {loading ? (
        <>
          <Header />
          <Hero />
          <Footer />
        </>
      ) : (
        <div className="h-100vh d-flex justify-content-center flex-column align-items-center">
          <p className="footer-heading text-lg-start text-center py-lg-0 py-3 mb-3 ">
            BBBC
          </p>
          <BubblesLoader />
        </div>
      )}
    </div>
  );
};

export default Main;
