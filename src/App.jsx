import { useState } from 'react'
import './App.css'

const API = {
  KEY: "f9632d7fed269a36e381ef513e818ce5",
  BASE: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});

  const searchPressed = (e) => {
    e.preventDefault();
    fetch(`${API.BASE}weather?q=${search}&units=metric&APPID=${API.KEY}`)
      .then(res => res.json())
      .then(result => { console.log(result); setWeather(result) });
    console.log("Search pressed with: " + search);
  }

  return (
    <>
      {/* Header */}
      <h1 style={{marginBottom: "0"}}>
        Weather App
      </h1>
      <p style={{marginBottom: "40px"}}>
        with OpenWeatherMap API
      </p>

      {/* Search bar */}
      <div>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder='Enter city/town...' />
        <button onClick={searchPressed}>Search</button>
      </div>

      {
        typeof weather.main != "undefined" &&
        <div>
          {/* Location */}
          <p>{weather.name}</p>

          {/* Temperature F/C */}
          <p>{weather.main?.temp} °F</p>

          {/* Condition (Sunny) */}
          <div>
            <p>{weather.weather[0].main}</p>
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      }
    </>
  )
}

export default App
