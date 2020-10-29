import { connect } from 'react-redux';
import { fetchPosts, heartPost, fetchPost, unheartPost } from '../../actions/post_actions';
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
    heartPost: post => dispatch(heartPost(post)),
    unheartPost: post => dispatch(unheartPost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);