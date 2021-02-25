import React from 'react';
import './RecordingCard.css';

function RecordingCard(props) {
  return (
    <div className="recCardContainer">
      <div className="recRectangle">
        <img className="imgRec" src={props.recImg} />
      </div>
      <h3>{props.meetingDate}</h3>
      <button
        type="button"
        className="RecBtn"
        onClick={(e) => {
          e.preventDefault();
          window.open(props.recUrl, "_blank");
        }}
      >
        Click here for recording
      </button>
    </div>
  );
}

export default RecordingCard;