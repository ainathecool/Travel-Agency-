import React, { useState } from 'react';

const DeleteAccommodation = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleDeleteAccommodation = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/deleteAccommodation`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage('Failed to delete accommodation');
    }
  };

  return (
    <div>
      <h3>Delete Accommodation</h3>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <button onClick={handleDeleteAccommodation}>Delete Accommodation</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteAccommodation;
