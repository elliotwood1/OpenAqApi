import "./pollutionCard.scss";

import React from "react";

const PollutionCard = ({ location, measurements }) => {
  const value = measurements[0].value;
  const unit = measurements[0].unit;

  return (
    <div className="pollutionCard">
      <h2 className="location">{location}</h2>

      <div className="measurements">
        <p className="measurementsValue">{value}</p>
        <p className="measurementsUnit">{unit}</p>
      </div>

      <div className="pollutionLevelBarContainer">
        <div className="pollutionStrengthValue" style={{ width: value }}></div>
      </div>
    </div>
  );
};

export default PollutionCard;
