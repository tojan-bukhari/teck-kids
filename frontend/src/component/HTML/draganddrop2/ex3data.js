import React from 'react'
import './ex3.css';

import Dndex3 from './dndex3'


const data = [

    {title: 'Opening Tags',
     items: 
     [ '<h1>','<p>', '<h3>']
    },
    {title: 'End Tags', items:  ['</p>', '</h1>',  '</h3>']},
    {title: 'Drop here', items:  []},
    {title: 'Drop here', items:  []},
    {title: 'Drop here', items:  []},
    {title: 'Drop here', items:  []}

  ]

function Ex3data() {

  <div className='hhhh'>
    <h1>{ data[1].items[1] }</h1>
  </div>
 

  return (
    <div className="defaultData">     
      <header className="defaultData-header"> 
      <Dndex3 data = {data}/>
      </header>
    </div>
  )
}

export default Ex3data

