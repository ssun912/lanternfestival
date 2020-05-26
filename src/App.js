import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import FestivalInfo from './components/festival_info/FestivalInfo';
import Highlights from './components/highlights/Highlights';
import Pricing from './components/pricing/Pricing';
import Location from './components/location/Location';
import Footer from './components/header_footer/Footer';

function App() {
  const date = 'Nov 20, 2020';
  const time = '8:00 pm';
  const location = "Snug Harbor Cultural Center & Botanical Garden. 1000 Richmond Terrace, Staten Island, NY 10301";
  return (
    <div className="App" style={{height:"1500px"}}>
      
      <Header />

      <Element name="featured">
        <Featured deadline={date}/>
      </Element>

      <Element name="festivalinfo">
        <FestivalInfo date={date} time={time} location={location}/>
      </Element>

      <Element name="highlights">
        <Highlights date={date}/>
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
