import React from "react";
import { Grid } from "@mui/material";
import Image from 'next/image';

// Importing the image at the top
import newsletterImg from '../images/DWW/home/newsletter.png';

const FlightSearch = () => {
    return (
        <div className="enquiry">
            <div className="enquiry_inner">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Image src={newsletterImg} alt="Newsletter Image" />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <span className="enquiry_heading">
                            <h4>Sign up and enjoy</h4>
                            <h2>exclusive benefits!</h2>
                        </span>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <div className="search-field">
                            <input className="leaving_from_input" type="text" placeholder="Country Code*" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className="search-field">
                            <input className="leaving_from_input" type="text" placeholder="Whatsapp No.*" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className="search-field">
                            <input className="leaving_from_input" type="text" placeholder="Enter your email*" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <button className="search-btn" style={{ marginTop: 0, width: "100%" }}>Submit</button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default FlightSearch;
