import React from 'react';
import Powerpoints from './Powerpoints';
import Recordings from './Recordings';
import './RecordedSessions.css';

function RecordedSessions() {
  return (
    <div className="recordedSessions">
      <h1 style={{fontWeight:"bold"}}>Recorded Sessions & Powerpoints</h1>
      <h2 style={{fontWeight:"bold"}}>Recorded Sessions</h2>
      <Recordings/>
      <h2 style={{fontWeight:"bold"}}>Powerpoints</h2>
      <Powerpoints/>
    </div>
  );
}

export default RecordedSessions;