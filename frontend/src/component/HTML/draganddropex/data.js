import React from 'react'
import './vv.css';

import DragNDrop from './DragNDrop'


const data = [
    {title: 'Drag',
     items: 
     [ '<head>',
      '<title>Page Title</title>', '</head>','<body>',
       '<h1>This is a Heading</h1>', '<p>This is a paragraph.</p>',
        '</body>', 
      ]
    },
    {title: 'Drop here', items:  ['<!DOCTYPE html>', '<html>', '</html>' ]}
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


