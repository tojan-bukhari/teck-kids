import React from 'react'
import './vv.css';

import DragNDrop from './DragNDrop'


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

// function Ex3data() {

//   <div className='hhhh'>
//     <h1>{ data[1].items[1] }</h1>
//   </div>
 

//   return (
//     <div className="defaultData">     
//       <header className="defaultData-header"> 
//       <Dndex3 data = {data}/>
//       </header>
//     </div>
//   )
// }

// export default Ex3data

function Ex3data() {

  return (
    <div className="drag-n-drop">
      <DragNDrop data={data}/>
            {/* <div className="dnd-group">
              <div className="group-title">Group 1</div>
              <div className="dnd-item">
                <div>
                  <p>ITEM 1</p>
                </div>
              </div>
              <div className="dnd-item">
                <div>
                  <p>ITEM 2</p>
                </div>
              </div>
              <div className="dnd-item">
                <div>
                  <p>ITEM 3</p>
                </div>
              </div>
            </div>
            <div className="dnd-group">
            <div className="group-title">Group 2</div>
              <div className="dnd-item">
                <div>
                  <p>ITEM 1</p>
                </div>
              </div>
              <div className="dnd-item">
                <div>
                  <p>ITEM 2</p>
                </div>
              </div>
            </div>

            <div className="dnd-group">
            <div className="group-title"></div>
              <div className="dnd-item"></div>
            </div> */}
          </div> 

  )
}

export default Ex3data