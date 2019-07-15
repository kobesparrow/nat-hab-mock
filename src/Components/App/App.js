import React from 'react';
import NavBar from '../NavBar/NavBar';
import Splash from '../Splash/Splash';
import TripSelector from '../TripSelector/TripSelector';
import FeaturedTrips from '../FeaturedTrips/FeaturedTrips';
import RegionalTrips from '../RegionalTrips/RegionalTrips';
import AboutMain from '../AboutMain/AboutMain';
import VideoMain from '../VideoMain/VideoMain';
import NewsletterSignUp from '../NewsletterSignUp/NewsletterSignUp';
import Accolades from '../Accolades/Accolades';
import Footer from '../Footer/Footer';
import StickyFooter from '../StickyFooter/StickyFooter';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Splash />
      <TripSelector />
      <FeaturedTrips />
      <RegionalTrips />
      <AboutMain />
      <StickyFooter />
      <VideoMain />
      <NewsletterSignUp />
      <Accolades />
      <Footer />
    </div>
  )
}

export default App;
