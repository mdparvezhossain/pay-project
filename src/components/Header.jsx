import React from 'react';
import heroimg from '../assets/Web-Design6.jpg';
import heroimg2 from '../assets/web-11.png';

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                            <h1 className="display-2">
                                Online Payment Mode <br /> Easy For You.
                            </h1>
                            <p className="main-hero-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Magnam doloremque ipsam debitis voluptatibus nobis, ali
                                quid, similique tenetur omnis facilis iste quod harum 
                                vitae reprehenderitd.
                            </p>
                            <h3>Get early access for you</h3>
                            <div className="input-group mt-3">
                                <input type="text" 
                                className="rounded-pill w-75 me-3 p-2 form-control-text" 
                                placeholder="Enter Your Email" />
                                <div className="input-group-button">Get it now</div>
                            </div>
                        </div>
                        {/* main header right side */}
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                            <img src={heroimg} 
                            alt="hero-img"
                            className="img-fluid" />     
                            <img src={heroimg2} 
                            alt="hero-img"
                            className="img-fluid main-hero-img2" />     
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
};

export default Header;
