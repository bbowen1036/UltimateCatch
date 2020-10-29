import React from 'react';
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from 'react-router-dom';

class PostIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let liked = false;
        this.props.post.likes.forEach(item => {
            if (String(item.user) === this.props.userId){
                liked = true;
            }
        });

        const heartIcon = liked ? 
            (<FontAwesomeIcon className="liked-heart" icon={faHeart} onClick={() => this.props.onUnlike(this.props.post._id)}/>)
            :
            (<FontAwesomeIcon className="heart" icon={faHeart} onClick={() => this.props.onLike(this.props.post._id)}/>);

        return(
            <div className="posts-idx-item">
                <div className="top-container">
                    <div className="post-pic-container"></div>
                    <ul className="comments"></ul>
                </div>
                <div className="post-info">
                    <div className="likes-container">
                        {heartIcon}
                        <h3 className="like-count">{this.props.post.likes.length} likes</h3>
                    </div>        
                    <div className="post-text-container">          
                        <h3 className="post-text">{this.props.post.text}</h3>
                    </div>  
                    <div className="comment-container">
                        <input type="text"/>
                        <FontAwesomeIcon className="comment-icon" icon={faComment}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(PostIndexItem);