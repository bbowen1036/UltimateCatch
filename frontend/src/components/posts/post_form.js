import React from 'react';

class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: ""
        }
        this.updateField = this.updateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateField(field){
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.composePost(this.state)
            .then(() => this.props.history.push("/"))
    }

    render(){
        return(
            <div>
                <h2>Make a post</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.updateField("text")} placeholder="Check out this catch!"/>
                    <button type="submit">Create</button>
                </form>
            </div>
        )
    }
}

export default PostForm;