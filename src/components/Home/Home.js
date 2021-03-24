import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Home.css';

function Home() {

    return (
        <div>
            <Helmet>
                <title>Sankofa | Home</title>
                <style>{'body { background-color: #FFFCF8; }'}</style>
            </Helmet>
            
            <div className="home-container">
                
                <img className="home-img" src="images/landing-img.png" alt="Landing"/>
                
                <div className="about-sankofa">
                    <h1>What is Sankofa?</h1>
                    <p>
                        The word Sankofa comes from an African language which means “go back and fetch it” which is significant to the 
                        mission and purpose of the group which is to take information and resources we learn back to people in the community. 
                        Sankofa was founded in 2015 in order to meet the unique needs of parents of Black children with autism and other 
                        developmental disabilities. Since our inception, Sankofa has supported the needs of the parents by providing advocacy 
                        and resources that have increased awareness of developmental disabilities at the community level.
                    </p>
                </div>

                <div className="mission-statement">
                    <h1>Mission Statement</h1>
                    <p>
                        To collaborate with individuals with developmental disabilities and their families to improve quality of life and 
                        community inclusion. 
                    </p>
                    <h1>Join Us</h1>
                    <p class="line">Zoom Link: <a href="Zoom Link: https://ucdavishealth.zoom.us/j/926742042?pwd=ZFdHUlQ4cWxnbUkxdUQ1UTdkWEhEUT09">https://ucdavishealth.zoom.us/j/926742042?pwd=ZFdHUlQ4cWxnbUkxdUQ1UTdkWEhEUT09</a></p>
                    <p class="line">Meeting ID: 926 742 042</p>
                    <p class="line">Password: 381039</p>
                    <p class="time">Meeting Dates</p>
                    <ul>
                        <li>January 27, 2021</li>
                        <li>February 24, 2021</li>
                        <li>March 24, 2021</li>
                        <li>April 28, 2021</li>
                        <li>May 26, 2021</li>
                        <li>June 23, 2021</li>
                        <li>July 28, 2021</li>
                    </ul>
                    
                </div>

                <button className="learn-more-button">
                    <Link to="/about-us" className="learn-more-text">Learn More</Link>
                </button>
            </div>
        </div>
    );
}

export default Home;