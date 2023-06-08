import React from 'react';
import { Link } from 'react-router-dom';
import './Transportation.css';
import Nav from '../../components/Navbar/adminNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/adminFooter';




const ManageTransportation = () => {
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
            <h3>Add Transportation</h3>
            <Link to="/addTransportation">
              <button>Add Transportation</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/accommodation-image.png" alt="Accommodation" />
            <h3>Update Transportation</h3>
            <Link to="/updateTransportation">
              <button>Update Transportation</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/transportation-image.png" alt="Transportation" />
            <h3>Delete Transportation</h3>
            <Link to="/deleteTransportation">
              <button>Delete Transportation</button>
            </Link>
          </div>
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

export default ManageTransportation;
