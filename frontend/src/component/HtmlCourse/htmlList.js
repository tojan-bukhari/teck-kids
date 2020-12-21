import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './htmlData';
import './htmlList.css';

import axios from 'axios';

/********************************************************/
function HtmlList() {
  // false means it's not showing
  const [ sidebar, setSidebar   ] = useState(false);
  const [id , setId ] = useState();
  const showSidebar = () => setSidebar(!sidebar);
  
  
  const getLesson = async() => {
  
    console.log("lesson id ="+id)
    try {
    const  lesson = await axios.get("http://localhost:8000/course/html/"+id)
     console.log(lesson)
     
    } catch (error) {
      alert(error)
    }
  };

  return (
    <>
      
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars' onClick={showSidebar}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={(event)=>{setId(event.currentTarget.dataset.id)}} data-id={item.id} >
                  <Link to={item.path} >
                    
                    <span onClick={getLesson}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="courseBox">
          <h1>hoooooolllllaaaaaa</h1>
        </div>  
                 
      
    </>
  );
}

export default HtmlList;
