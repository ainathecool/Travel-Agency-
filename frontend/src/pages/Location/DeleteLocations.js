import React, { useState } from 'react';

const DeleteLocation = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleDeleteLocation = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/deleteLocation`, {
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
      setMessage('Failed to delete location');
    }
  };

  return (
    <div>
      <h3>Delete Location</h3>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <button onClick={handleDeleteLocation}>Delete Location</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteLocation;
