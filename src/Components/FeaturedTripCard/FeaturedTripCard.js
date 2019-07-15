import React from 'react';

const FeaturedTripCard = ({ image, title, details, timeline }) => {

  return (
    <article className="featured-trip-card">
      <img src={ image } className="feature-trip-image" />
      <div className="feature-trip-details-box">
        <h6 className="feature-trip-title">{title}</h6>
        <p>{ details }</p>
        <p className="feature-trip-cost">{ timeline }</p>
      </div>
    </article>
  )
}

export default FeaturedTripCard;