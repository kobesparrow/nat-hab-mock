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
          <p>Specialized Photography Tours</p><br />
          <p>Family Adventures</p><br />
          <p>Adventure Cruising</p><br />
          <p>Bear Viewing</p><br />
          <p>Whale Watching</p><br />
          <p>Rain Forest Tours</p><br />
          <p>Nat Hab's Active Expeditions</p><br />
          <p>Hiking & Trekking Adventures</p><br />
          <p>Kayaking Adventures</p><br />
          <p>Custom African Safari Planner</p><br />
        </section>
        <section className="footer-column">
          <h6>Regions</h6>
          <p>Churchill Polar Bear Tours</p><br />
          <p>Galapagos Cruises & Tours</p><br />
          <p>African Safaris</p><br />
          <p>Alaska & Northern Adventures</p><br />
          <p>Antarctica & Arctic Voyages</p><br />
          <p>Asia & Pacific Adventures</p><br />
          <p>Mexico & Central America Tours</p><br />
          <p>South America Adventures</p><br />
          <p>U.S. National Parks Tours</p><br />
          <p>Europe Adventures</p><br />
        </section>
        <section className="footer-column">
          <h6>About Us</h6>
          <p>Our Trips</p><br />
          <p>Why Travel With Us?</p><br />
          <p>Guides & Staff</p><br />
          <p>Letter from the President</p><br />
          <p>Quality & Value Guarantee</p><br />
          <p>Sustainability & Conservation</p><br />
          <p>Natural Habitat Philanthropy</p><br />
          <p>New & Exploratory Adventures</p><br />
          <p>Blogs</p><br />
          <p>Contact Us</p><br />
        </section>
        <section className="footer-column">
          <h6>Travel Resources</h6>
          <p>Trip Forms</p><br />
          <p>Nat Hab Gear Store</p><br />
          <p>Wildlife & Nature Videos</p><br />
          <p>The Habitat Club</p><br />
          <p>Important Information</p><br />
          <p>Our Commitment to the Climate</p><br />
          <p>Webinars</p><br />
          <p>Privacy Policy</p><br />
          <p>Sitemap</p><br />
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