import React from 'react';
import './details-sceleton.css';

const DetailsSceleton = ({loading}) => {
  return (
    <div className="person-details card">
      <div className="sceleton-image" alt="character" />

      <div className="card-body">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default DetailsSceleton;
