import React from 'react';
import instagram from '../../utils/images/social-icons/instagram.svg';
import facebook from '../../utils/images/social-icons/facebook.svg';
import youtube from '../../utils/images/social-icons/youtube.svg';
import twitter from '../../utils/images/social-icons/twitter.svg';
import pinterest from '../../utils/images/social-icons/pinterest.svg';

const Footer = () => {

  return (
    <section className="footer">
      <section className="footer-columns">
        <section className="footer-column">
          <h6>Interests</h6>
          <p>Specialized Photography Tours</p>
          <p>Family Adventures</p>
          <p>Adventure Cruising</p>
          <p>Bear Viewing</p>
          <p>Whale Watching</p>
          <p>Rain Forest Tours</p>
          <p>Nat Hab's Active Expeditions</p>
          <p>Hiking & Trekking Adventures</p>
          <p>Kayaking Adventures</p>
          <p>Custom African Safari Planner</p>
        </section>
        <section className="footer-column">
          <h6>Regions</h6>
          <p>Churchill Polar Bear Tours</p>
          <p>Galapagos Cruises & Tours</p>
          <p>African Safaris</p>
          <p>Alaska & Northern Adventures</p>
          <p>Antarctica & Arctic Voyages</p>
          <p>Asia & Pacific Adventures</p>
          <p>Mexico & Central America Tours</p>
          <p>South America Adventures</p>
          <p>U.S. National Parks Tours</p>
          <p>Europe Adventures</p>
        </section>
        <section className="footer-column">
          <h6>About Us</h6>
          <p>Our Trips</p>
          <p>Why Travel With Us?</p>
          <p>Guides & Staff</p>
          <p>Letter from the President</p>
          <p>Quality & Value Guarantee</p>
          <p>Sustainability & Conservation</p>
          <p>Natural Habitat Philanthropy</p>
          <p>Natural Habitat Philanthropy</p>
          <p>New & Exploratory Adventures</p>
          <p>Blogs</p>
          <p>Contact Us</p>
        </section>
        <section className="footer-column">
          <h6>Travel Resources</h6>
          <p>Trip Forms</p>
          <p>Nat Hab Gear Store</p>
          <p>Wildlife & Nature Videos</p>
          <p>The Habitat Club</p>
          <p>Important Information</p>
          <p>Our Commitment to the Climate</p>
          <p>Webinars</p>
          <p>Privacy Policy</p>
          <p>Sitemap</p>
        </section>
      </section>
      <section className="social-icons">
        <img src={instagram} className="social-icon" id="instagram" alt="instagram logo" />
        <img src={facebook} className="social-icon" id="facebook" alt="facebook logo" />
        <img src={youtube} className="social-icon" id="youtube" alt="youtube logo" />
        <img src={twitter} className="social-icon" id="twitter" alt="twitter logo" />
        <img src={pinterest} className="social-icon" id="pinterest" alt="pinterest logo" />
      </section>
      <section className="contact-info">
        <section className="phone-numbers">
          <div className="phone-number">
            <p className="number">800-543-8917</p>
            <p>U.S. & Canada</p>
          </div>
          <div className="phone-number">
            <p className="number">303-449-3711</p>
            <p>International</p>
          </div>
        </section>
        <p>PO Box 3065 • Boulder, CO USA 8037</p>
        <p>Copyright © 2019 • Natural Habitat Adventures • Web Design by Solo Creative Co.</p>
      </section>
    </section>
  )
}

export default Footer;