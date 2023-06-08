import React from 'react';
import { Link } from 'react-router-dom';
import './Location.css';
import Nav from '../../components/Navbar/adminNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/adminFooter';




const ManageLocation = () => {
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
            <h3>API Locations</h3>
            <Link to="/getAPILocations">
              <button>API Locations</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/location-image.png" alt="Location" />
            <h3>Add Location</h3>
            <Link to="/addLocations">
              <button>Add Locations</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/accommodation-image.png" alt="Accommodation" />
            <h3>Update Location</h3>
            <Link to="/updateLocations">
              <button>Update Location</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/transportation-image.png" alt="Transportation" />
            <h3>Delete Location</h3>
            <Link to="/deleteLocations">
              <button>Delete Location</button>
            </Link>
          </div>
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

export default ManageLocation;
