import React from 'react';
import './PowerpointCard.css';

function PowerpointCard(props) {
  return (
    <div className="pptCardContainer">
      <div className="pptRectangle">
        <img className="imgPpt" src={props.pptImg} />
      </div>
      <h3>{props.title}</h3>
      <button
        type="button"
        className="pptBtn"
        onClick={(e) => {
          e.preventDefault();
          window.open(props.pptUrl, "_blank");
        }}
      >
        Click here to view
      </button>
    </div>
  );
}

export default PowerpointCard;