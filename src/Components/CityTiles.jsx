import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../app.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import x from '../images/x.svg';
import update from '../images/refresh.svg';
import { WEATHER } from './Home.jsx';

export default function CityTiles(props) {
  const { location } = props;
  const [cities, setCities] = useState([]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER}&units=imperial`;

  //retrieves weather info from local storage in cities state at first render
  useEffect(() => {
    const cities = JSON.parse(localStorage.getItem('items'));
    console.log(cities);

    if (cities === '') {
      console.log('no cities');
    } else {
      console.log('saving cities from local storage');
      setCities(cities);
    }
  }, []);

  //saves info to local storage whenever cities state is updated
  useEffect(() => {
    console.log('added to local storage');
    localStorage.setItem('items', JSON.stringify(cities));
  }, [cities]);

  //gets weather from weatherAPI and saves it in cities state
  useEffect(() => {
    if (location === '') {
      console.log('no location');
    } else {
      axios
        .get(url)
        .then((response) => {
          console.log('weather response data', response.data);
          setCities([...cities, response.data]);
        })
        .catch((error) => {
          console.log(`Error, can't get ${location}'s weather!`);
        });
    }
  }, [props]);

  //maps data to card tiles
  function DashboardList() {
    console.log(cities);

    const tiles = cities.map((cityprops) => {
      return <CityCard key={cityprops.id} city={cityprops} />;
    });

    return (
      <Row
        xs="auto"
        md="auto"
        lg="auto"
        className="m-auto g-4 text-center center--items"
      >
        {tiles}
      </Row>
    );
  }

  //get new weather data from weather API then udpate data for city ID in mock API
  function UpdateCity(id, city) {
    console.log(`refresh weather data for ${city}...`);

    const updateURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER}&units=imperial`;

    axios
      .get(updateURL)
      .then((response) => {
        console.log(response.data);
        setCities((current) =>
          current.map((obj) => {
            if (obj.id === id) {
              return response.data;
            }
            return obj;
          })
        );
      })
      .catch((error) => {
        console.log(error);
        console.log(`Error, can't get ${city}'s weather!`);
      });
    return cities;
  }

  //Deletes entry from weather state array, deletes element from DOM
  function DeleteCity(id) {
    document.getElementById(id).remove();

    const filterCities = () => {
      setCities((current) =>
        current.filter((city) => {
          return city.id !== id;
        })
      );
    };
    filterCities();
    console.log('city deleted');
  }

  function CityCard(cityprops) {
    return (
      <Col>
        <Card
          id={cityprops.city.id}
          className="mt-1 mb-1 my--card"
          text="light"
          border="light"
          style={{ width: '16rem' }}
        >
          <Card.Body>
            <Card.Title className="bold m-auto spreadout" as="h1">
              <button
                className="icon"
                onClick={() => DeleteCity(cityprops.city.id)}
              >
                <img
                  className="icon--x"
                  src={x}
                  alt="delete {cityprops.city.name} weather tile"
                />
              </button>

              <button
                className="icon"
                onClick={() =>
                  UpdateCity(cityprops.city.id, cityprops.city.name)
                }
              >
                <img
                  className="icon--update"
                  src={update}
                  alt="update {cityprops.city.name} weather"
                />
              </button>
            </Card.Title>
            <Card.Title className="bold m-auto spreadout" as="h2">
              {cityprops.city.name}
            </Card.Title>

            {cityprops.city.main ? (
              <Card.Subtitle className="bold text-center" as="h1">
                {Math.round(cityprops.city.main.temp)}
                <sup>o</sup>
              </Card.Subtitle>
            ) : null}

            <Card.Text as="div">
              {cityprops.city.weather ? (
                <h3 className="text-center mb-0">
                  {cityprops.city.weather[0].description}
                </h3>
              ) : null}

              {cityprops.city.weather ? (
                <img
                  className="weather--icon m-auto"
                  src={`https://openweathermap.org/img/wn/${cityprops.city.weather[0].icon}@2x.png`}
                  alt="weather clouds icon"
                />
              ) : null}

              {cityprops.city.main ? (
                <p className="text-center mb-0">
                  Humidity: {Math.round(cityprops.city.main.humidity)}%
                </p>
              ) : null}

              {cityprops.city.weather ? (
                <p className="text-center mb-0">
                  Wind: {Math.round(cityprops.city.wind.speed)} mph
                </p>
              ) : null}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  return <DashboardList />;
}
