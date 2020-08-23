import "./airPollution.scss";

import React, { useState } from "react";

import PollutionCard from "../../Components/PollutionCard/PollutionCard";
import getLatestData from "../../utils/getLatestData";
import { useForm } from "react-hook-form";

const AirPollution = () => {
  const { handleSubmit, register } = useForm();
  const [formState, setFormState] = useState("initial");
  const [latestData, setLatestData] = useState([]);
  const listOfCities = ["Manchester", "Birmingham", "Leeds", "Liverpool"];

  const onSubmit = (data) => {
    getLatestData(data.city, setLatestData, setFormState);
  };

  return (
    <div className="airPollutionContainer">
      {formState === "loading" && <p className="formText">Loading...</p>}
      {formState === "error" && (
        <p className="formText">
          We are experiencing problems. Try again later..
        </p>
      )}

      {formState === "initial" && (
        <>
          <form className="latestDataForm" onSubmit={handleSubmit(onSubmit)}>
            <select
              className="latestDataFormSelect"
              label="Select a city"
              name="city"
              ref={register({ required: true })}
              defaultValue=""
            >
              <option disabled value="">
                Please select a location
              </option>
              {listOfCities.map((location, index) => {
                return (
                  <option key={index} value={location}>
                    {location}
                  </option>
                );
              })}
            </select>
            <button className="latestDataFormButton" type="submit">
              Submit
            </button>
          </form>

          <div className="locationCardContainer">
            {latestData.map((data, i) => {
              return (
                <PollutionCard
                  key={data.location}
                  location={data.location}
                  measurements={data.measurements}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default AirPollution;
