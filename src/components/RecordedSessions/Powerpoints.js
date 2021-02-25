import React from 'react';
import PowerpointCard from './PowerpointCard';
import './Powerpoints.css';
import { PresentationData } from './Materials';

function Powerpoint() {
  const RenderPowerpoints = PresentationData.map((pre) => (
    <div className="pptChildren">
      <PowerpointCard title={pre.title} pptUrl={pre.url} pptImg={pre.thumbnail}/>
    </div>
  ));
  return (
    <div className="pptContainer">
      {RenderPowerpoints}
    </div>
  )
}

export default Powerpoint;