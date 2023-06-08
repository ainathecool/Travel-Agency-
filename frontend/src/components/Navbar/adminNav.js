import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';



// links ko update karna hai 
const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <ul className="admin-navbar__menu">
        <li className="admin-navbar__item">
          <Link to="/admin/users" className="admin-navbar__link">Users</Link>
        </li>
        <li className="admin-navbar__item">
          <Link to="/admin/locations" className="admin-navbar__link">Locations</Link>
        </li>
        <li className="admin-navbar__item">
          <Link to="/admin/accommodations" className="admin-navbar__link">Accommodations</Link>
        </li>
        <li className="admin-navbar__item">
          <Link to="/admin/transportations" className="admin-navbar__link">Transportations</Link>
        </li>
        <li className="admin-navbar__item">
          <Link to="/admin/activities" className="admin-navbar__link">Activities</Link>
        </li>
        <li className="admin-navbar__item">
          <Link to="/admin/bookings" className="admin-navbar__link">Bookings</Link>
        </li>
        <li className="admin-navbar__item">
          <Link to="/admin/plans" className="admin-navbar__link">Plans</Link>
        </li>
        <li className="admin-navbar__item">
          <Link to="/admin/reviews" className="admin-navbar__link">Reviews</Link>
        </li>
        <li className="admin-navbar__item">
          <Link to="/admin/payments" className="admin-navbar__link">Payments</Link>
        </li>
        {/* Add more management options here */}
      </ul>
    </nav>
  );
};

export default AdminNavbar;
