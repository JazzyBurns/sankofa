import React from 'react';
import './PowerpointCard.css';

function PowerpointCard() {
  return (
    <div>
      <div className="pptRectangle"></div>
      <h3 style={{marginLeft: '33px'}}>Sankofa Presentation</h3>
      <button className="pptBtn">Click here to view</button>
    </div>
  )
}

export default PowerpointCard;