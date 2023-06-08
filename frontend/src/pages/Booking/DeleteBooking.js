import React, { useState } from 'react';

const DeleteBookingByType = () => {
  const [bookingType, setBookingType] = useState('');
  const [message, setMessage] = useState('');

  const handleDeleteBooking = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/deleteBookingByType`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookingType }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage('Failed to delete booking');
    }
  };

  return (
    <div>
      <h3>Delete Booking By Type</h3>
      <label htmlFor="bookingType">Booking Type:</label>
      <input type="text" id="bookingType" value={bookingType} onChange={(e) => setBookingType(e.target.value)} />

      <button onClick={handleDeleteBooking}>Delete Booking</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteBookingByType;
