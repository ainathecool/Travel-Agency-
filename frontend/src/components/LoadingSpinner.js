import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <FaSpinner className="spinner-icon" />
    </div>
  );
};

export default LoadingSpinner;
