import './App.css';
import countriesData from './countries.json';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountriesDetails';
import { Routes, Route } from "react-router-dom";



function App() {
  const [countries, setCountries] = useState(countriesData);
  
  // ⭐️ if we want to use fetch instead of countries.json, we can use this code and set initial state to an empty array and delete import json:
  // useEffect(() => {
  // fetch('https://ih-countries-api.herokuapp.com/countries')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setCountries(data);
  //   });
  // }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />
        <Route path="/:countryCode" element={<CountriesDetails countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
