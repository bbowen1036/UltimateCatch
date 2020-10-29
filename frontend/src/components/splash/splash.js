import React from "react";


class SplashPage extends React.Component {
  componentDidMount() {
    const cover = document.getElementById('cover')
    cover.classList.add("fadeOut")
    window.setTimeout(() => {
      cover.classList.add("remove")
    }, 1300)
  }

  render() {
    return (
      <div className="splash-main">
        <div id="cover"><img src="https://ultimatecatch-seed.s3-us-west-1.amazonaws.com/CFE21396-99B2-A287-922D990B448989A2.jpeg" /></div>
          <h2>Ultimate Catch</h2>
            <div className="splash-page-intro">
              <p>Your personal fishing guide.</p>
            </div>
      </div>

    );
  }
}


export default SplashPage;
