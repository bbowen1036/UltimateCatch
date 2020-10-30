import React from 'react';
import { withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';
import Map from '../map/map';
import './post_index.css';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }

    this.handleRegionChange = this.handleRegionChange.bind(this);
  }

  handleRegionChange(regionId){
    this.props.fetchPostsByRegion(regionId)
    // setTimeout(() => {
    //   this.props.fetchPosts()
    // }, 300)
  }

  onComment = (id, commentData) => {

    this.props.leaveComment(id, commentData)
    setTimeout(() => {
      this.props.fetchPosts()
    }, 300)
  }

  onLike = id => {
    const newLike = this.props.userId;

    this.props.heartPost(id, newLike)
    setTimeout(() => {
      this.props.fetchPosts()
    }, 300)
  }

  onUnlike = id => {
    const removeLike = this.props.userId;

    this.props.unheartPost(id, removeLike)
    setTimeout(() => {
      this.props.fetchPosts()
    }, 300)
  }

  componentWillMount() {
    if (this.props.posts.region){
      this.props.fetchPostsByRegion(this.props.posts.region.id);
    } else {
      this.props.fetchPosts();
    }
  }

  componentWillReceiveProps(newState) {
    this.setState({ posts: newState.posts });
  }

  render() {
    console.log(this.props)
    if (this.state.posts.length === 0) {
      return (<div>There are no Posts</div>)
    } else {
      return (
          <div className="main-content">
            <div className="map-container">
            <div className="sticky-map-container"> <Map fetchWeather={this.props.fetchWeather} regions={this.props.regions} posts={this.props.posts} fetchPosts={this.props.fetchPosts} handleRegionChange={this.handleRegionChange} fetchRegions={this.props.fetchRegions} /> </div>
            </div>
            <div className="posts-idx-main-container">
              <div className="posts-idx-main" >
                <div className="posts-idx-container">
                  {this.state.posts.map(post => (
                    <PostIndexItem key={post.id} user={this.props.user} onComment={this.onComment} userId={this.props.userId} post={post} onUnlike={this.onUnlike} onLike={this.onLike} fetchPost={this.props.fetchPost} heartPost={this.props.heartPost} />
                  ))}
                </div>
              </div>
            </div>
          </div>          
      );
    }
  }
}

export default withRouter(PostIndex);