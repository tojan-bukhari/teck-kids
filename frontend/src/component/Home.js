import React from 'react';
import Cards from "./cards/Cards"

import FooterPage from './footer';

import ControlledCarousel from './carusal';
import Score from "./score";


export default function Home() {

  return (
    <div className='home'>
     
      <ControlledCarousel />

<ControlledCarousel />
     <Cards/>
    
<Cards/>

<FooterPage/>
 <Score />
</div>

  )}
  

