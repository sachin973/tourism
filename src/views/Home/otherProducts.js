import React from 'react';
import Slider from "react-slick";


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
                       Explore Our Other Products
                    </h2>
                    <p className='subheadings'>Unleash Sports Adventure Around You! Exclusive Discounts Await.</p>
                    <ul className='w-fit flex items-center gap-2 m-rl-14'>
                        <li>
                            <button className='search_tab_button flex items-center gap-2'>
                               Cruise
                            </button>
                        </li>
                        <li>
                            <button className='search_tab_button items-center gap-2'>
                              Umroh
                            </button>
                        </li>
                        <li>
                            <button className='search_tab_button items-center gap-2'>
                               JR Pass
                            </button>
                        </li>
                    </ul>
                    <Slider {...settings}>
                        <div className='card-div '>
                            <div className='card_one'>
                                <div className='hover_effect'>
                                    <img src="../images/DWW/Promo/htl1.jpg" alt='img'></img>
                                </div>
                                <h3 className='card_one_title'>
                                    Spectrum of the seas
                                </h3>
                                <p className='card_one_desc'>4N China & Japan</p>
                                <div className='flex items-center justify-between padding_18_8'>
                                    <p className='card_one_price_offr'>From IDR 1,0,86,232</p>
                                    <button className='filled_button'>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='card-div '>
                        <div className='card_one'>
                                <div className='hover_effect'>
                                    <img src="../images/DWW/Promo/htl2.jpg" alt='img'></img>
                                </div>
                                <h3 className='card_one_title'>
                                    Spectrum of the seas
                                </h3>
                                <p className='card_one_desc'>4N China & Japan</p>
                                <div className='flex items-center justify-between padding_18_8'>
                                    <p className='card_one_price_offr'>From IDR 1,0,86,232</p>
                                    <button className='filled_button'>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='card-div '>
                        <div className='card_one'>
                                <div className='hover_effect'>
                                    <img src="../images/DWW/Promo/htl3.jpg" alt='img'></img>
                                </div>
                                <h3 className='card_one_title'>
                                    Spectrum of the seas
                                </h3>
                                <p className='card_one_desc'>4N China & Japan</p>
                                <div className='flex items-center justify-between padding_18_8'>
                                    <p className='card_one_price_offr'>From IDR 1,0,86,232</p>
                                    <button className='filled_button'>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='card-div '>
                        <div className='card_one'>
                                <div className='hover_effect'>
                                    <img src="../images/DWW/Promo/htl4.jpg" alt='img'></img>
                                </div>
                                <h3 className='card_one_title'>
                                    Spectrum of the seas
                                </h3>
                                <p className='card_one_desc'>4N China & Japan</p>
                                <div className='flex items-center justify-between padding_18_8'>
                                    <p className='card_one_price_offr'>From IDR 1,0,86,232</p>
                                    <button className='filled_button'>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='card-div '>
                        <div className='card_one'>
                                <div className='hover_effect'>
                                    <img src="../images/DWW/Promo/5.jpg" alt='img'></img>
                                </div>
                                <h3 className='card_one_title'>
                                    Spectrum of the seas
                                </h3>
                                <p className='card_one_desc'>4N China & Japan</p>
                                <div className='flex items-center justify-between padding_18_8'>
                                    <p className='card_one_price_offr'>From IDR 1,0,86,232</p>
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
    )
}

export default TopFlights


