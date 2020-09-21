import { processData } from './output';

const getWeatherData = async (city, units) => {
  const key = process.env.API_KEY;
  const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  try {
    const res = await fetch(`${baseURL}${city}&units=${units}&appid=${key}`);
    const data = await res.json();
    processData(data, units);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export default getWeatherData;
