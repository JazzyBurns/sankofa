import React from 'react';
import RecordingCard from './RecordingCard';
import './Recordings.css';
import { RecordingData } from './Materials';

function Recordings() {
  const renderRecordings = RecordingData.map((rec) => (
    <div className="children"><RecordingCard recImg={rec.thumbnail} meetingDate={rec.date} recUrl={rec.url}/></div>
  ))
  return (
    <div className="recordingsContainer">
      {renderRecordings}
    </div>
  )
}

export default Recordings;