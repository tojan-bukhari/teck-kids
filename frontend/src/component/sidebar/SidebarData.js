import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'lessons',
    path: '/lessons',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'exercises',
    path: '/exercises',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  { 
    title: 'ex9',
    path: '/ex9',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  }
  
];