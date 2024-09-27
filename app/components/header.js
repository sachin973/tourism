"use client";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { APP_LOGO } from "../constants/common";
import Image from 'next/image';
// import Login from "../../views/Login/Login";
// import Register from "../../views/Register/Register";
import header_logo from "../images/DWW/logo.png";
import "./header.css";
const mobileData = [
  "Dvidaya Rewards", "IDR", "View Booking", "Register", "Login", "Home", "Hotels", "Flights", "Tour"
]

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenR, setIsModalOpenR] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const openModalR = () => setIsModalOpenR(true);
  const closeModal = () => setIsModalOpen(false);
  const closeModalR = () => setIsModalOpenR(false);

  return (
    <header id="header">
      <nav className="navbar">
        <div className="flex items-center py-2">
          <Image className="header_logo" src={header_logo} alt="app_logo">
          </Image>
        </div>
        <div className="header_right_side">
          <ul className="flex items-center py-2 gap-10 nav_right">
            <li><span>Dwidaya Rewards</span></li>
            <li><span>Eng</span></li>
            <li><span>View Booking</span></li>
            <li>
              <ul className="flex items-center gap-5">
                <li>
                  <button className="filled_button" onClick={openModalR}>Register</button>
                  {/* <Register isOpen={isModalOpenR} onClose={closeModalR}/> */}
                </li>
                <li>
                  <button className="outline_button" onClick={openModal}>
                    Login
                  </button>
                  {/* Modal will open in the center of the page */}
                  {/* <Login isOpen={isModalOpen} onClose={closeModal} /> */}
                </li>
              </ul>
            </li>
          </ul>
          <ul className="flex items-center justify-end py-2 gap-10 nav_right">
            {["Home", "Hotels", "Flights"].map((link) => (
              <li key={link}><span>{link}</span></li>
            ))}
          </ul>
        </div>
        <div className="header_hamburger_div">
          <MenuIcon onClick={() => setOpen(!open)} />
        </div>
      </nav>
      {open && (
        <div className="mobile_header">
          <ul>
            {mobileData.map((data, i) => (
              <li key={i}>{data}</li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
