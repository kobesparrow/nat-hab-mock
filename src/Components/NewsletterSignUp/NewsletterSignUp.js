import React from 'react';

const NewsletterSignUp = () => {

  return (
    <section>
      <h5>Get Weekly Updates</h5>
      <p>Our weekly eNewsletter highlights new adventures, exclusive offers, webinars, nature news, travel ideas, photography tips and more.</p>
      <form>
        <p>Email</p>
        <input
          type="text"
          name="email"
        />
        <button>NEXT</button>  
      </form>
      <p>Privacy Policy</p>
    </section>
  )
}

export default NewsletterSignUp;