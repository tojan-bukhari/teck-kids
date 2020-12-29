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

 const rightData = [
  {title: 'Drag',
   items: 
   [ ]
  },
  {title: 'Drop here', items:  [ 'p {',
  ' color: red;', 'text-align: center;','}']}
]
  
//

function Data() {

  var locals =  localStorage.getItem('List')
  console.log({locals}, 8800) 
  // var mydata = JSON.stringify(rightData[1])
  // console.log({locals})//
  console.log(JSON.stringify(locals[11]), "hhhhhhhhhhhh")
// console.log(rightData[1].items, "mesh hayyy")
            if(JSON.stringify(rightData[1].items) === JSON.stringify(locals[0].items)){
             console.log(true)
            //  if( '[{"title":"Drag","items":[]},{"title":"Drop here",…"p {","text-align: center;"," color: red;","}"]}]' === {locals}){
              // console.log(JSON.stringify(rightData[1]),"               compare                   " ,  locals.items)
              // window.location("/")
          //  }
 
          }//





  return (
    <div className="defaultData"> 
      <header className="defaultData-header"> 
      <DragNDrop data = {data}/>
      </header>
    </div>
  )
}

export default Data


// function Data() {
  
//   var locals =  localStorage.getItem('List')
//   console.log({locals}, 8800) 
//   var mydata = JSON.stringify(rightData[1])
//   console.log(locals)
  
// console.log(rightData[1].items, "mesh hayyy")
//             if(JSON.stringify(rightData[1].items) === JSON.stringify({locals})){
//              console.log(JSON.stringify(rightData[1]),"               compare                   " ,  locals.items)
//           }

//   return (
//     <div className="defaultData"> 
//       <header className="defaultData-header"> 
//       <DragNDrop data = {data}/>
//       </header>
//     </div>
//   )
// }

// export default Data



