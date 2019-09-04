import React from 'react';
import Weather from './Weather';
import NotFound from './NotFound';


const WeatherList = props => {

  const results = props.data.list;
  let days;
  if (results != null) {
    days = results.filter(day => {
      if (!day.dt_txt.includes('12:00:00')) {
        return false; // skip
      }
      return true;
    }).slice(0, 5).map((day, index) => {
      return <Weather key={index} date={day.dt_txt} temp={day.main} weather={day.weather} />

    });
  } else {
    return <NotFound />
  }


  return (
    <div className="outer">
      <div className="middle">
        {days}
      </div>
    </div>

  );
}

export default WeatherList;