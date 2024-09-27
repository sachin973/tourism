import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';

// Import images
import blog1 from "../images/DWW/Promo/blog1.jpg";
import blog2 from "../images/DWW/Promo/blog2.jpg";
import blog3 from "../images/DWW/Promo/blog3.jpg";
import blog4 from "../images/DWW/Promo/blog4.jpg";
import blog5 from "../images/DWW/Promo/blog5.jpg";

const Banner = () => {
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
            <div className="blogs flex flex-col gap-5">
                <h2 className='headings'>
                    Discover our blogs
                </h2>
                <Slider {...settings}>
                    <div className='card-div '>
                        <div className='card_one'>
                            <div className='hover_effect'>
                                <Image src={blog1} alt='Blog 1' />
                            </div>
                            <h3 className='card_one_title'>
                                10 Satwa Liar Menakjubkan di New South Wales
                            </h3>
                        </div>
                    </div>
                    <div className='card-div '>
                        <div className='card_one'>
                            <div className='hover_effect'>
                                <Image src={blog2} alt='Blog 2' />
                            </div>
                            <h3 className='card_one_title'>
                                10 Satwa Liar Menakjubkan di New South Wales
                            </h3>
                        </div>
                    </div>
                    <div className='card-div '>
                        <div className='card_one'>
                            <div className='hover_effect'>
                                <Image src={blog3} alt='Blog 3' />
                            </div>
                            <h3 className='card_one_title'>
                                10 Satwa Liar Menakjubkan di New South Wales
                            </h3>
                        </div>
                    </div>
                    <div className='card-div '>
                        <div className='card_one'>
                            <div className='hover_effect'>
                                <Image src={blog4} alt='Blog 4' />
                            </div>
                            <h3 className='card_one_title'>
                                10 Satwa Liar Menakjubkan di New South Wales
                            </h3>
                        </div>
                    </div>
                    <div className='card-div '>
                        <div className='card_one'>
                            <div className='hover_effect'>
                                <Image src={blog5} alt='Blog 5' />
                            </div>
                            <h3 className='card_one_title'>
                                10 Satwa Liar Menakjubkan di New South Wales
                            </h3>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Banner;
