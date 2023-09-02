<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
  <img align='right' alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png" width='50' height='50'>
</picture>


![GitHub last commit](https://img.shields.io/github/last-commit/nereidarondon/weather-dashboard?style=for-the-badge)

Check out my [Portfolio](http://NereidaRondon.com)

# <h1 align='center'>🌦️Weather Dashboard App</h1>


<table >
  <tr>
    <td width="50%">

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Challenges](#challenges)
- [Dependencies](#dependencies)
- [API Keys](#api keys)
- [Installation](#installation)
- [Build and Deploy](#build-and-deploy)
- [Video](#video)
- [License](#license)

    </td>
    
    <td width="50%" >

    [Project Website](https://myweatherdashboard.netlify.app/)

<img src='https://user-images.githubusercontent.com/97356401/196056495-85a520b2-ef0b-4cfa-a7f5-366676115631.png' width='250' height='250' alt='Bitmoji cloud'/>

<img src='https://user-images.githubusercontent.com/97356401/198838672-a7a3fa34-b907-4ab7-96ec-185b8723416f.png' width='230' height='230' alt='Bitmoji rain on me'/>
    </td>

  </tr>
</table>

-------------------------------------------------

## Introduction

Imagine taking a trip and wanting to know your destination’s weather so you can pack accordingly, or maybe you’re going to several different places and want to know the weather for every one of your destinations. That’s what I was thinking when I created my Weather Dashboard App. Moreover, what if you wanted to look up some restaurants or addresses once you make it to your destination? That was the reason for adding the map page to the app. Challenges in this project came from getting the API data to show as desired and the issue of how to update the cities that were saved on the dashboard. This was also the first time that I encountered a need for React-Router because I had tabs and the components had to switch when a different tab was clicked. I had to figure out how to set up the router to render the different “pages”. 

The Weather Dashboard App is a web application that allows users to search for and view current weather conditions for any city in the world. It provides information on individual tiles for each city, and users can also search for a city or address on a Google map. The app is built using React.js, making it responsive and suitable for both desktop and mobile devices.

🌥️ Used the Google Geo Location API to retrieve the user's coordinates and use them in collaboration with the Open Weather API to find the local weather for the HOME page.

⛈️ Used a combination of local storage and Open Weather API to store weather data for searched cities and display them as individual tiles, all on the DASHBOARD page.

🗺️ Used the Google Map Directions API for the MAP page. The map is interactive and links to a bigger Google map. 

-------------------------------------------------

## Technologies Used

- JavaScript
- React.js
- JSX
- React-Bootstrap
- CSS
- Axios
- GitHub
- Vite
  
<p align="left"> 
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="36" height="36" alt="Git" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://reactrouter.com/en/main"> <img src="https://user-images.githubusercontent.com/97356401/197912754-907c7c61-eaf9-4912-b979-ba3daf4a434e.svg" alt="react-router" width="45" height="45"/> </a>
<a href="https://axios-http.com/docs/intro"> <img src="https://axios-http.com/assets/logo.svg" alt="Axios" width="55" height="55"/></a>
<a href="https://react-bootstrap.github.io/" target="_blank" > <img src="https://react-bootstrap.github.io/img/logo.svg" alt="React-Bootstrap" width="40" height="40"/> </a> 
</p>

### APIs:
- Google Geo Location API
- Google Map Directions API
- Open Weather API

-------------------------------------------------

## Features

- Search for current weather conditions in any city worldwide.
- Display weather information on individual tiles.
- Search for cities or addresses on Google Maps.
- Responsive design for both desktop and mobile devices.
- Display weather icons representing the current conditions for each city.
- Persistently store weather data for searched cities in local storage.
- Interactive Google Map integration with directions feature.

-------------------------------------------------

## Challenges

One of the main challenges faced during this project was integrating the weather API with the Google static map API on the same user interface. Axios was used to make API requests, and data was dynamically rendered using React components. Additionally, implementing features like persistently storing weather data for searched cities and setting up React Router for tab navigation presented challenges.

-------------------------------------------------

## API Keys

### To get an API key from Google for this project:

1. Go to the Google Cloud Console: https://console.cloud.google.com/ and sign up.
2. Create e New Project.
3. Enable the required APIs. To do this, navigate to the "APIs & Services" > "Library" section in your project under the Maps category. For this application you'll need the Geolocation API and the Maps Static API.
4. Create Credentials: After enabling the necessary APIs, go to the "APIs & Services" > "Credentials" section. Click on the "Create Credentials" button and select "API Key."
5. Add Your API Key to Your Project: Once you've created and configured your API key, you'll receive the key value. You can now add this API key to your project's configuration. 

### To get an API Key from Open Weather:

1. Go to the OpenWeather Website: https://home.openweathermap.org/
2. Sign Up or Log In to access your Profile and services.
3. Click on your user name on the top right drop down and select "My API keys".
4. Click on the "Generate" button to generate a new API key. Once generated, your API key will be displayed on the screen. Copy the API key to use it in your project.
5. Read the documentation at https://openweathermap.org/api/one-call-3#current to learn how to make an API call. You can now add this API key to your project's configuration. 

### Use your API Keys

1. In the Home.jsx file replace the following:
   - Find ```export const WEATHER``` and reassign it to your weather API Key.
   - Find ```const geoURL = `https://www.googleapis.com/geolocation/v1/geolocate?key=${
    import.meta.env.VITE_MAP_API_KEY }`;``` and replace the information after "key=" with your Google API Key.
   - Find ```const staticURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=${zoom}&size=${size}&key=${
    import.meta.env.VITE_MAP_API_KEY
  }`;``` and replace the information after "key=" with your Google API Key.
2. In the BigMap.jsx replace the following:
   - Find ```const getMap = `https://www.google.com/maps/embed/v1/place?key=${
    import.meta.env.VITE_MAP_API_KEY
  }&q=${location}`;``` and replace the information after "key=" with your Google API Key.

  
-------------------------------------------------

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

2. Install the project dependencies:

```bash
npm install
```

3. Once you've installed the project you can start the development server:

```bash
npm run dev

```

4. Access the application in your web browser at http://localhost:5173  

-------------------------------------------------

## Build and Deploy

To build the project for deployment, use the following command:

```bash
npm run build
```

-------------------------------------------------

### Video:

 [Weather Dashboard](https://user-images.githubusercontent.com/97356401/200140593-73171a2f-66e0-4524-86ed-930e2618b2a8.webm)

-------------------------------------------------

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://linkedin.com/in/https://www.linkedin.com/in/nereidarondon/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/nereidarondon/" height="30" width="40" /></a> $~~~$
<a href="https://www.youtube.com/c/https://www.youtube.com/channel/ucinpd9noy3jb9l4owsmg6uq" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="https://www.youtube.com/channel/ucinpd9noy3jb9l4owsmg6uq" height="30" width="40" /></a> $~~~$
<a href="https://www.leetcode.com/nereidarondon" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="nereidarondon" height="30" width="40" /></a>
</p>

-------------------------------------------------

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
