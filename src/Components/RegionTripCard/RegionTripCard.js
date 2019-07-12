import React from 'react';

const RegionTripCard = ({ title, details, image, alt }) => {

  return (
    <article className="regional-trip-card">
      <div className="regional-image-zoom-container">
        <img src={image} alt={alt} className="regional-trip-image"/>
      </div>  
      <div className="regional-trip-title-box">
        <h6 className="regional-trip-title">{ title }</h6>
      </div>
      <p>{ details }</p>
    </article>
  )
}

export default RegionTripCard;