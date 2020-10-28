import React from 'react';
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PostIndexItem extends React.Component{
    constructor(props){
        this.state = {
            likes: this.props.likes
        }
        this.handleLike = this.handleLike.bind(this);
    }

    handleLike(){
        return e => {
            this.setState({likes: this.state.likes.push(this.props.heartPost(this.props.post))})
        }
    }

    render(){
        return(
            <div className="posts-idx-item">
                <div className="post-pic-container"></div>
                <div className="post-info">
                    <h3>{this.props.post.text}</h3>
                    <h3>{this.state.likes.length} likes</h3>
                    <FontAwesomeIcon icon={faHeart} onClick={() => this.handleLike()}/>
                    <FontAwesomeIcon icon={faComment}/>
                </div>
            </div>
        )
    }
}

export default PostIndexItem;