import React from 'react';
import './footer.css'


class Footer extends React.Component {
  constructor(props) {
    super(props);
  
}


  render() {
    return (
      <div className="footer-container">
        <div className="footer-left">
          <span> 
            Meet the Team
          </span>
          <span> 
            Github
          </span>
        </div>

        <div>
          Copyright &copy; Ultimate Catch
        </div>
      </div>
    )
  }
};

export default Footer;