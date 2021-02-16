import React from 'react';
import './RecordingCard.css';

function RecordingCard() {
  return (
    <div>
      <div className="rectangle"></div>
      <h3 style={{marginLeft: '107px'}}>Date of Meeting</h3>
      <button className="btn">Click here for recording</button>
    </div>
  )
}

export default RecordingCard;