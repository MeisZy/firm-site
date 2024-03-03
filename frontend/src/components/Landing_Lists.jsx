//import React, {useState} from 'react';

import './Landing_Lists.css'

import Mint from '../assets/dummy_entries/mint_greens.jpg';
import Macaroni from '../assets/dummy_entries/macaroni.jpg';
import WhiteSofas from '../assets/dummy_entries/white_sofas.jpg'

function Lists() {

  const addentry_items = [
    {
      pic: Mint,
      visit_url: 'https://www.pexels.com/search/interior%20design/',
      name: '1485,	M Naval Street, Navotas,	Navotas,	Metro Manila',
      type: ['']
    },
    {
      pic: Macaroni,
      visit_url: 'https://www.aertsen.in/stunning-modern-living-room-interior-design-ideas-in-india/',
      name: '363 P. Casal St., Quiapo, Manila, 1338 Arlegui St., Quiapo, Manila, 938 Aurora Blvd.,',
      type: 'type 2'
    },
    {
      pic: WhiteSofas,
      visit_url: 'https://www.unite.ai/best-ai-interior-design-tools/',
      name: 'a text depicting this portrait bthat is on jpeg img',
      type: 'type 3'
    },
    {
      pic: WhiteSofas,
      visit_url: 'https://www.unite.ai/best-ai-interior-design-tools/',
      name: 'a text depicting this portrait bthat is on jpeg img',
      type: 'type 3'
    },
    {
      pic: WhiteSofas,
      visit_url: 'https://www.unite.ai/best-ai-interior-design-tools/',
      name: 'a text depicting this portrait bthat is on jpeg img',
      type: 'type 3'
    },
    {
      pic: WhiteSofas,
      visit_url: 'https://www.unite.ai/best-ai-interior-design-tools/',
      name: 'a text depicting this portrait bthat is on jpeg img',
      type: 'type 3'
    },
    {
      pic: WhiteSofas,
      visit_url: 'https://www.unite.ai/best-ai-interior-design-tools/',
      name: 'a text depicting this portrait bthat is on jpeg img',
      type: 'type 3'
    },
    {
      pic: WhiteSofas,
      visit_url: 'https://www.unite.ai/best-ai-interior-design-tools/',
      name: 'a text depicting this portrait bthat is on jpeg img',
      type: 'type 3'
    },

  ];

  const arrayDataItems = addentry_items.map((items) => (
    <div className='object-frame' key={items.pic}>
      <ul>
          <a href ={items.visit_url}>
             <img src={items.pic} className='object-image' alt={items.name}  />
          </a> 
        <li>
          <a href={items.visit_url} className='object-caption'>
            {items.name}
          </a>
        </li>
      </ul>
    </div>
  ));

  return (
    <>
    <div className='listwrapper'>
      <div className='arrangement'>{arrayDataItems}</div>
    </div>
      
   </>
  )
}

export default Lists;