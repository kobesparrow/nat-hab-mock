import React from 'react';
import catalog from '../../images/catalog-2x.jpg';
import wwfIcon from '../../images/logo-wwf.png';


const StickyFooter = () => {

  return (
    <section className="sticky-footer">
        <section className="sticky-footer-content">
        <img src={catalog} id="catalog-icon" alt="Natural Habitat Adventures catalog cover" />
        <button>GET THE CATALOG</button>
        <button>SIGN UP FOR EMAILS</button>
        {/* <div> */}
          <p>Natural Habitat & WWF — Discovering Our Planet Together</p>
          <img src={wwfIcon} id="wwf-sticky" alt="wwf logo"/>
        {/* </div> */}
      </section>
    </section>
  )
}

export default StickyFooter;