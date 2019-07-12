import React, {Component} from 'react';
import FeaturedTripCard from '../FeaturedTripCard/FeaturedTripCard';
import { featuredTripData } from '../../utils/featuredTripData';

class FeaturedTrips extends Component {
  constructor() {
    super()
    this.state = {
      display: 0,
      left: 9,
      right: 2
    }
  }

  moveLeft = () => {
    if (this.state.display === 0) {
      this.setState({
        display: 9,
        left: 8,
        right: 1
      })
    } else {
      this.setState({
        display: (this.state.display - 1),
        left: (this.state.left - 1) ,
        right: (this.state.right - 1)
      })
    }
  }

  moveRight = () => {
    if (this.state.display === 9) {
      this.setState({
        display: 0,
        left: 9,
        right: 2
      })
    } else {
      this.setState({
        display: (this.state.display + 1),
        left: (this.state.left + 1),
        right: (this.state.right + 1)
      })
    }
  }

  render() {

    let featuredTrips = featuredTripData.map(card => {
      return <FeaturedTripCard {...card} />
    })

    return (
      <section className="featured-trips">
        <h3>Featured Trips & Destinations</h3>
        <article className="trip-cards"> 
          <button onClick={this.moveLeft}>Back</button>
          { featuredTrips[this.state.display] }
          <button onClick={this.moveRight}>Forward</button>
        </article>  
      </section>
    )
  }
}

export default FeaturedTrips;