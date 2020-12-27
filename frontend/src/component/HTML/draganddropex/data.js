import React from 'react'
import './vv.css';

import DragNDrop from './DragNDrop'


const data = [
    {title: 'Drag',
     items: 
     [ '<head>',
      '<title>Page Title</title>', '</head>','<body>',
       '<h1>This is a Heading</h1>', '<span>This is a paragraph.</span>',
        '</body>', '<!DOCTYPE html>', '<html>', '</html>' 
      ]
    },
    {title: 'Drop here', items:  []}
  ]
  

function Data() {
  return (
    <div className="defaultData"> 
      <header className="defaultData-header"> 
      <DragNDrop data = {data}/>
      </header>
    </div>
  )
}

export default Data


