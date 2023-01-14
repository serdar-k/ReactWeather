import { useEffect } from 'react';
import { createContext, useState } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [cityName, setCityName] = useState('');
  const [mainTemp, setMainTemp] = useState('');
  const [wind, setWind] = useState('');
  const [weather, setWeather] = useState('');
  const [logo, setLogo] = useState('');
  const [date, setDate] = useState('');
  const [feelsLike, setFeelsLike] = useState('');

  const values = {
    setCityName,
    cityName,
    mainTemp,
    wind,
    weather,
    logo,
    date,
    feelsLike,
  };

  const getWeather = async (city) => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6114a2c6aac933789d6b2523351993a4&units=metric&&lang=tr`
    )
      .then((response) => response.json())
      .then((condition) => {
        setMainTemp(condition.main.temp);
        setWeather(condition.weather[0].description);
        setWind(condition.wind.speed);
        setLogo(condition.weather[0].icon);
        setFeelsLike(condition.main.feels_like);
        // setDate(condition.dt);

        console.log(condition);
      });
  };

  useEffect(() => {
    getWeather(cityName);
  }, [cityName]);
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
