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
          <button class="btn"> 
              <a className="u" href="https://www.google.com/"> Department of Developmental Services</a> 
          </button>
          <button class="btn"> 
              <a className="u" href="https://www.google.com/">Listing of All Regional Centers in California</a> 
          </button>
       </div>
       <div className="regional-centers">
          <h2>Regional Centers</h2>
          <button class="btn"> place 1 </button>
          <button class="btn"> place 2 </button>
          <button class="btn"> place 3 </button>
          <button class="btn"> place 4 </button>
          <button class="btn"> place 5 </button>
        </div>
        <div className="early-int">
            <h2> Early Intervention Process</h2>
            <button class="btn"> <img src={image1} width="100" height="100" alt="hi"/> </button>
            <button class="btn"> <img src={image2} width="100" height="100" alt="hihi"/> </button>
        </div>
    </div>



  );
}

export default RegionalCenter;