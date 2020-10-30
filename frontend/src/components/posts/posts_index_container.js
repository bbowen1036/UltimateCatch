import { connect } from 'react-redux';
import { fetchPosts, heartPost, fetchPost, unheartPost, leaveComment, fetchPostsByRegion } from '../../actions/post_actions';
import PostsIndex from './posts_index';
import post_index_item from './post_index_item';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts.all),
    userId: state.session.user.id,
    user: state.session.user,
    regionId: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    heartPost: post => dispatch(heartPost(post)),
    unheartPost: post => dispatch(unheartPost(post)),
    leaveComment: (postId, commentData) => dispatch(leaveComment(postId, commentData)),
    fetchPostsByRegion: (regionId) => dispatch(fetchPostsByRegion(regionId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);