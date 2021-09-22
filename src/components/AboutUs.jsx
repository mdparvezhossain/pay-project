import React, { useState } from 'react';
import './style.css';
import AboutApi from '../api/AboutApi';
import aboutimg from '../assets/bank2.jpg';
import aboutimgTwo from '../assets/pro-4.jpg';

const AboutUs = () => {
    const [aboutData , setAboutData] = useState(AboutApi);
    return (
        <>
            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-services our-services-left-img">
                            <img src={aboutimg} alt="about-img" />
                        </div>
                        {/* 1section right side data */}
                        <div className="col-12 col-lg-7 our-service-list">
                                <h3 className="mini-title">
                                    --AVAILABLE @ WE ARE TEACHING HOW TO DO WEB DESIGN
                                </h3>
                                <h1 className="main-heading"> How to use this system</h1>
                                {
                                    aboutData.map((curElem) => {
                                        const { id, title, info} = curElem;
                                        return(
                                            <>
                                                <div className="row our-services-info" key={id}>
                                                    <div className="col-1 our-services-number">{id}</div>
                                                    <div className="col-10 our-services-data">
                                                        <h2>{title}</h2>
                                                        <p className="main-hero-para">{info}</p>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })
                                }
                              
                                <br />
                                <button className="btn-style btn-style-border">learn more</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* 2nd part of about us section */}

            <section className="common-section our-services our-services-rightside">
                <div className="container mb-5">
                    <div className="row">

                        {/* 2nd part left side data */}
                        <div className="col-12 col-lg-7 our-service-rightside-content d-flex justify-content-center align-items-start flex-column">
                                <h3 className="mini-title">
                                    --SUPPORT IN ANY TIME
                                </h3>
                                <h1 className="main-heading">Online class support is <br /> available 24/7</h1>
                                {
                                    aboutData.map((curElem) => {
                                        const { id, title, info} = curElem;
                                        return(
                                            <>
                                                <div className="row our-services-info" key={id}>
                                                    <div className="col-1 our-services-number">{id}</div>
                                                    <div className="col-10 our-services-data">
                                                        <h2>{title}</h2>
                                                        <p className="main-hero-para">{info}</p>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })
                                }
                              
                                <br />
                                <button className="btn-style btn-style-border">learn more</button>
                            </div>
                                {/* images section  */}
                            <div className="col-12 col-lg-5 our-services our-services-right-img">
                            <img src={aboutimgTwo} alt="about-img-2" className="about-img-2" />
                            </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutUs;
