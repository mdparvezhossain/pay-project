import React, { useState } from 'react';
import Workapi from '../api/WorkApi';

const HowWorks = () => {
    const [workData,setWorkData] = useState(Workapi);
    return (
        <>
            <section>
                <div className="work-container container">
                    <h1 className="main-heading text-center">
                        How does it Work
                    </h1>
                    <div className="row">
                        {
                            workData.map((currElem) => {
                                const {id, logo, title, info} = currElem;
                                return(
                                    <>
                                        <div className="col-12 col-lg-4 text-center work-container-subdiv" key={id}>
                                            <i className={` fontawesome-style ${logo}`}></i>
                                            <h2 className="sub-heading">{title}</h2>
                                            <p className="main-hero-para w-100">{info}</p>
                                        </div>
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowWorks;
