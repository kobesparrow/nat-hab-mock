import React from 'react';

const NewsletterSignUp = () => {

  return (
    <section className="newsletter-signup">
      <section className="newsletter-content">
        <section className="newsletter-intro">
          <h5>Get Weekly Updates</h5>
          <p>Our weekly eNewsletter highlights new adventures, exclusive offers, webinars, nature news, travel ideas, photography tips and more.</p>
        </section>
        <form className="newsletter-form">
          <div>
            <p>Email</p>
            <input
              type="text"
              name="email"
            />
          </div>
          <button>NEXT</button>  
          <p className="privacy-policy">Privacy<br /> Policy</p>
        </form>
      </section>
    </section>
  )
}

export default NewsletterSignUp;