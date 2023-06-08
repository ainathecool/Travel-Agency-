import React, { useState } from 'react';
//import axios from 'axios';

const LocationSearchScreen = () => {
  const [name, setName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  
  const searchLocationByName = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/viewLocationByName?name=${name}`, {
        method: 'GET', 
        mode: 'cors',
      });
  
      const data = await response.json();
      setSearchResults(data.location);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <h3>Search Locations</h3>
      <div>
        <label>
          Search by Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button onClick={searchLocationByName}>Search</button>
      </div>
      <div>
        <h4>Search Results:</h4>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((location) => (
              <li key={location.id}>{location.name}
                <ul key={location.id}>{location.description}</ul>
                <ul key={location.id}>{location.latitude}</ul>
                <ul key={location.id}>{location.longitude}</ul>
                <ul key={location.id}>{location.reviews}</ul>
              
              </li>
            ))}
          </ul>
        ) : (
          <p>No locations found</p>
        )}
      </div>
    </div>
  );
};

export default LocationSearchScreen;
