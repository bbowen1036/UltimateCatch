import React from 'react';
import './profile.css'

class Profile extends React.Component {
  constructor(props) {
    super(props);
  
}


  render() {
    return (
      <div className="about-container">
        <div className="team">
          <h1>Zach Vaillancourt</h1>
          <img src="https://ultimatecatch-seed.s3-us-west-1.amazonaws.com/Zach_Vaillancourt.jpg"></img>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo debitis eligendi numquam asperiores, voluptate deserunt, quibusdam commodi repellat harum in voluptatum temporibus delectus recusandae expedita! Eveniet quod magni voluptatem.</p>

          <div className="about-links">
            <img className="about-git" src="https://oceanstar-seed.s3-us-west-1.amazonaws.com/gitlogo.jpg" alt=""/>
            <img className="about-git" src="https://oceanstar-seed.s3-us-west-1.amazonaws.com/linkedin-logo-transparent.png" alt=""/>

          </div>
        
        </div>

        <div className="team">
          <h1>Brian Bowen</h1>
          <img src="https://ultimatecatch-seed.s3-us-west-1.amazonaws.com/brian.jpg"></img>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo debitis eligendi numquam asperiores, voluptate deserunt, quibusdam commodi repellat harum in voluptatum temporibus delectus recusandae expedita! Eveniet quod magni voluptatem.</p>

          <div className="about-links">
            <img className="about-git" src="https://oceanstar-seed.s3-us-west-1.amazonaws.com/gitlogo.jpg" alt=""/>
            <img className="about-git" src="https://oceanstar-seed.s3-us-west-1.amazonaws.com/linkedin-logo-transparent.png" alt=""/>

          </div>
        </div>

        <div className="team">
          <h1>Jonathan Jo</h1>
          <img src="https://ultimatecatch-seed.s3-us-west-1.amazonaws.com/20170818-DSC_9936+(1).jpg" alt=""/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo debitis eligendi numquam asperiores, voluptate deserunt, quibusdam commodi repellat harum in voluptatum temporibus delectus recusandae expedita! Eveniet quod magni voluptatem.</p>

          <div className="about-links">
            <img className="about-git" src="https://oceanstar-seed.s3-us-west-1.amazonaws.com/gitlogo.jpg" alt=""/>
            <img className="about-git" src="https://oceanstar-seed.s3-us-west-1.amazonaws.com/linkedin-logo-transparent.png" alt=""/>
          </div>
        </div>


      </div>
    )
  }
};

export default Profile;