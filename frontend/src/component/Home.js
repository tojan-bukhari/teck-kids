import React from 'react';
import FooterPage from './footer';

import ControlledCarousel from './carusal';
import Cards from "./cards/Cards";


export default function Home() {

  return (
    <div className='home'>
     <ControlledCarousel />
     <Cards/>
     <FooterPage/>
   </div>

  )}
  

