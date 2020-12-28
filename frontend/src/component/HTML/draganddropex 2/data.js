import React from 'react'
import './vv.css';

import DragNDrop from './DragNDrop'


const data = [
    {title: 'Drag',
     items: 
     [ 1,2
      ]
    },
    {title: 'Drop here', items:  [3,4 ]},
    {title: 'Drop here', items:  [5,6 ]},
    {title: 'Drop here', items:  [ 7,8]},
    {title: 'Drop here', items:  [9,10 ]},
    {title: 'Drop here', items:  [11,12 ]}

  ]

//  const rightData = [
//   {title: 'Drag',
//    items: 
//    [ ]
//   },
//   {title: 'Drop here', items:  [ 'p {',
//   ' color: red;', 'text-align: center;','}']}
// ]
  
//

function Data() {

//   var locals =  localStorage.getItem('List')
// console.log(JSON.parse(locals)[1].items, 'hpppppppppi') 
//   // console.log(locals[0], 'indexesssss') 

//   // var mydata = JSON.stringify(rightData[1])
//   console.log(rightData[1].items,'rightData')
//   // if (!data)console.log('bass')
// // console.log(rightData[1].items, "mesh hayyy") 
//      if(rightData[1].items === JSON.parse(locals)[1].items){
//       alert("passssssssssss");
//       // window.location('/')
//           }

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



