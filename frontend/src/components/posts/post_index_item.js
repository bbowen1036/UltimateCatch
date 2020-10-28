import React from 'react';
import { faComment } from "@fortawesome/free-solid-svg-icons";
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
                    <h3>{this.props.text}</h3>
                    <FontAwesomeIcon icon={faComment}/>
                </div>
            </div>
        )
    }
}

export default PostIndexItem;