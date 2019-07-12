import React from 'react';

const RegionTripCard = ({ title, details, image, alt }) => {

  return (
    <article>
      <img src={image} alt={alt} />
      <p>{ title }</p>
      <p>{ details }</p>
    </article>
  )
}

export default RegionTripCard;