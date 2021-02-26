import './Resources.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

function Resources() {
  return (
    <div className="resources-container">
      <Helmet>
        <title>Sankofa | Resources</title>
        <style>{'body {background-color: #FFFCF8; }'}</style>
      </Helmet>
      <h1>Resources</h1>
      <div className="res-card-container">
        <Link className="card-link" to='/education'><span>Education</span></Link>
        <Link className="card-link" to='/MH_Resources'><span>Mental Health</span></Link>
        <Link className="card-link" to='/policy'><span>Policy, Outreach, and Advocacy</span></Link>
        <Link className="card-link" to='/RecordedSessions'><span>Recorded Sessions &amp; Powerpoints</span></Link>
        <Link className="card-link" to='/SupportServices'><span>Support Services</span></Link>
      </div>
    </div>
  );
}

export default Resources;