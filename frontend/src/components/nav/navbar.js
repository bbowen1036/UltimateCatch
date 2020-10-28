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
              <li><Link to={'/posts'}>All Posts</Link></li>
              <li><Link to={'/profile'}>Profile</Link></li>
              <li><Link to={'/posts/new'}>Write a Post</Link></li> 
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
          
          <span href="javascript:void(0);" className="navbar-toggle" id="js-navbar-toggle" >
            <i className="fa fa-bars"></i>
          </span>
          {/* <a href="#" className="logo">logo</a> */}
          <img className="logo-img" src="https://ultimatecatch-seed.s3-us-west-1.amazonaws.com/logo_size_invert.jpg"></img>
          <ul className="main-nav" id="js-menu">
            <li>
              <Link to={'/'} class="nav-links">Home</Link>
            </li>       

            { this.getLinks() }
          </ul>
          
        </div>
      );
  }

  
}

export default NavBar;