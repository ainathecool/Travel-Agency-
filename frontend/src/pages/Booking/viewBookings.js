import React, { useEffect, useState } from 'react';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/viewAllBookings`);
        const data = await response.json();
        setBookings(data.bookings);
      } catch (error) {
        console.error(error);
        setError('Failed to get bookings');
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h3>Booking List</h3>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
              <li key={booking.id}>User Name: {booking.user.name}
              <ul key={booking.id}>Type: {booking.bookingType}</ul>
              <ul key={booking.id}>Total Price: {booking.totalPrice}</ul>
              <ul key={booking.id}>Status: {booking.status}</ul>
              <ul key={booking.id}>Booking Date: {booking.bookingDate}</ul>
            
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingList;
