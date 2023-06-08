import React, { useEffect, useState } from 'react';

const LocationList = () => {
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/viewAllLocations`);
        const data = await response.json();
        setLocations(data.locations);
      } catch (error) {
        console.error(error);
        setError('Failed to get locations');
      }
    };

    fetchLocations();
  }, []);

  return (
    <div>
      <h3>Location List</h3>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {locations.map((location) => (
            <li key={location._id}>{location.name}
                <ul key={location.id}>{location.description}</ul>
                <ul key={location.id}>{location.latitude}</ul>
                <ul key={location.id}>{location.longitude}</ul>
                <ul key={location.id}>{location.reviews}</ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationList;
