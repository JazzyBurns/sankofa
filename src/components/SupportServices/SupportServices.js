import './SupportServices.css'


function SupportServices()
{
    
   return (
   
    <div className="SupportServices-body">
         <h2>Support Services Resources</h2>
        <p>
            <h5>Click to jump to section:</h5>
            <li>Website Resources</li>
            <li>Speech/Language Website Resources</li>
            <li>Physical Therapy Website Resources</li>

        </p>
            
       
    </div>
    
    <div className="WebsiteContainer">
        <h2>Website Resources</h2>
        <ul classname="WebsiteSections">
            <li><a href="http://www.warmlinefrc.org"><span>Warmline</span></a></li>
            <li><a href="https://thegiftsfoundation.org"><span>The Gifts Foundation</span></a></li>
            <li><a href="http://vistachildtherapy.com"><span>Occupational Therapy</span></a></li>
            <li><a href="https://health.ucdavis.edu/mindinstitute/centers/cedd.html/"><span>Center for Excellence in Developmental Disabilities</span></a></li>
            
           
        </ul>

    </div>
   
   <div classname="SpeechContainer">
    <h2>Speech/Language Website Resources</h2>
    <ul classname="SpeechSections">
        <li><a href="https://www.asha.org"><span>American-Speech-Lanugage-Hearing Association (ASHA)</span></a></li>
        <li><a href="http://www.arsgoldriver.com"><span>American River Speech Therapy</span></a></li>
        <li><a href="https://capitolspeechandrehab.com"><span>Capitol Speech & Rehab</span></a></li>
        <li><a href="http://cookspeechandlanguage.com/"><span>Cook Speech and Language</span></a></li>
        <li><a href="https://www.ssrlc.org/"><span>Sacramento Scottish Rite</span></a></li>
        <li><a href="https://tlcinctherapies.com/"><span>Therapeutic Language Clinic</span></a></li>

    </ul>
   </div>

        <div classname="PTcontainer">
            <h2>Physical Therapy Website Resources</h2>
            <ul classname="Ptsections">
                <li><a href="http://www.babystepstherapy.com"><span>Baby Steps Therapy</span></a></li>
                <li><a href="http://www.burgerrehab.com"><span>Burger Physical Therapy</span></a></li>
                <li><a href="https://www.ctchelpskids.org"><span>Children's Therapy Center</span></a></li>
                <li><a href="https://www.easterseals.com/superior-ca/"><span>Easterseals Superior California</span></a></li>
                <li><a href="https://www.jabbergym.com"><span>Jabber Gym</span></a></li>
                <li><a href="https://www.tesidea.com"><span>Total Education Solutions</span></a></li>
                <li><a href="http://www.sierrapediatrics.com"><span>Sierra Pediatric Therapy Clinic</span></a></li>

            </ul>
        </div>
   );
}
export default SupportServices;