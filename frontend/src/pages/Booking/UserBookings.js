import React from 'react';
import { Link } from 'react-router-dom';
import './Booking.css';
import Nav from '../../components/Navbar/adminNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/adminFooter';




const UserBooking = () => {
  return (
    <div className="homepage">

         {/* Header */}
      <Header />

      <Nav />
      
      <div className="homepage-content">
        <div className="logo-container">
          {/* Add your logo here */}
          <img src="path/to/logo.png" alt="Logo" />
        </div>
        
        <div className="management-options">
          <div className="option">
            <img src="path/to/location-image.png" alt="Location" />
            <h3>Add Booking</h3>
            <Link to="/addBooking">
              <button>Add Booking</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/accommodation-image.png" alt="Accommodation" />
            <h3>Update Booking</h3>
            <Link to="/updateBooking">
              <button>Update Booking</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/transportation-image.png" alt="Transportation" />
            <h3>Delete Booking</h3>
            <Link to="/deleteBooking">
              <button>Delete Booking</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/activity-image.png" alt="Activity" />
            <h3>View Booking</h3>
            <Link to="/viewUserBooking">
              <button>View Booking </button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/plan-image.png" alt="Plan" />
            <h3>Search Booking</h3>
            <Link to="/searchUserBooking">
              <button>Search Booking</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/plan-image.png" alt="Plan" />
            <h3>Pay For Booking</h3>
            <Link to="/payForBooking">
              <button>Booking Payment</button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UserBooking;