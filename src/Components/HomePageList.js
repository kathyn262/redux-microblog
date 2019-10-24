import React from "react";
import { Link } from "react-router-dom"

class HomePageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getPostsFromApi()

  }

  render() {
    const { posts } = this.props
    let postArray = []
    for (let postId in posts) {
      postArray.push(
        <div className='card w-50' key={postId}>
          <div className='card-body'>
            <h5 className='card-title'>
              <Link to={`/${posts[postId].id}`}>{posts[postId].title}</Link>
            </h5>
            <p className='card-text'>{posts[postId].description}</p>
          </div>
          <div className="card-footer">
            {posts[postId].votes} votes
            <i class="fas fa-thumbs-up" style={{color: 'green', marginLeft: '10px'}}></i>
            <i class="fas fa-thumbs-down" style={{color: 'red', marginLeft: '10px'}}></i>
          </div>
        </div>
      );
    };


    return (
      <React.Fragment>
        <h5>
          Welcome to Microblog, our innovative site for communicating on the
          information superhighway
        </h5>
        <div className='row'>{postArray}</div>
      </React.Fragment>
    );
  }
}

export default HomePageList;
