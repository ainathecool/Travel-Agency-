import React, { useState } from 'react';
//import axios from 'axios';

const BookingSearchScreen = () => {
  const [bookingType, setBookingType] = useState('');
  const [status, setStatus] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleTypeChange = (e) => {
    setBookingType(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  
  const searchBookingByType = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/viewBookingByBookingType?bookingType=${bookingType}`, {
        method: 'GET', 
        mode: 'cors',
      });
  
      const data = await response.json();
      setSearchResults(data.booking);
    } catch (error) {
      console.error(error);
    }
  };

  const searchBookingByStatus = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/viewBookingByStatus?status=${status}`, {
        method: 'GET', 
        mode: 'cors',
      });
  
      const data = await response.json();
      setSearchResults(data.booking);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <h3>Search Bookings</h3>
      <div>
        <label>
          Search by Type:
          <input type="text" value={bookingType} onChange={handleTypeChange} />
        </label>
        <button onClick={searchBookingByType}>Search</button>
      </div>
      <div>
        <label>
          Search by Status:
          <input type="text" value={status} onChange={handleStatusChange} />
        </label>
        <button onClick={searchBookingByStatus}>Search</button>
      </div>
      <div>
        <h4>Search Results:</h4>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((booking) => (
              <li key={booking.id}>User Name: {booking.user.name}
                <ul key={booking.id}>Type: {booking.bookingType}</ul>
                <ul key={booking.id}>Total Price: {booking.totalPrice}</ul>
                <ul key={booking.id}>Status: {booking.status}</ul>
                <ul key={booking.id}>Booking Date: {booking.bookingDate}</ul>
              
              </li>
            ))}
          </ul>
        ) : (
          <p>No Booking found</p>
        )}
      </div>
    </div>
  );
};

export default BookingSearchScreen;
