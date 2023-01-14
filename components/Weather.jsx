import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import WeatherContext from '../context/WeatherContext';

function Weather() {
  const { setCityName, mainTemp, wind, weather } = useContext(WeatherContext);
  const [city, setCity] = useState('');
//   const [textLong, setTextLong] = useState(0);

  return (
    <div className="col-3 container">
      <input
        placeholder="Sehir Ismi Giriniz"
        className={'form-control'}
        type={'search'}
        onChange={(e) => {
          setCity(e.target.value);
        //   setTextLong(city.length);
        }}
      ></input>
      <button className={'btn btn-primary'} onClick={() => setCityName(city)}>
        Ara
      </button>
    </div>
  );
}

export default Weather;
