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
              <PostIndexItem key={post.id} text={post.text} />
            ))}
          </div>
      );
    }
  }
}

export default withRouter(PostIndex);