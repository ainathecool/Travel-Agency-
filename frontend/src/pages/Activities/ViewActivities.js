import React, { useEffect, useState } from 'react';

const ActivityList = () => {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/viewAllActivities`);
        const data = await response.json();
        setActivities(data.activities);
      } catch (error) {
        console.error(error);
        setError('Failed to get activities');
      }
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <h3>Activity List</h3>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {activities.map((activity) => (
            <li key={activity._id}>
              <h4>{activity.name}</h4>
              <h3>{activity.description}</h3>
              <h3>Price: {activity.price}</h3>
              <h3>Rating: {activity.rating}</h3>
              <p>Reviews: {activity.reviews.length}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActivityList;
