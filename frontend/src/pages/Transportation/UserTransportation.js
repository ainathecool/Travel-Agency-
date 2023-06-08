import React from 'react';
import { Link } from 'react-router-dom';
import './Transportation.css';
import Nav from '../../components/Navbar/adminNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/adminFooter';




const UserTransportation = () => {
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
            <h3>View Transportation</h3>
            <Link to="/viewTransportation">
              <button>View Transportation </button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/plan-image.png" alt="Plan" />
            <h3>Search Transportation</h3>
            <Link to="/searchTransport">
              <button>Search Transportation</button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UserTransportation;
