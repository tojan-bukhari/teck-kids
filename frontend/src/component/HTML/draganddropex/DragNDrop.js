
import React, {useState, useRef} from 'react'
import { Button, Modal} from 'react-bootstrap';
import { useHistory } from "react-router-dom";


function DragNDrop({data, rightData}) {
  const history = useHistory();

    const [list, setList] = useState(data); 
    const [dragging, setDragging] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    const dragItem = useRef();
        const dragItemNode = useRef();
        
    const handletDragStart = (e, params) => {
                console.log('dragging', params)
                dragItem.current = params;
                // console.log(current)
                dragItemNode.current = e.target;
                dragItemNode.current.addEventListener('dragend', handleDragEnd)
        
                setTimeout(() => {
                    setDragging(true); 
                },0)
                    
                }    

                const handleDragEnter = (e, params) => {
                            console.log('Entering a drag target', params)
                            if (dragItemNode.current !== e.target) {
                                console.log('Target is NOT the same as dragged item')
                                setList(oldList => {
                                    // grab deep coby of the object
                                    let newList = JSON.parse(JSON.stringify(oldList))
                                    console.log(newList)
                                    newList[params.grpI].items.splice(params.itemI, 0, newList[dragItem.current.grpI].items.splice(dragItem.current.itemI,1)[0])
                                    dragItem.current = params;
                                    localStorage.setItem('List', JSON.stringify(newList));
                                    return newList;
                                })
                            }
                        }



                const handleDragEnd = (e) => {
                    console.log("ending drag...")
                            setDragging(false);
                            dragItem.current = null;
                            dragItemNode.current.removeEventListener('dragend', handleDragEnd)
                            dragItemNode.current = null;
                        }

                
                const getStyles = (params) => {
                    const currentItem =  dragItem.current;
                if (currentItem.grpI === params.grpI && currentItem.itemI === params.itemI) {
                    return ' dnd-item current'
                            }
                            return "dnd-item"
                        }


                        const handleClick= ()=> {
                          const locals =  localStorage.getItem('List')
                          const localData =  JSON.parse(locals)[1].items 
                         const mydata = rightData[1].items
                     
                            for (var i = 0; i < localData.length; i++) {
                              for (var j = 0; j < mydata.length; j++) {
                                  if (localData[i] === mydata[j] && localData.length> 1) {
                                    console.log(mydata, "MY DATA") 
                              console.log(localData, "LOCAL'S STORAGEDATA")
                              
                              return alert("greate job");
                                   
                                  }else return alert('try again')
                              }
                          }
    
                 
                            }



    return (
        <div className="drag-n-drop">
        {list.map((grp, grpI) =>( 
           <div key={grp.title}
            className="dnd-group"
            onDragEnter={dragging && !grp.items.length?(e) => handleDragEnter(e,{grpI, itemI: 0}):null}
            
            >
             <div className="group-title">{grp.title}</div>
              {grp.items.map((item, itemI) => (
                <div draggable   
                 onDragStart={(e) => {handletDragStart(e, {grpI, itemI})} }
                 onDragEnter={dragging?(e) => {handleDragEnter(e, {grpI, itemI})}:null} 
                      key = {item} 
                       className={dragging?getStyles({grpI, itemI}):"dnd-item"}
                       
                       >
              {item}
                  </div>
              ))}
           </div>
        ))}    
          <div>
        <Button variant="primary" onClick={handleShow}>
SUBMIT      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Woohoo!!!!</Modal.Title>
        </Modal.Header>
        
        <img src= "https://www.flaticon.com/svg/static/icons/svg/3159/3159066.svg"/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClick}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{history.push('/ex4HTML')}}> 
Go to the Next exersise          </Button>
        </Modal.Footer>
      </Modal>

        </div>

  
  </div>
  
    )
}

export default DragNDrop




