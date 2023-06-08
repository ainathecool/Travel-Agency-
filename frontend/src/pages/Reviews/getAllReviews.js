import React, { useEffect, useState } from 'react';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/viewAllReviews`);
        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        console.error(error);
        setError('Failed to get reviews');
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
        <div>
        <h4>Search Results:</h4>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((reviews) => (
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

export default ReviewList;
