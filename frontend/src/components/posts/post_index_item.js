import React from 'react';

class PostIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <h3>{this.props.text}</h3>
        )
    }
}

export default PostIndexItem;