import React, { useState } from 'react';

const LocationPopulation = () => {
  const [message, setMessage] = useState('');

  const handlePopulateLocations = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/CreateLocationsThroughApi`);
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage('Failed to populate locations');
    }
  };

  return (
    <div>
      <h3>Location Population</h3>
      <button onClick={handlePopulateLocations}>Populate Locations</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LocationPopulation;
