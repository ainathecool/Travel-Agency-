import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import './Homepage.css';
import UserNav from '../../components/Navbar/userNav'
import UserFooter  from '../../components/Footer/userFooter';
import accommodation from './images/accommodation.jpg';
import chairlift from './images/chairlift.jpg';
import hotel from './images/hotel.jpg';
import Newyork from './images/Newyork.jpg';
import pool from './images/pool.jpg';
import Header from '../../components/Header';



const userHomepage = () => {

  const carouselImages = [accommodation, chairlift, hotel, Newyork, pool];

  return (
    <div className="homepage">

        {/* Header */}
        <Header />

        <UserNav />

      <Carousel images={carouselImages} />
      <div className="options-grid">
        {/* Option 1 */}
        <div className="option">
               <img src="path/to/user-image.png" alt="User" />
               <h3>Locations</h3>
               <Link to="/Locations">
                 <button>Go to Locations</button>
               </Link>
        </div>
        {/* Option 2 */}
        <div className="option">
               <img src="path/to/user-image.png" alt="User" />
               <h3>Accommodations</h3>
               <Link to="/Accommodation">
                 <button>Go to Accommodations</button>
               </Link>
        </div>
        {/* Option 3 */}
        <div className="option">
               <img src="path/to/user-image.png" alt="User" />
               <h3>Transportation</h3>
               <Link to="/Transportation">
                 <button>Go to Transportation</button>
               </Link>
        </div>
        {/* Option 4 */}
        <div className="option">
               <img src="path/to/user-image.png" alt="User" />
               <h3>Activities</h3>
               <Link to="/Activities">
                 <button>Go to Activities</button>
               </Link>
        </div>
        {/* Option 5 */}
        <div className="option">
               <img src="path/to/user-image.png" alt="User" />
               <h3>Bookings</h3>
               <Link to="/Bookings">
                 <button>Go to Bookings</button>
               </Link>
        </div>
        {/* Option 6 */}
        <div className="option">
               <img src="path/to/user-image.png" alt="User" />
               <h3>Plans</h3>
               <Link to="/Plans">
                 <button>Go to Plans</button>
               </Link>
        </div>
        <div className="option">
               <img src="path/to/user-image.png" alt="User" />
               <h3>Reviews</h3>
               <Link to="/Reviews">
                 <button>Go to Reviews</button>
               </Link>
        </div>
        <div className="option">
               <img src="path/to/user-image.png" alt="User" />
               <h3>Profile</h3>
               <Link to="/updateProfile">
                 <button>Go to Profile</button>
               </Link>
        </div>
      </div>
      <div className="fixed-button">Login/Signup</div>

      <UserFooter />
    </div>
  );
};

export default userHomepage;


