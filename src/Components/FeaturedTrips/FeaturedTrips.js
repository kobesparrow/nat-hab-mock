import React, {Component} from 'react';
import FeaturedTripCard from '../FeaturedTripCard/FeaturedTripCard';
import leftArrow from '../../utils/images/left-arrow.svg'
import rightArrow from '../../utils/images/right-arrow.svg'
import { featuredTripData } from '../../utils/featuredTripData';


class FeaturedTrips extends Component {
  constructor() {
    super()
    this.state = {
      left: 9,
      display: 0,
      right: 1
    }
  }

  moveLeft = () => {
    if (this.state.display === 0) {
      this.setState({
        left: 8,
        display: 9,
        right: 1
      })
    } else if (this.state.right === 0) {
      this.setState({
        left: 8,
        display: 7,
        right: 9
      })
    } else if (this.state.left === 0) {
      this.setState({
        left: 9,
        display: 0,
        right: 1
      })
    } else {
      this.setState({
        left: (this.state.left - 1) ,
        display: (this.state.display - 1),
        right: (this.state.right - 1)
      })
    }
  }

  moveRight = () => {
    if (this.state.display === 9) {
      this.setState({
        left: 9,
        display: 0,
        right: 2
      })
    } else if (this.state.left === 9) {
      this.setState({
        left: 0,
        display: 1,
        right: 2
      })
    } else if (this.state.right === 9) {
      this.setState({
        left: 8,
        display: 9,
        right: 0
      })
    } else {
      this.setState({
        left: (this.state.left + 1),
        display: (this.state.display + 1),
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
          <div className="arrow-container">
            <img src={featuredTripData[this.state.left].image} className="carousel-left" />
            <button onClick={this.moveLeft}><img src={leftArrow} className="arrow" alt="arrow buttons" /></button>
          </div>
          <div className="featured-trip">
            { featuredTrips[this.state.display] }
          </div>
          <div className="arrow-container" >
            <img src={featuredTripData[this.state.right].image} className="carousel-right" />
            <button onClick={this.moveRight}><img src={rightArrow} className="arrow" alt="arrow buttons" /></button>
          </div>
        </article>  
      </section>
    )
  }
}

export default FeaturedTrips;