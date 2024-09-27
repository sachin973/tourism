import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';

// Import images
import flight1 from "../images/DWW/Promo/flight1.jpg";
import flight2 from "../images/DWW/Promo/flight2.jpg";
import flight3 from "../images/DWW/Promo/flight3.jpg";
import flight4 from "../images/DWW/Promo/flight4.jpg";
import flight5 from "../images/DWW/Promo/flight5.jpg";

const TopFlights = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="w-full customGrey">
                <div className="blogs flex flex-col gap-5">
                    <h2 className='headings'>
                        Top flight destinations
                    </h2>
                    <p className='subheadings'>Save more on flights to various destinations in Indonesia and abroad with our best prices!</p>
                    <ul className='w-fit flex items-center gap-2 m-rl-14'>
                        <li>
                            <button className='search_tab_button flex items-center gap-2'>
                                Domestic
                            </button>
                        </li>
                        <li>
                            <button className='search_tab_button items-center gap-2'>
                                International
                            </button>
                        </li>
                    </ul>
                    <Slider {...settings}>
                        <div className='card-div '>
                            <div className='card_one'>
                                <div className='hover_effect'>
                                    <Image src={flight1} alt='Flight 1' />
                                </div>
                                <h3 className='card_one_title'>
                                    10 Satwa Liar Menakjubkan di New South Wales
                                </h3>
                                <p className='card_one_desc'>One way</p>
                                <div className='flex items-center justify-between padding_18_8'>
                                    <p className='card_one_price_offr'>From IDR 1,086,232</p>
                                    <button className='filled_button'>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='card-div '>
                            <div className='card_one'>
                                <div className='hover_effect'>
                                    <Image src={flight2} alt='Flight 2' />
                                </div>
                                <h3 className='card_one_title'>
                                    10 Satwa Liar Menakjubkan di New South Wales
                                </h3>
                                <p className='card_one_desc'>One way</p>
                                <div className='flex items-center justify-between padding_18_8'>
                                    <p className='card_one_price_offr'>From IDR 1,086,232</p>
                                    <button className='filled_button'>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='card-div '>
                            <div className='card_one'>
                                <div className='hover_effect'>
                                    <Image src={flight3} alt='Flight 3' />
                                </div>
                                <h3 className='card_one_title'>
                                    10 Satwa Liar Menakjubkan di New South Wales
                                </h3>
                                <p className='card_one_desc'>One way</p>
                                <div className='flex items-center justify-between padding_18_8'>
                                    <p className='card_one_price_offr'>From IDR 1,086,232</p>
                                    <button className='filled_button'>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='card-div '>
                            <div className='card_one'>
                                <div className='hover_effect'>
                                    <Image src={flight4} alt='Flight 4' />
                                </div>
                                <h3 className='card_one_title'>
                                    10 Satwa Liar Menakjubkan di New South Wales
                                </h3>
                                <p className='card_one_desc'>One way</p>
                                <div className='flex items-center justify-between padding_18_8'>
                                    <p className='card_one_price_offr'>From IDR 1,086,232</p>
                                    <button className='filled_button'>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='card-div '>
                            <div className='card_one'>
                                <div className='hover_effect'>
                                    <Image src={flight5} alt='Flight 5' />
                                </div>
                                <h3 className='card_one_title'>
                                    10 Satwa Liar Menakjubkan di New South Wales
                                </h3>
                                <p className='card_one_desc'>One way</p>
                                <div className='flex items-center justify-between padding_18_8'>
                                    <p className='card_one_price_offr'>From IDR 1,086,232</p>
                                    <button className='filled_button'>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default TopFlights;
