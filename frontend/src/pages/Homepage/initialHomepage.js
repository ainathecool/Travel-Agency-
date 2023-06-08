import React, { useState } from 'react';
import Carousel from '../../components/Carousel';
import Header from '../../components/Header';
import UserFooter from '../../components/Footer/userFooter';
import accommodation from './images/accommodation.jpg';
import chairlift from './images/chairlift.jpg';
import hotel from './images/hotel.jpg';
import Newyork from './images/Newyork.jpg';
import pool from './images/pool.jpg';
import './Homepage.css';
import SignupForm from '../../components/Signup/defSignup';

const Homepage = () => {
  const carouselImages = [accommodation, chairlift, hotel, Newyork, pool];
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleSignupClick = () => {
    setShowSignupForm(true);
  };

  return (
    <div className="homepage">
      {/* Header */}
      <Header />

      {/* Carousel */}
      <Carousel images={carouselImages} />

      {/* Login and Signup Buttons */}
      <div className="button">
        <button>Login</button>
        <button onClick={handleSignupClick}>Signup</button>
      </div>

      {/* Description */}
      <div className="description">
        <h2>Welcome to Full Marks Travel Agency and Tour Planning</h2>
        <p>
          Experience the best travel destinations with us. We offer a wide range of services including accommodations,
          transportations, activities, and personalized travel plans. Start your journey with us today!
        </p>
      </div>

      {/* Signup Form */}
      {showSignupForm && <SignupForm />}

      {/* Footer */}
      <UserFooter />
    </div>
  );
};

export default Homepage;


// import React from 'react';
// import Carousel from '../../components/Carousel';
// import Header from '../../components/Header';
// import UserFooter from '../../components/Footer/userFooter';
// import accommodation from './images/accommodation.jpg';
// import chairlift from './images/chairlift.jpg';
// import hotel from './images/hotel.jpg';
// import Newyork from './images/Newyork.jpg';
// import pool from './images/pool.jpg';
// import './Homepage.css';
// import SignupForm from '../../components/Signup/defSignup';

// const Homepage = () => {

//     const carouselImages = [accommodation, chairlift, hotel, Newyork, pool];


//   return (
//     <div className="homepage">
//       {/* Header */}
//       <Header />

//       {/* Carousel */}
//         <Carousel images={carouselImages} />

//       {/* Login and Signup Buttons */}
//       <div className="button">
//       <button >Login</button>
//       <button >Signup</button>
//       </div>

//       {/* Description */}
//       <div className="description">
//         <h2>Welcome to Full Marks Travel Agency and Tour Planning</h2>
//         <p>Experience the best travel destinations with us. We offer a wide range of services including accommodations, transportations, activities, and personalized travel plans. Start your journey with us today!</p>
//       </div>

//       {/* Footer */}
//       <UserFooter />
//     </div>
//   );
// }

// export default Homepage;
