import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Sun from './img/Sun.png'

import WeatherList from './weather/WeatherList';
import SearchCity from './SearchCity';

class App extends Component {

  state = {
    weatherData: {},
    loading: true,
    city: 'Jerusalem'
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (city = 'Jerusalem') => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=7c9b5aa72584d0cc1727693f60e4d23e`)
      .then(response => {
        this.setState({
          weatherData: response.data,
          loading: false,
          city: city
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
        this.setState({
          weatherData: [],
          loading: false,
          city: ''
        });
      });
  }

  render() {
    return (
      <div className="App">
      <img className="sun-img" src={Sun} alt=""/>
      <h1 className='city'>Weather Report</h1>
      <h1 className='city'>{(this.state.city === '' ? 'Try Again...' : this.state.city)}</h1>
        <SearchCity onSearch={this.performSearch} />

        {
          (this.state.loading)
            ? <p>Loading...</p>
            :<ul> <WeatherList data={this.state.weatherData} /></ul>
        }
      </div>
    );
  }
}

export default App;
