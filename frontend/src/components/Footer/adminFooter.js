import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';




//update linkssssss
const AdminFooter = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <Link to="/admin/users">Manage Users</Link>
          </li>
          <li>
            <Link to="/admin/locations">Manage Locations</Link>
          </li>
          <li>
            <Link to="/admin/accommodations">Manage Accommodations</Link>
          </li>
          <li>
            <Link to="/admin/transportations">Manage Transportations</Link>
          </li>
          <li>
            <Link to="/admin/activities">Manage Activities</Link>
          </li>
          <li>
            <Link to="/admin/bookings">Manage Bookings</Link>
          </li>
          <li>
            <Link to="/admin/plans">Manage Plans</Link>
          </li>
          <li>
            <Link to="/admin/reviews">Manage Reviews</Link>
          </li>
          <li>
            <Link to="/admin/payments">Manage Payments</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default AdminFooter;
