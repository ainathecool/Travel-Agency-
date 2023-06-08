import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import Nav from '../../components/Navbar/adminNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/adminFooter';




const HomepageAdmin = () => {
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
            <img src="path/to/user-image.png" alt="User" />
            <h3>Manage Users</h3>
            <Link to="/SearchUsers">
              <button>Go to Users</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/location-image.png" alt="Location" />
            <h3>Manage Locations</h3>
            <Link to="/manageLocations">
              <button>Go to Locations</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/accommodation-image.png" alt="Accommodation" />
            <h3>Manage Accommodations</h3>
            <Link to="/manageAccommodations">
              <button>Go to Accommodations</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/transportation-image.png" alt="Transportation" />
            <h3>Manage Transportations</h3>
            <Link to="/ManageTransport">
              <button>Go to Transportations</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/activity-image.png" alt="Activity" />
            <h3>Manage Activities</h3>
            <Link to="/manageActivities">
              <button>Go to Activities</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/plan-image.png" alt="Plan" />
            <h3>Manage Plans</h3>
            <Link to="/managePlans">
              <button>Go to Plans</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/booking-image.png" alt="Booking" />
            <h3>Manage Bookings</h3>
            <Link to="/manageBookings">
              <button>Go to Bookings</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/review-image.png" alt="Review" />
            <h3>Manage Reviews</h3>
            <Link to="/manageReviews">
              <button>Go to Reviews</button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HomepageAdmin;
