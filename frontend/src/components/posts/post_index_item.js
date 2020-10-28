import React from 'react';
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PostIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="posts-idx-item">
                <div className="post-pic-container"></div>
                <div className="post-info">
                    <h3>{this.props.post.text}</h3>
                    <h3>{this.props.post.likes.length} likes</h3>
                    <FontAwesomeIcon icon={faHeart} onClick={() => this.props.heartPost(this.props.post)}/>
                    <FontAwesomeIcon icon={faComment}/>
                </div>
            </div>
        )
    }
}

export default PostIndexItem;