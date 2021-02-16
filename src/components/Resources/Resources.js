import './Resources.css';
import { Link } from 'react-router-dom';

function Resources() {
  return (
    <div className="resources-container">
      <h1>Resources</h1>
      <div className="res-card-container">
        <Link className="card-link" to='/education'><span>Education</span></Link>
        <Link className="card-link" to='/directory'><span>Mental Health</span></Link>
        <Link className="card-link" to='/policy'><span>Policy, Outreach, and Advocacy</span></Link>
        <Link className="card-link" to='/RecordedSessions'><span>Recorded Sessions &amp; Powerpoints</span></Link>
        <Link className="card-link" to='/SupportServices'><span>Support Services</span></Link>
      </div>
    </div>
  );
}

export default Resources;