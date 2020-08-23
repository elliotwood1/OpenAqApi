import axios from "axios";

const getLatestData = (city, setLatestData, setFormState) => {
  setFormState("loading");
  const data = axios
    .get(`https://api.openaq.org/v1/latest?country=GB&city=${city}`)
    .then((response) => {
      setFormState("initial");
      setLatestData(response.data.results);
    })
    .catch((error) => {
      setFormState("error");
    });

  return data;
};

export default getLatestData;
