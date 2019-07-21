import React from 'react';
import outsideLogo from '../../utils/images/logo-outside.png';
import outsideBadge from '../../utils/images/logo-outside-badge.png';
import natGeo from '../../utils/images/logo-nat-geo-traveler.png';
import accoladesSplash from '../../utils/images/accolades-splash.jpg';

const Accolades = () => {
  
  return (
    <section className="accolades">
      <h4>We're Proud of the Reputation We've Earned</h4>
      <section className="accolades-info">
        <article className="individual-accolade">
          <img src={outsideLogo} alt="outside-magazine-logo" />
          <p>Voted <span className="bold-accolade">"World's Best Travel Company" </span>by Outside Magazine</p>
        </article>  
        <article className="individual-accolade">
          <img src={outsideBadge} id="outside-badge" alt="outside-magazine-badge" />
          <p>Natural Habitate Adventures Ranked <span className="bold-accolade">"Best Outfitter"</span></p>
        </article>  
        <article className="individual-accolade">
          <img src={natGeo} alt="national-geographic-traveler-logo" />
          <p>Voted <span className="bold-accolade">"Best Winter Trip" </span>Natural Habitat Adventures' Monarch Butterfly Migration, Mexico</p>
        </article>
      </section>
      <p id="learn-more-link">VIEW MORE AWARDS</p>
      <img src={accoladesSplash} id="accolades-splash" alt="travelers and guide looking through viewfinder" />
    </section>
  )
}

export default Accolades;