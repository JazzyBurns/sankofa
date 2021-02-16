import React from 'react';
import RecordingCard from './RecordingCard';
import './Recordings.css';

function Recordings() {
  return (
    <div className="container">
      <div className="children"><RecordingCard/></div>
      <div className="children"><RecordingCard/></div>
      <div className="children"><RecordingCard/></div>
      <div className="children"><RecordingCard/></div>
    </div>
  )
}

export default Recordings;