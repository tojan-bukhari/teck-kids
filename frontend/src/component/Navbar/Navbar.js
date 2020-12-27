import React, { Component } from 'react';
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom';
// import logo from './logo.png';
import './Navbar.css';

export class NavBar extends Component {

  state = { clicked: false }

  handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
  }
  render() {
  
    return(
      <nav className="NavbarItems1">
          <h1 className="navbar-logo1"><Link to='/'>Teck kid</Link><span className="fab fa-react"></span></h1>
          <div className="menu-icon1" onClick={this.handleClick}>
              <span className={this.state.clicked ? 'fas fa-times' : 'fas fa-hamburger'}></span>
          </div>
          <ul className={this.state.clicked ? 'nav-menu1 active' : 'nav-menu1'}>
              {MenuItems.map((item, index) => {
                  
                  return (
                      
                      <li key={index}>
                          <Link className={item.cName} to={item.url}>
                              
                          {item.title}
                          </Link>
                       </li>
                  )
              })}
          </ul>
         
      </nav>
  )
  }
}

export default NavBar