import { Helmet } from 'react-helmet';
import './MH_Resources.css';

function MH_Resources() {
  return (
    <div className="MH_Resources-container">
      <Helmet>
        <title>Sankofa Mental Health Resources</title>
        <style>{'body {background-color: #FFFCF8; }'}</style>
      </Helmet>

      <h1 className="MH_Resources-h1">Mental Health Resources</h1>
      <h3 className="MH_Resources-h3-title">Click to jump to section:</h3>
      <h3 className="MH_Resources-h3-normal">Website Resources</h3>
      <h3 className="MH_Resources-h3-normal">Autism Resources</h3>



      <h2 className="subheading-h2">Website Resources</h2>
      <div className="resources-row1">
      <a href="http://anxietytreatmentexperts.com/">
        <button className="button1">Anxiety Treatment Center</button>
      </a> 
      <a href="https://www.autismspeaks.org/tool-kit/100-day-kit-young-children">
        <button className="button1">Autism Speaks 100-day Kit</button>
      </a> 
      </div>

      <div classname="resources-row1">
            <a href="http://www.chadd.org"> 
                <button  className='button1'>Children and Adults with ADHD (CHADD)</button>
                </a>
     </div>

     <div classname="resources-row1">
        <a href="http://www.psychologytoday.com"> 
            <button  className='button1'>Psychology Today</button>
        </a>
        <a href="http://www.sagepsychotherapy.org/">
            <button className='button1'>Sage Psychotherapy</button>
        </a>
    </div>

    <div classname="resources-row1">
        <a href="https://therapyforblackgirls.com/"> 
            <button  className='button1'>Therapy for Black Girls</button>
        </a>
        <a href="https://therapyforblackmen.org/">
            <button className='button1'>Therapy for Black Men</button>
        </a>
    </div>

    <div classname="resources-row1">
        <a href="https://health.ucdavis.edu/mindinstitute/"> 
            <button  className='button1'>UC Davis MIND institute</button>
        </a>
    </div>

      

      <h2 className="subheading-h2">Autism Services</h2>
      <div classname="services">
        <a href="https://health.ucdavis.edu/mindinstitute/"> 
            <button  className='edubutton'>Autism Spectrum Therapies
            <p>
            2150 River Plaza Drive, Suite 410, <br/>
            Sacramento, CA 95833<br/>
            (866) 727-8274<br/>
            Autism Spectrum Therapies has Applied Behavior Analysis (ABA) therapy, social skills groups, occupational therapy, speech therapy, and counseling.
            </p>
            </button>
        </a>
        <a href="https://meristem.pro/"> 
            <button  className='Webbutton'>Meristem
            <p>
            9200 Fair Oaks Blvd., Fair Oaks, CA 95628<br/>
            (916) 963-1000<br/>
            This is a program for young adults with autism that teaches many different life and independence skills.
            </p>
            </button>
        </a>
        </div>



    </div>
  );
}

export default MH_Resources;
 