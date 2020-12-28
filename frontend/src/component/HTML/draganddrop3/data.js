import React from 'react'
import './vv.css';

import DragNDrop from './DragNDrop'


const data = [
  {title: 'Drag',
  items: 
  [ '<head>',
   '<title>Page Title</title>', '</head>','<body>',
    '<h1>This is a Heading</h1>', '<p>This is a paragraph.</p>',
     '</body>', '<!DOCTYPE html>', '<html>', '</html>' 
   ]
    },
    {title: 'Drop here', items:  [ ]}
  ]

//  const rightData = [
//   {title: 'Drag',
//    items: 
//    [ ]
//   },
//   {title: 'Drop here', items:  [ 'p {',
//   ' color: red;', 'text-align: center;','}']}
// ]
  

function Data() {
  return (
    <div className="defaultData"> 
      <header className="defaultData-header"> 
      {/* <DragNDrop data = {data}/> */} hio
      </header>
    </div>
  )
}

export default Data

