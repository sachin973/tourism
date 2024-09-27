import React, { useState } from 'react';
import Slider from "react-slick";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Filter from "./filter";
const Banner = () => {
    const [tab, setTab] = useState('Flights');
    const [checkBox, setCheckbox] = useState('One')




    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,

    };
    return (
        <>
            <div className="banner relative " style={{ marginBottom: "106px" }}>
                <Slider {...settings}>
                    <div className='inner'>
                        <img src="../images/DWW/Promo/banner5.jpg" alt="banner" />
                    </div>
                    <div className='inner'>
                        <img src="../images/DWW/Promo/banner6.jpg" alt="banner" />
                    </div>
                </Slider>
                <div className='search-box absolute'>
                    <ul className='w-fit flex items-center px-2 gap-2 m-auto'>
                        <li>
                            <button style={tab == 'Flights' ? { background: "#2747a0", color: "white" } : {}} className='search_tab_button flex items-center gap-2' onClick={() => setTab('Flights')}>
                                <FlightTakeoffIcon /> Flights
                            </button>
                        </li>
                        <li>
                            <button style={tab == 'Hotels' ? { background: "#2747a0", color: "white" } : {}} className='search_tab_button items-center gap-2' onClick={() => setTab('Hotels')}>
                                <ApartmentIcon />  Hotels
                            </button>
                        </li>
                    </ul>
                    <div className='search_wrapper'>
                       {tab == 'Flights' && <div className='search_wrapper_option'>
                            <ul className='flex items-center gap-10'>
                                <li className='flex items-center gap-2'>
                                    <div style={checkBox == 'One' ? { background: "#2747a0" } : {}} onClick={() => setCheckbox('One')} className='search_checkbox'></div>
                                    <span>One Way</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <div style={checkBox == 'Round' ? { background: "#2747a0" } : {}} onClick={() => setCheckbox('Round')} className='search_checkbox'></div>
                                    <span>Round Trip</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <div style={checkBox == 'Multi' ? { background: "#2747a0" } : {}} onClick={() => setCheckbox('Multi')} className='search_checkbox'></div>
                                    <span>Multi  City</span>
                                </li>
                            </ul>

                        </div>}
                        <div className='search_wrapper_filter'>
                            <Filter tab={tab} checkBox={checkBox}/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner