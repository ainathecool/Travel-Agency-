import React from 'react';
import PropTypes from 'prop-types';


const Card = ({ imageUrl, title, description, price }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">${price}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
