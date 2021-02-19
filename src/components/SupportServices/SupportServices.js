import './SupportServices.css'


function SupportServices()
{

   return (
  <div classname="Support">
        <h2>Support Services Resources</h2>
    <div className="SupportServices-body">
        
        <p>
            <h3>Click to jump to section:</h3>
            <li>Website Resources</li>
            <li>Speech/Language Website Resources</li>
            <li>Physical Therapy Website Resources</li>
            </p>


    </div>

    
        
        <div classname="WebsiteSections">
        
        <h2>Website Resources</h2>
           <a href="http://www.warmlinefrc.org">
            
             <button className="btnCol" className='Webbutton'>Warmline</button>
           
           </a>
           
          <a href="https://thegiftsfoundation.org">
              
              <button className="btnCol" className='Webbutton'>The Gifts Foundation</button>

              </a>

            <a href="http://vistachildtherapy.com">
                
                <button className="btnCol" className='Webbutton'>Occupational Therapy</button>
                
                </a>
            <a href="https://health.ucdavis.edu/mindinstitute/centers/cedd.html/"> 
            <button className="btnCol" className='Webbutton'>Center for Excellence in Developmental Disabilities</button>
            
            </a>
        </div>

   

   
    
    <div classname="SpeechSections">
    <h2>Speech/Language Website Resources</h2>
        <a href="https://www.asha.org">
            <button className="btnCol" className='Speechbutton'>American-Speech-Lanugage-Hearing Association (ASHA)</button>
            </a>
        <a href="http://www.arsgoldriver.com">
            <button className="btnCol" className='Speechbutton'>American River Speech Therapy</button>
            </a>
        <a href="https://capitolspeechandrehab.com">
            <button className="btnCol" className='Speechbutton'>Capitol Speech & Rehab</button></a>
       <a href="http://cookspeechandlanguage.com/">
           <button className="btnCol" className='Speechbutton'>Cook Speech and Language</button>
       </a>
       <a href="https://www.ssrlc.org/">
           <button className="btnCol" className='Speechbutton'>Sacramento Scottish Rite</button>
           </a>
       <a href="https://tlcinctherapies.com/">
           <button className="btnCol" className='Speechbutton'>Therapeutic Language Clinic</button>
           </a>
    </div>
   

       
            
            <div classname="Ptsections">
                <h2>Physical Therapy Website Resources</h2>
                <a href="http://www.babystepstherapy.com">
                    
                    <button className="btnCol" className='PTbutton'>Baby Steps Therapy</button>

                </a>
                <a href="http://www.burgerrehab.com">
                    
                    <button className="btnCol" className='PTbutton'>Burger Physical Therapy</button>
                    
                </a>
                <a href="https://www.ctchelpskids.org">
                   
                    <button className="btnCol" className='PTbutton'>Children's Therapy Center</button>
                   
                    </a>
                <a href="https://www.easterseals.com/superior-ca/">
                   
                    <button className="btnCol" className='PTbutton'>Easterseals Superior California</button>
                   
                    </a>
                    
                <a href="https://www.jabbergym.com/">
                   
                    <button className="btnCol" className='PTbutton'>Jabber Gym</button>
                   
                    </a>
                <a href="https://www.tesidea.com">
                   
                    <button className="btnCol" className='PTbutton'>Total Education Solutions</button>
                   
                    </a>
                <a href="http://www.sierrapediatrics.com">
                    
                    <button className="btnCol" className='PTbutton'>Sierra Pediatric Therapy Clinic</button>
                    
                    </a>

            </div>
       
    </div>
   );
}
export default SupportServices;