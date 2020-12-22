import React from 'react'
import './vv.css';


const data = [
    {title: 'group 1',
     items: 
     [ '<head>',
      '<title>Page Title</title>', '</head>','<body>',
       '<h1>This is a Heading</h1>', '<p>This is a paragraph.</p>',
        '</body>', 
      ]
    },
    {title: 'group 2', items:  ['<!DOCTYPE html>', '<html>', '</html>' ]}
  ]
  

function Data() {
  return (
    <div className="defaultData">
      
      <header className="defaultData-header"> 
      <div className="drag-n-drop">
      {data.map((grp, grpI) =>( 
         <div key={grp.title} className="dnd-group">
            {grp.items.map((item, itemI) => (
              <div draggable key = {item}  className="dnd-item">
            {item}
                </div>
            ))}
          
         </div>
      ))}
       

</div>
      
      {/* <div className="drag-n-drop">
      <div className="dnd-group">
      <div className="group-title">Group 1</div>
      <div  className="dnd-item">
        <div>
        <p>&#60;!DOCTYPE html&#62;</p>
        </div>

      </div>
      <div  className="dnd-item">
        <div>
        <p>ITEM </p>
        </div>

      </div>
      <div  className="dnd-item">
        <div>
        <p>ITEM </p>
        </div>

      </div>


      </div>

      <div className="dnd-group">
      <div className="group-title">Group 2</div>
      <div  className="dnd-item">
        <div>
        <p>ITEM </p>
        </div>

      </div>
      <div  className="dnd-item">
        <div>
        <p>ITEM </p>
        </div>

      </div>

      

      </div>



      </div> */}
      </header>
    </div>
  )
}

export default Data




// import React, {useEffect, useState} from 'react';
// import './vv.css';

// import DragNDrop from './DragNDrop'

// const defaultData = [
//   {title: 'group 1', items: ['1', '2', '3']},
//   {title: 'group 2', items: ['4', '5']}
// ]

// function Data() {
//   const [data, setData] = useState();  
//   useEffect(() => {
//     if (localStorage.getItem('List')) {
//       console.log(localStorage.getItem('List'))
//       setData(JSON.parse(localStorage.getItem('List')))
//     } else {
//       setData(defaultData)
//     }
//   }, [setData])
//   return (
//     <div className="defaultData">
//       <header className="defaultData-header">
//       <DragNDrop data={data} />
//       {/* <div className="drag-n-drop">
//         {data.map((grp, grpI) => (
//           <div key={grp.title} className="dnd-group">
//             {grp.items.map((item, itemI) => (
//               <div draggable key={item} className="dnd-item">
//                 {item}
//               </div>
//             ))}able
//           </div>
//         ))}
//         </div> */}

//           {/* <div className="drag-n-drop">
//             <div className="dnd-group">
//               <div className="group-title">Group 1</div>
//               <div className="dnd-item">
//                 <div>
//                   <p>ITEM 1</p>
//                 </div>
//               </div>
//               <div className="dnd-item">
//                 <div>
//                   <p>ITEM 2</p>
//                 </div>
//               </div>
//               <div className="dnd-item">
//                 <div>
//                   <p>ITEM 3</p>
//                 </div>
//               </div>
//             </div>
//             <div className="dnd-group">
//             <div className="group-title">Group 1</div>
//               <div className="dnd-item">
//                 <div>
//                   <p>ITEM 1</p>
//                 </div>
//               </div>
//               <div className="dnd-item">
//                 <div>
//                   <p>ITEM 2</p>
//                 </div>
//               </div>
//             </div>
//           </div> */}
//       </header>
//     </div>
//   );
// }

// export default Data;