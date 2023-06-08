import React, { useState } from 'react';
//import axios from 'axios';

const ReviewsSearchScreen = () => {
  const [reviewType, setReviewType] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleTypeChange = (e) => {
    setReviewType(e.target.value);
  };

  
  const searchReviewByType = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/getReviewByType?reviewType=${reviewType}`, {
        method: 'GET', 
        mode: 'cors',
      });
  
      const data = await response.json();
      setSearchResults(data.reviews);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <h3>Search Reviews</h3>
      <div>
        <label>
          Search by Type:
          <input type="text" value={reviewType} onChange={handleTypeChange} />
        </label>
        <button onClick={searchReviewByType}>Search</button>
      </div>

      <div>
        <h4>Search Results:</h4>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((reviews) => (
              <li key={reviews.id}>User Name: {reviews.user.name}
                <ul key={reviews.id}>Type: {reviews.reviewType}</ul>
                <ul key={reviews.id}>Review Type Name Specification: {reviews.reviewId.name}</ul> 
                <ul key={reviews.id}>Comment: {reviews.comment}</ul>
              
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews found</p>
        )}
      </div>
    </div>
  );
};

export default ReviewsSearchScreen;
