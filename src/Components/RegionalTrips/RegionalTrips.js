import React from 'react';
import RegionTripCard from '../RegionTripCard/RegionTripCard';
import regionalTripData from '../../utils/regionalTripData';

const RegionalTrips = () => {

  let tripCards = regionalTripData.map(trip => {
    return <RegionTripCard {...trip} />
  })
  
  return (
    <section className="regional-trips">
      <h3>Trips by Region</h3>
      <section className="regional-trip-cards">
        { tripCards }
      </section>
    </section>
  )
}

export default RegionalTrips;