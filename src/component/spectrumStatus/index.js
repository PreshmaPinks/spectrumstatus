import React from "react";

const SpectrumStatus = ({ spectrumData }) => {
  const {
    altitude,
    Altitude,
    isActionRequired,
    IsActionRequired,
    isAscending,
    IsAscending,
    statusMessage,
    temperature,
    velocity,
    StatusMessage,
    Temperature,
    Velocity,
  } = spectrumData;
  return (
    <div>
      <div className="spectrum-container">
        <div>
          <h2>Altitude:</h2>
          {altitude || Altitude}
        </div>
        <div
          className={`${isActionRequired || IsActionRequired ? "action" : ""}`}
        >
          <h2>Action Required:</h2>
          {isActionRequired || IsActionRequired ? "True" : "False"}
        </div>
        <div>
          <h2>Is Ascending: </h2>
          {isAscending || IsAscending ? "True" : "False"}
        </div>
        <div>
          <h2>StatusMessage:</h2>
          {statusMessage || StatusMessage}
        </div>
        <div>
          <h2>Temperature:</h2>
          {temperature || Temperature}
        </div>
        <div>
          <h2> Velocity:</h2>
          {velocity || Velocity}
        </div>
      </div>
    </div>
  );
};

export default SpectrumStatus;
