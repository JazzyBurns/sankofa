import './POA_Resources.css';
import { Helmet } from 'react-helmet';

function POA_Resources() {
    return(
        <div className="POA-container">
            
            <Helmet>
                <title>Sankofa | Policy, Outreach, and Advocacy Resources</title>
                <style>{'body {background-color: #FFFCF8; }'}</style>
            </Helmet>

            <h1 className="POA-title">Policy, Outreach, and Advocacy Resources</h1>

            <div className="column-container">
            <a href="https://www.aucd.org//template/index.cfm">
            <button className="rectangle1" >Association of University Centers on Disabilities (AUCD)</button>
            </a> 

            <a href="https://www.aucd.org/emergingleaders/home">
            <button className="rectangle2" >ACUD Emerging Leaders Community</button>
            </a> 

            <a href="https://www.aapf.org/">
            <button className="rectangle3" >The African American Policy Forum (AAPF)</button>
            </a> 
            </div>

        </div>
    );
}

export default POA_Resources;
