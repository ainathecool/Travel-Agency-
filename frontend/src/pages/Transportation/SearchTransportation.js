import React, { useState } from 'react';
//import axios from 'axios';

const TransportSearchScreen = () => {
  const [name, setName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  
  const searchTransportByName = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/viewTransportationByName?name=${name}`, {
        method: 'GET', 
        mode: 'cors',
      });
  
      const data = await response.json();
      setSearchResults(data.transportation);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <h3>Search Transportation</h3>
      <div>
        <label>
          Search by Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button onClick={searchTransportByName}>Search</button>
      </div>
      <div>
        <h4>Search Results:</h4>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((transportation) => (
              <li key={transportation.id}>Name: {transportation.name}
                <ul key={transportation.id}>Description: {transportation.description}</ul>
                <ul key={transportation.id}>Price: {transportation.price}</ul>
                <ul key={transportation.id}>departureTime: {transportation.departureTime}</ul>
                <ul key={transportation.id}>arrivalTime: {transportation.arrivalTime}</ul>
                <ul key={transportation.id}>Reviews: {transportation.reviews}</ul>
              
              
              </li>
            ))}
          </ul>
        ) : (
          <p>No transportation found</p>
        )}
      </div>
    </div>
  );
};

export default TransportSearchScreen;
