import React from 'react';

const TripSelector = () => {

  return (
    <section>
      <form>
        <select name="By Region">
          <option value="By Region">By Region</option>
          <option value="Canada Polar Bear Tours">Canada Polar Bear Tours</option>
          <option value="African Safaris">African Safaris</option>
          <option value="Galapagos Cruises & Tours">Galapagos Cruises & Tours</option>
          <option value="Alaska & Northern Adventures">Alaska & Northern Adventures</option>
          <option value="U.S. National Parks Tours">U.S. National Parks Tours</option>
          <option value="Mexico & Central America Adventures">Mexico & Central America Adventures</option>
          <option value="South America Adventures">South America Adventures</option>
          <option value="Asia & Pacific Adventures">Asia & Pacific Adventures</option>
          <option value="Europe Adventures">Europe Adventures</option>
          <option value="Antarctica & Arctic">Antarctica & Arctic</option>
          <option value="Adventure Cruises">Adventure Cruises</option>
        </select>
        <select name="By Country">
          <option value="Antarctica">Antarctica</option>
          <option value="Argentina">Argentina</option>
          <option value="Australia">Australia</option>
          <option value="Belize">Belize</option>
          <option value="Bhutan">Bhutan</option>
          <option value="Borneo">Borneo</option>
          <option value="Botswana">Botswana</option>
          <option value="Brazil">Brazil</option>
          <option value="Canada">Canada</option>
          <option value="Chile">Chile</option>
          <option value="China">China</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="Croatia">Croatia</option>
          <option value="Cuba">Cuba</option>
          <option value="Easter Island">Easter Island</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Falkland Islands">Falkland Islands</option>
          <option value="French Polynesia">French Polynesia</option>
          <option value="Greenland">Greenland</option>
          <option value="Guatemala">Guatemala</option>
          <option value="High Arctic">High Arctic</option>
          <option value="Iceland">Iceland</option>
          <option value="India">India</option>
          <option value="Kenya">Kenya</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Uganda">Uganda</option>
          <option value="United States">United States</option>
          <option value="Zambia">Zambia</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </select>
        <select name="By Wildlife">
          <option value="By Wildlife">By Wildlife</option>
          <option value="African Safari Wildlife">African Safari Wildlife</option>
          <option value="Bears">Bears</option>
          <option value="Big Cats">Big Cats</option>
          <option value="Birds & Butterflies">Birds & Butterflies</option>
          <option value="Primates">Primates</option>
          <option value="Whales & Marine Wildlife">Whales & Marine Wildlife</option>
        </select>
        <select name="By Interest">
          <option value="By Interest">By Interest</option>
          <option value="Active Edpeditions">Active Edpeditions</option>
          <option value="Adventure Cruises">Adventure Cruises</option>
          <option value="African Safaris">African Safaris</option>
          <option value="Cultural Immersions">Cultural Immersions</option>
          <option value="Easier Adventures">Easier Adventures</option>
          <option value="Family Adventures">Family Adventures</option>
          <option value="Great Migrations">Great Migrations</option>
          <option value="Hiking & Trekking Adventures">Hiking & Trekking Adventures</option>
          <option value="Photography Tours">Photography Tours</option>
          <option value="Private Custom Adventures">Private Custom Adventures</option>
          <option value="Rain Forest Tours">Rain Forest Tours</option>
          <option value="Sailing Adventures">Sailing Adventures</option>
          <option value="Snorkeling Adventures">Snorkeling Adventures</option>
        </select>
        <button>SEARCH</button>
      </form>
    </section>
  )
}

export default TripSelector;
