import React from 'react';
import { Link } from 'react-router-dom';
import './Plans.css';
import Nav from '../../components/Navbar/adminNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/adminFooter';




const UserPlans = () => {
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
            <h3>Add Plan</h3>
            <Link to="/addPlan">
              <button>Add Plan</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/accommodation-image.png" alt="Accommodation" />
            <h3>Update Plan</h3>
            <Link to="/updatePlan">
              <button>Update Plan</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/transportation-image.png" alt="Transportation" />
            <h3>Delete Plan</h3>
            <Link to="/deletePlan">
              <button>Delete Plan</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/activity-image.png" alt="Activity" />
            <h3>View Plan</h3>
            <Link to="/viewUserPlan">
              <button>View Plan </button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/plan-image.png" alt="Plan" />
            <h3>Search Plan</h3>
            <Link to="/searchUserPlans">
              <button>Search Plan</button>
            </Link>
          </div>
          <div className="option">
            <img src="path/to/plan-image.png" alt="Plan" />
            <h3>Pay For Plan</h3>
            <Link to="/payForPlan">
              <button>Plan Payment</button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UserPlans;
