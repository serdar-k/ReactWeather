import React, { useContext } from 'react';
import { useEffect } from 'react';
import WeatherContext from '../context/WeatherContext';

function Main() {
  const { cityName, mainTemp, wind, weather, logo, feelsLike } =
    useContext(WeatherContext);
  const date = new Date();
  const days = [
    'Pazartesi',
    'Sali',
    'Carsamba',
    'Persembe',
    'Cuma',
    'Cumartesi',
    'Pazar',
  ];

  const day = date.getDay();
  return (
    <>
      {cityName && (
        <div className="card col-3 m-auto mt-2">
          <img
            className="img-fluid w-25 m-auto"
            src={logo && `http://openweathermap.org/img/wn/${logo}@2x.png`}
          />
          <div className="card-body">
            <h5 className="card-title">{cityName.toUpperCase()}</h5>
            <p>{days[day - 1]}</p>
            <p>Saat: {date.getHours() + ':' + date.getMinutes()}</p>
            <p>Sicaklik: {mainTemp.toString().slice(0, 4)} °C</p>
            <p>Hissedilen: {feelsLike.toString().slice(0, 4)}</p>
            <p>Ruzgar: {wind} kt</p>
            <p>Hava Durumu: {weather}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
