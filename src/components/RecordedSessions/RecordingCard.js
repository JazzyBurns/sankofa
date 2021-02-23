import React from 'react';
import './RecordingCard.css';

function RecordingCard() {
  return (
    <div>
      <div className="rectangle"></div>
      <h3 className="meetingInfo">Date of Meeting</h3>
      <button className="RecBtn">Click here for recording</button>
    </div>
  )
}

export default RecordingCard;