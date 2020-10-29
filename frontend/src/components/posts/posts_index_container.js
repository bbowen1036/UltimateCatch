import { connect } from 'react-redux';
import { fetchPosts, heartPost, fetchPost } from '../../actions/post_actions';
import PostsIndex from './posts_index';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts.all),
    userId: state.session.user.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    heartPost: post => dispatch(heartPost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);