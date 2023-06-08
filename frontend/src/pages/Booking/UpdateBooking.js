import React, { useState } from 'react';

const UpdateBookingByType = () => {
  const [user, setUser] = useState('');
  const [bookingType, setBookingType] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [status, setStatus] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdateBooking = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/updateBookingByType`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, bookingType, bookingId, status, totalPrice }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage('Failed to update booking');
    }
  };

  return (
    <div>
      <h3>Update Booking By Type</h3>
      <label htmlFor="user">User:</label>
      <input type="text" id="user" value={user} onChange={(e) => setUser(e.target.value)} />

      <label htmlFor="bookingType">Booking Type:</label>
      <input type="text" id="bookingType" value={bookingType} onChange={(e) => setBookingType(e.target.value)} />

      <label htmlFor="bookingId">Booking ID:</label>
      <input type="text" id="bookingId" value={bookingId} onChange={(e) => setBookingId(e.target.value)} />

      <label htmlFor="status">Status:</label>
      <input type="text" id="status" value={status} onChange={(e) => setStatus(e.target.value)} />

      <label htmlFor="totalPrice">Total Price:</label>
      <input type="text" id="totalPrice" value={totalPrice} onChange={(e) => setTotalPrice(e.target.value)} />

      <button onClick={handleUpdateBooking}>Update Booking</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateBookingByType;
