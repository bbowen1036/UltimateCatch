import React from 'react';
import PostsIndexContainer from '../posts/posts_index_container';
import MapContainer from '../map/map_container';
import { fetchPostsByRegion } from '../../actions/post_actions';
import './main.css';

class MainPage extends React.Component {
  // componentWillReceiveProps(newState) {
  //   
  // }

  render() {

    return (
      <div className="main">


        {/* <div className="main-content">
          <div className="map-container">
            <div className="sticky-map-container"> <MapContainer handleRegionChange={this.handleRegionChange} /> </div>
          </div>
          <div className="posts-idx-main-container">
            <div className="posts-idx-main" ><PostsIndexContainer /></div>
          </div>
        </div> */}
        <PostsIndexContainer />
        <footer>
          Copyright &copy; 2020
        </footer>
      </div>
    );
  }
}

export default MainPage;