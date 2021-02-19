import './RegionalCenter.css';
import image1 from './Com_info_eng.png';
import image2 from './Com_info_spa.png';

function RegionalCenter() {
  return (
    <div className="r-page">
        <div>
          <h1>Regional Center</h1>
        </div>
        <div className="about">
          <h2>About</h2>

          <a href="https://www.dds.ca.gov/">
            <button class="a-btn"> 
              <div class="uline">Department of Developmental Services</div>
          </button>
          </a>

          <a href="https://www.dds.ca.gov/rc/listings/">
            <button class="a-btn"> 
              <div class="uline">Listing of All Regional Centers in California</div>
          </button>
          </a>

       </div>
       <h2>Regional Centers</h2>
       <div className="regional-centers">
        
          <a href="http://www.altaregional.org/">
          <button class="r-btn" > 
          <p className="uline">North Bay Regional Center</p>
            <p>
            610 Airpark Rd. <br/>
            Napa, CA 94558
            </p>
            <p>Telephone: (916) 978-6400</p>
          </button>
          </a>

          <a href="https://nbrc.net/">
          <button class="r-btn" > 
          <p className="uline">Alta California Regional Center</p>
            <p>
            241 Harvard Street <br/>
            Suite 100<br/>
            Sacramento, CA 95815
            </p>
            <p>Telephone: (916) 978-6400</p> 
          </button>
          </a>

          <a href="https://www.farnorthernrc.org/about-us/">
          <button class="r-btn" > 
          <p className="uline">Far Northern Regional Center</p>
            <p>
            Two locations: <br/>
            Redding<br/>
            Chico
            </p>
          </button>
          </a>
 
          <a href="https://www.cvrc.org/">
          <button class="r-btn" > 
          <p className="uline">Central Valley Regional Center</p>
            <p>
            Three locations: <br/>
            Fresno<br/>
            Merced<br/>
            Visalia
            </p>
          </button>
          </a>

          <a href="http://www.vmrc.net/">
          <button class="r-btn" > 
          <p className="uline">Valley Mountain Regional Center</p>
            <p>
            Three locations: <br/>
            San Joaquin County (Main Office)<br/>
            Stanislaus County (Branch Office)<br/>
            Amador, Calaveras, Tuolumne Counties (Branch Office)
            </p>
          </button>
          </a>

        </div>
        <div className="early-int">
            <h2> Early Intervention Process</h2>
            <button class="i-btn"> <img src={image1} width="400" height="500" alt="hi"/> </button>
            <button class="i-btn"> <img src={image2} width="400" height="500" alt="hihi"/> </button>
        </div>
    </div>
  );
}

export default RegionalCenter;