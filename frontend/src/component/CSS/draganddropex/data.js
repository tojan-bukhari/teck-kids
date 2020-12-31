import React from 'react'
import './vv.css';
import DragNDrop from './DragNDrop'


var data = [
    {title: 'Drag',
     items: 
     [ 'p {',
      ' color: red;', 'text-align: center;','}'
      ]
    },
    {title: 'Drop here', items:  [ ]}
  ]

 var rightData = [
  {title: 'Drag',
   items: 
   [ ]
  },
  {title: 'Drop here', items:  [ 'p {',
  ' color: red;', 'text-align: center;','}']}
]
  
console.log(rightData);
function Data() {
  
  // var locals =  localStorage.getItem('List')
  // console.log(locals)

  return (
    <div className="defaultData"> 
      <header className="defaultData-header"> 
      <DragNDrop data = {data} rightData={rightData}/>
      </header>
    </div>
  )
}

export default Data


