import React from 'react';
import FooterPage from './footer';

import ControlledCarousel from './carusal';
import Cards from "./cards/Cards";
import Score from "./score";


export default function Home() {

  return (
    <div className='home'>
      <Score />
      <ControlledCarousel />
    
<Cards/>

<FooterPage/>



    </div>
  );
}

