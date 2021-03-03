import { Helmet } from 'react-helmet';
import './MH_Resources.css';

function MH_Resources() {
  return (
    <div className="MH-container">
      <Helmet>
        <title>Sankofa Mental Health Resources</title>
        <style>{'body {background-color: #FFFCF8; }'}</style>
      </Helmet>

      <h1 className="MH-h1">Mental Health Resources</h1><br/>
      <h3 className="MH-h3-title">Click to jump to section: </h3>
      <a href="#website_resources" className="MH-h3-normal">Website Resources <br/></a> 
      <a href="#autism_services" className="MH-h3-normal">Autism Services <br/></a> 
      <br/><br/>

      <h2 className="MH-h2">Website Resources<a id="website_resources"></a></h2>

      <div className="MH-row">
         <br/>
      </div>

      <div className="MH-row">
      
      </div>

     
 

      <div classname="MH-row">
      <a href="http://anxietytreatmentexperts.com/">
        <button className="MH-button1">Anxiety Treatment Center</button>
      </a> 
      <a href="https://www.autismspeaks.org/tool-kit/100-day-kit-young-children">
        <button className="MH-button1">Autism Speaks 100-day Kit</button>
      </a> <br/>
      <a href="http://www.chadd.org"> 
        <button  className='MH-button1'>Children and Adults with ADHD (CHADD)</button>
      </a>
     </div>

     <div classname="MH-row">
        <a href="http://www.psychologytoday.com"> 
            <button  className='MH-button1'>Psychology Today</button>
        </a>
        <a href="http://www.sagepsychotherapy.org/">
            <button className='MH-button1'>Sage Psychotherapy</button>
        </a>
    </div>

    <div classname="MH-row">
        <a href="https://therapyforblackgirls.com/"> 
            <button  className='MH-button1'>Therapy for Black Girls</button>
        </a>
        <a href="https://therapyforblackmen.org/">
            <button className='MH-button1'>Therapy for Black Men</button>
        </a>
    </div>

    <div classname="MH-row">
        <a href="https://health.ucdavis.edu/mindinstitute/"> 
            <button  className='MH-button1'>UC Davis MIND institute</button>
        </a>
    </div><br/>
      

      <h2 className="MH-h2">Autism Services<a id="autism_services"></a></h2>

          <div classname="MH-col">
            <a href="https://health.ucdavis.edu/mindinstitute/"> 
                <button  className='MH-button2'>
                <p className="MH-underlined">Autism Spectrum Therapies</p>
                    <p classname="MH-p">
                    2150 River Plaza Drive, Suite 410, <br/>
                    Sacramento, CA 95833<br/>
                    (866) 727-8274<br/><br/>
                    Autism Spectrum Therapies has Applied Behavior Analysis (ABA) therapy, social skills groups, occupational therapy, speech therapy, and counseling.
                    </p>
                </button>
            </a>
            <a href="https://meristem.pro/"> 
                <button  className='MH-button2'>
                <p className="MH-underlined">Meristem</p>
                <p>
                9200 Fair Oaks Blvd., Fair Oaks, CA 95628<br/>
                (916) 963-1000<br/><br/>
                This is a program for young adults with autism that teaches many different life and independence skills.
                </p>
                </button>
            </a>
            
            
            <a href="http://www.teamcas.com/"> 
                <button  className='MH-button2'>
                <p className="MH-underlined">Capitol Autism Services</p>
                <p>
                1901 Royal Oaks Drive, Suite 200,<br/> 
                Sacramento, CA 95833<br/>
                (916) 923-1789<br/><br/>
                Capitol Autism Services has ABA and social skills training, and are affiliated with Land Park School.
                </p>
                </button>
            </a>

            <a href="http://www.sassna.org/"> 
            <button  className='MH-button2'>
            <p className="MH-underlined">Sacramento Autistic Spectrum and Special Needs Alliance</p>
            <p>
            P.O. Box 254788, Sacramento, CA 95865 <br/>
                (916) 877-5220<br/>
                (844) 722-2881 <br/> <br/>
                They provide case management, advocacy and educational events to families.
            </p>
            </button>
            </a>
            
            <a href="http://www.greenhousetherapy.net/"> 
                <button  className='MH-button2'>
                <p className="MH-underlined">Greenhouse Therapy Group Inc.</p>
                <p>
                3550 Watt Ave., Sacramento, CA 95821<br/>
                (916) 701-7667<br/><br/>
                Greenhouse provides individual, couples, and family counseling specifically for people with autism and their families, and also social skills groups. They serve all ages and have offices in Sacramento, Elk Grove and Folsom.
                </p>
                </button>
            </a>



            <a href="https://www.sacramento-autism.com/"> 
            <button  className="MH-button2">
            <p className="MH-underlined">Sacramento Autism Services</p>
                <p>
                7840 Madison Ave., Suite 150, Fair Oaks, CA 95628<br/>
                (916) 534-7572<br/><br/> </p>
                <p>They have ABA (Applied Behavioral Analysis) therapy and events for families.      
                </p>
            </button>
            </a>

            <a href="http://juvobh.com/"> 
                <button  className='MH-button2'>
                <p className="MH-underlined">Juvo Autism and Behavioral Health Services</p>
                <p>
                1710 Prairie City Road, Suite 100, Folsom, CA 95630<br/>
                    (877) 200-5886<br/><br/>
                    Juvo offers ABA therapy, school support services, and even summer camps.
                </p>
                </button>
            </a>

            <a href="https://ucpsacto.org/"> 
                <button  className='MH-button2'>
                <p className="MH-underlined">United Cerebral Palsy of Sacramento and Northern California</p>
                <p>
                4350 Auburn Blvd., Sacramento, CA 95841<br/>
                (916) 565-7700<br/><br/>
                They include people with autism in their services. They have family respite, an adult day program, and a program to help with independent living skills. Clients must receive a referral from Alta California Regional Center before receiving services, but helpful information is available for everyone.
                </p>
                </button>
            </a>
        </div>

    </div>
  );
}

export default MH_Resources;
 
