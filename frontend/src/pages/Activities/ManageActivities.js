import React from 'react';
import { Link } from 'react-router-dom';
import './Activities.css';
import Nav from '../../components/Navbar/adminNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/adminFooter';




const ManageActivities = () => {
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
            <h3>Add Activities</h3>
            <Link to="/addActivities">
              <button>Add Activities</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/accommodation-image.png" alt="Accommodation" />
            <h3>Update Activities</h3>
            <Link to="/updateActivities">
              <button>Update Activities</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/transportation-image.png" alt="Transportation" />
            <h3>Delete Activities</h3>
            <Link to="/deleteActivities">
              <button>Delete Activities</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/activity-image.png" alt="Activity" />
            <h3>View Activities</h3>
            <Link to="/viewActivities">
              <button>View Activities </button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/plan-image.png" alt="Plan" />
            <h3>Search Activities</h3>
            <Link to="/searchActivities">
              <button>Search Activities</button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ManageActivities;
