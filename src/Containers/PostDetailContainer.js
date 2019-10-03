import PostDetail from '../Components/PostDetail';
import { connect } from 'react-redux';
import { editPost, removePost, addComment, removeComment } from '../actions';

function mapStateToProps(state, ownProps) {
  let blogId = ownProps.match.params.postid;
  let currentBlog = state.posts[blogId];
  return {
    post: currentBlog
  }
}

const mapDispatchToProps = {
    editPost, removePost, addComment, removeComment
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);