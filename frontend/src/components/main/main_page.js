import React from 'react';
import PostsIndexContainer from '../posts/posts_index_container';
import MapContainer from '../map/map_container';
import './main.css';

class MainPage extends React.Component {

  render() {
    return (
      <div className="main">


        <div className="main-content">
          <div className="map-container">
            <div className="sticky-map-container"> <MapContainer /> </div>
          </div>
          <div className="posts-idx-main-container">
            <div className="posts-idx-main" ><PostsIndexContainer /></div>
          </div>
        </div>
        
        <footer>
          Copyright &copy; 2020
        </footer>
      </div>
    );
  }
}

export default MainPage;