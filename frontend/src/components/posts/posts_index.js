import React from 'react';
import { withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';
import Map from '../map/map';
import './post_index.css';
import post_index_item from './post_index_item';

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
    if (this.props.regionPosts.length !== 0){
      this.props.fetchPostsByRegion(this.props.regionPosts[0].region);
    } else {
      this.props.fetchPosts();
    }
  }

  componentWillReceiveProps(newState) {
    if (this.props.regionPosts.length === 0){
      this.setState({ posts: newState.posts });
    } else {
      this.setState({ posts: newState.regionPosts });
    }
  }

  render() {
    let mapping = this.props.regionPosts.length === 0 ?
      (<div className="posts-idx-container">
      {this.props.regionPosts.map(post => (
        <PostIndexItem key={post.id} user={this.props.user} onComment={this.onComment} userId={this.props.userId} post={post} onUnlike={this.onUnlike} onLike={this.onLike} fetchPost={this.props.fetchPost} heartPost={this.props.heartPost} />
      ))}
    </div>)
    :
    ( <div className="posts-idx-container">
    {this.state.posts.map(post => (
      <PostIndexItem key={post.id} user={this.props.user} onComment={this.onComment} userId={this.props.userId} post={post} onUnlike={this.onUnlike} onLike={this.onLike} fetchPost={this.props.fetchPost} heartPost={this.props.heartPost} />
    ))}
  </div>)

    if (this.state.posts.length === 0) {
      return (<div>There are no Posts</div>)
    } else {
      return (
          <div className="main-content">
            <p>{console.log(this.state)}</p>
            <div className="map-container">
              <div className="sticky-map-container"> <Map posts={this.state.posts} fetchPosts={this.props.fetchPosts} handleRegionChange={this.handleRegionChange} /> </div>
            </div>
            <div className="posts-idx-main-container">
              <div className="posts-idx-main" >
              {mapping}
              </div>
            </div>
          </div>          
      )} 
    }
  }


export default withRouter(PostIndex);