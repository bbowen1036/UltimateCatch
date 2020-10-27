import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <>
              <li><Link to={'/tweets'}>All Tweets</Link></li>
              <li><Link to={'/profile'}>Profile</Link></li>
              <li><Link to={'/new_tweet'}>Write a Tweet</Link></li> 
              <button onClick={this.logoutUser}>Logout</button>
            </>
        );
      } else {
        return (          
              <> 
                <li><Link className="nav-links" to={'/signup'}>Signup</Link></li>
                <li><Link className="nav-links" to={'/login'}>Login</Link></li>
              </>     
        );
      }
  }

  

  render() {
    
    
      return (
        <div className="NavBar">
          
          <a href="javascript:void(0);" className="navbar-toggle" id="js-navbar-toggle" >
            <i className="fa fa-bars"></i>
          </a>
          <a href="#" className="logo">logo</a>
          <ul className="main-nav" id="js-menu">
            <li>
              <a href="#" class="nav-links">Home</a>
            </li>       

            { this.getLinks() }
          </ul>
        </div>
      );
  }

  
}

export default NavBar;