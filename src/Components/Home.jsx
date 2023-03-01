import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../app.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import refresh from '../images/refresh.svg';
import Footer from './Footer.jsx';

export const WEATHER = 'c32b649490f1417ec2b6d663c05a1a21';

export default function Home() {
  const [data, setData] = useState([]);
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const geoURL = `https://www.googleapis.com/geolocation/v1/geolocate?key=${
    import.meta.env.VITE_MAP_API_KEY
  }`;

  const size = '500x400';
  const zoom = 10;
  const staticURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=${zoom}&size=${size}&key=${
    import.meta.env.VITE_MAP_API_KEY
  }`;

  //weather api url
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER}&units=imperial`;

  //gets geolocation coordinates, then gets weather with coordinates
  useEffect(() => {
    axios.post(geoURL).then((response) => {
      console.log(response.data);
      setLat(response.data.location.lat);
      setLon(response.data.location.lng);
    });
  }, []);

  //renders at page load with error but rerenders once lat & lon have been set to display current local weather and map
  useEffect(() => {
    GetLocationWeather(url);
  }, [lon]);

  //runs when refresh is clicked, updates local weather & map
  function GetLocationWeather(url) {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log('Error, missing location!');
      });
  }

  function StaticMap() {
    return (
      <div>
        {data.main ? (
          <img className='static-map' src={staticURL} alt={`map of ${data.name}`} />
        ) : null}

        {data.sys ? (
          <figcaption>
            {data.name}, {data.sys.country}
          </figcaption>
        ) : null}
      </div>
    );
  }

  return (
    <>
      <div className='bg--div'>
        <h1 className='home-box1 bold'>Local Weather</h1>
        <div className='home'>
          <button className='refresh--btn home-box2' onClick={() => GetLocationWeather(url)}>
            <img className='refresh' src={refresh} width='40' alt='refresh button'></img>
          </button>

          <div className='home-box3'>
            {data.main ? (
              <>
                <h1 className='temp bold mb-0'>
                  {Math.round(data.main.temp)}
                  <sup>o</sup>
                </h1>
                <h5>
                  Feels like <span>{Math.round(data.main.feels_like)}</span>
                  <sup>o</sup>
                </h5>
              </>
            ) : null}

            {data.weather ? (
              <>
                <h2 className='mb-0'>{data.weather[0].description}</h2>
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt='weather clouds icon'
                />
              </>
            ) : null}
          </div>
          <div className='home-box4'></div>
          <div className='home-box5'>
            {data.main ? (
              <>
                <h5>
                  Low of {Math.round(data.main.temp_min)}
                  <sup>o</sup>
                </h5>
                <h5 className='mb-0'>
                  High of {Math.round(data.main.temp_max)}
                  <sup>o</sup>
                </h5>
              </>
            ) : null}
          </div>

          <div className='home-box6'>
            {data.main ? <h5>Humidity: {Math.round(data.main.humidity)}%</h5> : null}

            {data.weather ? (
              <h5 className='mb-0'>Wind: {Math.round(data.wind.speed)} mph</h5>
            ) : null}
          </div>

          <div className='home-map home-box7'>
            <StaticMap />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
