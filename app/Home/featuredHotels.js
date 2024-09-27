import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import desti1 from '../images/DWW/Promo/desti1.jpg';
import desti2 from '../images/DWW/Promo/desti2.jpg';
import desti3 from '../images/DWW/Promo/desti3.jpg';
import desti4 from '../images/DWW/Promo/desti4.jpg';
import desti5 from '../images/DWW/Promo/desti5.jpg';

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
            <div className="w-full">
                <div className="blogs flex flex-col gap-5">
                    <h2 className='headings'>
                        Featured Hotels
                    </h2>
                    <p className='subheadings'>Choose the best featured hotels worldwide offering the cheapest price, selected hotels for you!</p>
                    <ul className='w-fit flex items-center gap-2 m-rl-14'>
                        <li>
                            <button className='search_tab_button flex items-center gap-2'>
                               Jakarta
                            </button>
                        </li>
                        <li>
                            <button className='search_tab_button items-center gap-2'>
                               Singapore
                            </button>
                        </li>
                        <li>
                            <button className='search_tab_button items-center gap-2'>
                               Japan
                            </button>
                        </li>
                    </ul>
                    <Slider {...settings}>
                        <div className='card-div '>
                            <div className='card_one'>
                                <div className='hover_effect'>
                                    <Image src={desti1} alt='Image' />
                                </div>
                                <h3 className='card_one_title'>
                                    10 Satwa Liar Menakjubkan di New South Wales
                                </h3>
                                <p className='card_one_desc'>One way</p>
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
                                    <Image src={desti2} alt='Image' />
                                </div>
                                <h3 className='card_one_title'>
                                    10 Satwa Liar Menakjubkan di New South Wales
                                </h3>
                                <p className='card_one_desc'>One way</p>
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
                                    <Image src={desti3} alt='Image' />
                                </div>
                                <h3 className='card_one_title'>
                                    10 Satwa Liar Menakjubkan di New South Wales
                                </h3>
                                <p className='card_one_desc'>One way</p>
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
                                    <Image src={desti4} alt='Image' />
                                </div>
                                <h3 className='card_one_title'>
                                    10 Satwa Liar Menakjubkan di New South Wales
                                </h3>
                                <p className='card_one_desc'>One way</p>
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
                                    <Image src={desti5} alt='Image' />
                                </div>
                                <h3 className='card_one_title'>
                                    10 Satwa Liar Menakjubkan di New South Wales
                                </h3>
                                <p className='card_one_desc'>One way</p>
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

export default TopFlights;
