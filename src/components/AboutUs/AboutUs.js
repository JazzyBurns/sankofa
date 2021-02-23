import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './AboutUs.css';

function AboutUs() {

    return (
        <div>
            <Helmet>
                <title>Sankofa | About Us</title>
                <style>{'body { background-color: #FFFCF8; }'}</style>
            </Helmet>
            
            <div className="about-us-container">
                <h1 id="about-title">About Sankofa</h1>

                <div className="about">
                    <div className="about-text">
                        <h2>What is Sankofa?</h2>
                        <p>
                            The word Sankofa comes from an African language which means “go 
                            back and fetch it” which is significant to the mission and purpose of 
                            the group which is to take information and resources we learn back 
                            to people in the community. Sankofa was founded in 2015 in order to 
                            meet the unique needs of parents of Black children with autism and 
                            other developmental disabilities. Since our inception, Sankofa has 
                            supported the needs of the parents by providing advocacy and 
                            resources that have increased awareness of developmental 
                            disabilities at the community level. 
                        </p>
                    </div>

                    <div className="about-img">
                        <img src="images/Sankofa Logo.png"/>
                    </div>

                    <div className="about-quote">
                        <p>
                            “The Sankofa Group to me in three words: Support, Safety, and Resources” 
                            — Tomorrow Larkin, Grandmother
                        </p>
                    </div>
                </div>

                <div className="topics">
                    <div className="topics-text">
                        <h2>Topics Covered in Past Support Group Meetings:</h2>
                        <p>
                            Covered in Past Support Group Meetings:
                        </p>

                        <ul>
                            <li>Knowing parental rights.</li>
                            <li>Understanding Behavioral Intervention Plans.</li>
                            <li>Understanding Special Education laws.</li>
                            <li>Advocating for Assistive Technology.</li>
                            <li>Balancing personal mental health with parenting.</li>
                            <li>And much more.</li>
                        </ul>
                        
                        <p>
                            We meet every month and this meeting is a free event! Dinner and 
                            childcare will be provided. RSVP is encouraged but not required to 
                            attend meetings.
                        </p>
                    </div>

                    <div className="topic-quote">
                        <p>
                            “The Sankofa Group to me in three words: Support, Safety, and Resources” 
                            — Tomorrow Larkin, Grandmother
                        </p>
                    </div>
                </div>

                <div className="goals">
                    <h2>Goals and Objectives:</h2>
                    
                    <ul>
                        <li>To host monthly support group meetings to bring under-resourced communities into the MIND.</li>
                        <li>To provide culturally relevant and sensitive trainings. </li>
                        <li>To engage in strategic outreach events.</li>
                        <li>To foster partnerships with cultural stakeholder agencies and organizations for future collaboration and information sharing.  </li>
                        <li>To provide space for intentional and purposeful planning and networking for families.  </li>
                        <li>To eradicate the stigma associated with disability in the Black community and promote inclusion. </li>
                    </ul>
                </div>

                <div className="about-us-buttons">
                    <button className="f-button">
                        <Link to="/facilitators" className="f-text">Facilitators</Link>
                    </button>

                    <button className="contact-button">
                        <Link to="/contact-us" className="contact-text">Contact Us</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;