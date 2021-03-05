import React from 'react';
import RecordingCard from './RecordingCard';
import './Recordings.css';
import { RecordingData } from './Materials';
import { Helmet } from 'react-helmet';

function Recordings() {
  const renderRecordings = RecordingData.map((rec) => (
    <div className="children"><RecordingCard recImg={rec.thumbnail} meetingDate={rec.date} recUrl={rec.url}/></div>
  ))
  return (
    <div className="recordingsContainer">
      <Helmet>
        <title>Sankofa | Recorded Sessions</title>
        <style>{'body {background-color: #FFFCF8; }'}</style>
      </Helmet>
      {renderRecordings}
    </div>
  )
}

export default Recordings;