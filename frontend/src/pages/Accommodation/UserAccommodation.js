import React from 'react';
import { Link } from 'react-router-dom';
import './Accommodation.css';
import Nav from '../../components/Navbar/adminNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/adminFooter';




const UserAccommodation = () => {
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

export default UserAccommodation;
