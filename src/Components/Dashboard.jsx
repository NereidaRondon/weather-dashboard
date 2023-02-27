import React from 'react';
import { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../app.css';
import Button from 'react-bootstrap/Button';
import CityTiles from './CityTiles.jsx';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

export default function Dashboard() {
  const [location, setLocation] = useState('');
  const inputLocation = useRef(null);

  useEffect(() => {
    inputLocation.current.focus();
  }, []);

  //listens for enter key, has same effect as clicking search button
  const handleKeyDown = (event) => {
    console.log('User pressed: ', event.key);

    if (event.key === 'Enter') {
      console.log('Enter key pressed ✅');
      GetLocation();
    }
  };

  //sets location to call weather API in WeatherTile component
  function GetLocation() {
    setLocation(inputLocation.current.value);
    console.log(location);
    console.log('searching...');
  }

  function SearchBar() {
    return (
      <Form className="d-flex">
        <Form.Control
          type="search"
          ref={inputLocation}
          placeholder="Enter city"
          className="ms-0 mt-2"
          aria-label="Search"
          onKeyDown={handleKeyDown}
        />
        <Button
          className="ms-2 mt-2 myFont bold"
          gap={1}
          variant="outline-dark"
          onClick={() => GetLocation()}
        >
          Search
        </Button>
      </Form>
    );
  }

  return (
    <div>
      <h1 className="bold dashboard-title">Weather Dashboard</h1>

      <SearchBar />

      <Container className="mb-3" fluid={true}>
        <CityTiles location={location} />
      </Container>
    </div>
  );
}
