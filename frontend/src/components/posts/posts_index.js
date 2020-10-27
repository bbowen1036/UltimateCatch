import React from 'react';
import PostIndexItem from './post_index_item';

class PostsIndex extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            posts: []
        }
    }

    componentWillMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(newState) {
        this.setState({ posts: newState.posts });
    }

    render(){
        return(
            <div>
                <h3>Posts</h3>
                {this.state.posts.map(post => {
                    <PostIndexItem key={post.id} text={post.text} />
                })}
            </div>
        )
    }
}

export default PostsIndex;