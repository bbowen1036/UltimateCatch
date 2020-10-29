import React from 'react';
import { withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';
import './post_index.css';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  onLike = id => {
    const newLike = this.props.userId;

    this.props.heartPost(id, newLike)
    setTimeout(() => {
      this.props.fetchPosts()
    }, 300)
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(newState) {
    this.setState({ posts: newState.posts });
  }

  render() {
    if (this.state.posts.length === 0) {
      return (<div>There are no Posts</div>)
    } else {
      return (
          <div className="posts-idx-container">
            {this.state.posts.map(post => (
              <PostIndexItem key={post.id} post={post} onLike={this.onLike} fetchPost={this.props.fetchPost} heartPost={this.props.heartPost} />
            ))}
          </div>
      );
    }
  }
}

export default withRouter(PostIndex);