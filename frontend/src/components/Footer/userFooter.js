import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';


//update linksss

const UserFooter = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <Link to="/profile">Manage Profile</Link>
          </li>
          <li>
            <Link to="/locations">Explore Locations</Link>
          </li>
          <li>
            <Link to="/accommodations">Browse Accommodations</Link>
          </li>
          <li>
            <Link to="/transportations">Discover Transportations</Link>
          </li>
          <li>
            <Link to="/activities">Find Activities</Link>
          </li>
          <li>
            <Link to="/bookings">Manage Bookings</Link>
          </li>
          <li>
            <Link to="/plans">View Plans</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/reviews">Write Reviews</Link>
          </li>
        </ul>
      </nav>
      <div className="user-footer__details">
        <p>Email: fullmarks@travelagency.com</p>
        <p>Phone: 111-111-111</p>
      </div>
      <p>Travel Agency Website &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default UserFooter;
