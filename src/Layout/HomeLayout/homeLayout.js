import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";
import AOS from "aos";
import { useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import "./header.css";
import "./footer.css";

AOS.init({ once: true });



const HomeLayout = ({ children }) => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="">
      <Header />

          <div className="">{children}</div>

    <Footer />
    </div>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node,
};

export default HomeLayout;
