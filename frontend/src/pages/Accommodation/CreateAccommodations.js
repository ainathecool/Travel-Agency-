import React, { useState } from 'react';

const CreateAccommodation = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [amenities, setAmenities] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateAccommodation = async () => {
    try {
      const response = await fetch('http://localhost:3000/user/createAccommodation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
          imageUrl,
          address,
          location,
          price,
          amenities,
        }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage('Failed to create accommodation');
    }
  };

  return (
    <div>
      <h3>Create Accommodation</h3>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="description">Description:</label>
      <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

      <label htmlFor="imageUrl">Image URL:</label>
      <input type="text" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

      <label htmlFor="address">Address:</label>
      <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />

      <label htmlFor="location">Location:</label>
      <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />

      <label htmlFor="price">Price:</label>
      <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />

      <label htmlFor="amenities">Amenities:</label>
      <input type="text" id="amenities" value={amenities} onChange={(e) => setAmenities(e.target.value)} />

      <button onClick={handleCreateAccommodation}>Create Accommodation</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateAccommodation;
