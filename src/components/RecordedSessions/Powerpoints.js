import React from 'react';
import PowerpointCard from './PowerpointCard';
import './Powerpoints.css';

function Powerpoint() {
  return (
    <div className="pptContainer">
      <div className="pptChildren"><PowerpointCard/></div>
      <div className="pptChildren"><PowerpointCard/></div>
      <div className="pptChildren"><PowerpointCard/></div>
      <div className="pptChildren"><PowerpointCard/></div>
    </div>
  )
}

export default Powerpoint;