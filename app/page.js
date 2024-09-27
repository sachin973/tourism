"use client";
import React from 'react'
import Banner from "./Home/banner";
import Blogs from "./Home/blogs";
import TopFlights from './Home/topFlights';
import FeaturedHotels from "./Home/featuredHotels";
import OtherProducts from "./Home/otherProducts";
import Enquiry from "./Home/enquiry";
import "./Home/home.css";

const Home = () => {
  return (
    <>
     {/* <Helmet>
        <title>Dwidaya Worldwide</title>
        <meta name="description" content="Berpengalaman lebih dari 55 tahun, Liburan hemat terjamin akan selalu nyaman dengan berbagai promo tiket pesawat, paket tour hemat, dan hotel ke seluruh dunia" />
        <meta name="keywords" content="Offers flights, offers hotels, group tours deals, travel deals 2022, cheap tickets, offers holiday trips" />
      </Helmet> */}
      <Banner />
      <TopFlights />
      <FeaturedHotels />
      <OtherProducts />
      <Blogs />
   
      <Enquiry />
    </>
  )
}

export default Home