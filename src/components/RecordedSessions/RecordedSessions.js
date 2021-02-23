import React from 'react';
import Powerpoints from './Powerpoints';
import Recordings from './Recordings';
import './RecordedSessions.css';

function RecordedSessions() {
  return (
    <div className="recordedSessions">
      <h1>Recorded Sessions & Powerpoints</h1>
      <h2>Recorded Sessions</h2>
      <Recordings/>
      <h2>Powerpoints</h2>
      <Powerpoints/>
    </div>
  );
}

export default RecordedSessions;