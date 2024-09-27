import React from 'react'
import Banner from "./banner";
import { Helmet } from 'react-helmet';
import Blogs from "./blogs";
import TopFlights from './topFlights';
import FeaturedHotels from "./featuredHotels";
import OtherProducts from "./otherProducts";
import Enquiry from "./enquiry";
import "./home.css";

const Home = () => {
  return (
    <>
     <Helmet>
        <title>Dwidaya Worldwide</title>
        <meta name="description" content="Berpengalaman lebih dari 55 tahun, Liburan hemat terjamin akan selalu nyaman dengan berbagai promo tiket pesawat, paket tour hemat, dan hotel ke seluruh dunia" />
        <meta name="keywords" content="Offers flights, offers hotels, group tours deals, travel deals 2022, cheap tickets, offers holiday trips" />
      </Helmet>
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