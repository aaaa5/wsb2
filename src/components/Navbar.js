import React, { Children } from 'react'
import { Link, graphql } from 'gatsby'
import logo from '../img/logo.svg'

const NavbarItem = props => (
  <Link className="navbar-item is-capitalized" to={props.page}>
    {props.pagename}
  </Link>
)
const NavbarBurger = props => (
  <div id="icon2"
    onClick={props.toggleMenu}
    className={`navbar-burger burger ${props.active ? 'open' : ''}`}
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
)




export default class Navbar extends React.Component {
  state = {
    activeMenu: false,
  }
  
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    })
  }

  render(){
      return(
        <nav className="navbar is-transparent">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <figure className="image">
                  <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
                </figure>
              </Link>
            </div>
            <div className="navbar-start">
             
            </div>         
          </div>
        </nav>
        )
      }
}

    


