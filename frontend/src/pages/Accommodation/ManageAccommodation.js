import React from 'react';
import { Link } from 'react-router-dom';
import './Accommodation.css';
import Nav from '../../components/Navbar/adminNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/adminFooter';




const ManageAccommodation = () => {
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
            <h3>API Accommodations</h3>
            <Link to="/accommodationsthroughAPI">
              <button>API Accommodations</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/location-image.png" alt="Location" />
            <h3>Add Accommodation</h3>
            <Link to="/addAccommodation">
              <button>Add Accommodation</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/accommodation-image.png" alt="Accommodation" />
            <h3>Update Accommodation</h3>
            <Link to="/updateAccommodation">
              <button>Update Accommodation</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/transportation-image.png" alt="Transportation" />
            <h3>Delete Accommodation</h3>
            <Link to="/deleteAccommodation">
              <button>Delete Accommodation</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/activity-image.png" alt="Activity" />
            <h3>View Accommodations</h3>
            <Link to="/viewAccommodations">
              <button>View Accommodations </button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/plan-image.png" alt="Plan" />
            <h3>Search Accommodations</h3>
            <Link to="/searchAccommodation">
              <button>Search Accommodations</button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ManageAccommodation;
