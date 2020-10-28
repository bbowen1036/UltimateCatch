import React from 'react';
import PostsIndexContainer from '../posts/posts_index_container';
import './main.css';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Ultimate Catch</h1>

        <div className="main-content">
          <div className="sticky-map-container">a</div>
          <div className="posts-idx-main-container"><PostsIndexContainer /></div>
        </div>
        
        <footer>
          Copyright &copy; 2020
        </footer>
      </div>
    );
  }
}

export default MainPage;