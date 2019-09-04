import React from 'react';

const Weather = ({ date, temp, weather }) => {

  const temperature = Math.round(temp.temp);
  const newDate = date.split('',10)
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date(date);
  const dayName = days[d.getDay()];

  return (
    <div className="group-wrap">
    <li>
      <h3>{newDate}</h3>
      <h3>{dayName}</h3>
      <p>{weather[0].main}</p>
      <h2>Temperature: {temperature}°c</h2>
      <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" />
      </li>
      <p>{weather[0].description}</p>


    </div>
  );
}

export default Weather;