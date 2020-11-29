import React from 'react';
import "./home.css";


const About = () => {
    return (
       <React.Fragment>
        <div class="wrapper">

            <div class="product-img">
                <img src="https://www.jotform.com/blog/wp-content/uploads/2020/06/7-Best-work-from-home-software-700x545.png" height="320" width="320" alt="Searching for internship"/>
            </div>
            <div class="product-info">
                <div class="product-text">
                    <h1>IAS WEB APP</h1>
                    <h2>by IEEE IAS ENIT SBC</h2>
                    <p>Looking for an internship ?
                    <br/>Gain work experience
                    <br/> <b>&</b>
                    <br/>kickstart your career.
                    <br/><strong>Find the right internship for you !</strong></p>
                </div>
                <div class="product-price-btn">
                    <button >Know us !</button>
                </div>
            </div>

        </div>
       </React.Fragment>
    );
};

export default About;
