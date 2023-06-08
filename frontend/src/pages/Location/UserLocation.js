import React from 'react';
import { Link } from 'react-router-dom';
import './Location.css';
import Nav from '../../components/Navbar/adminNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/adminFooter';




const UserLocation = () => {
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
            <img src="path/to/activity-image.png" alt="Activity" />
            <h3>View Locations</h3>
            <Link to="/viewLocations">
              <button>View Locations</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/plan-image.png" alt="Plan" />
            <h3>Search Locations</h3>
            <Link to="/searchLocations">
              <button>Search Locations</button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UserLocation;
