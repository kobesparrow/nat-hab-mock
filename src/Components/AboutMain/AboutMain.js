import React from 'react';
import natHabIcon from '../../utils/images/logo-nha.png';
import wwfIcon from '../../utils/images/logo-wwf.png';

const AboutMain = () => {
  
  return (
    <section className="about-main">
      <section className="about-info">
        <div className="about-column">
          <img src={natHabIcon} className="nat-hab-logo-about" alt="Natural Habitat Adventures icon" />
          <h6>YOUR NATURE & ADVENTURE TRAVEL EXPERTS</h6>
          <p>Since 1985, Natural Habitat Adventures has delivered life-enhancing nature and wildlife experiences to small groups of travelers passionate about the natural world. Our unique itineraries are meticulously designed to offer intimate encounters with nature in our planet’s most riveting wild destinations, while setting the industry standard for sustainable practice. We combine an innovative approach to travel with personal attention to every detail, creating opportunities for adventure and discovery that transform lives. Our guests come home more connected, inspired and exhilarated to be alive.</p>
          <p id="learn-more-link">LEARN MORE</p>
        </div>
        <div className="about-column">
        <img src={wwfIcon} className="wwf-logo-about" alt="WWF icon" />
          <h6>OUR INNOVATIVE PARTNERSHIP WITH WWF</h6>
          <p>When you travel with Natural Habitat Adventures and World Wildlife Fund, you join us as a force for change in addressing the most pressing conservation challenges around the world. Together, we’ve pioneered conservation travel—sustainable travel that supports the protection of nature and wildlife. Since 2003, Natural Habitat Adventures has partnered with WWF, the world’s leading environmental organization, to promote this mission. Natural Habitat Adventures and our travelers have given more than $10 million to WWF’s global efforts to protect some of the most precious and imperiled places on the planet.</p>
          <p id="learn-more-link">LEARN MORE</p>
        </div>
      </section>
    </section>
  )
}

export default AboutMain;