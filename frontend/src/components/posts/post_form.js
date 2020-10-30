import React from 'react';
import './post_form.css';

class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "",
            picture: ""
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
            .then(() => this.props.history.push("/posts"))
    }

    render(){
        return(
            <div className="post-form-container">
                <h2>Make a post</h2>
                <form className="post-form" onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.updateField("text")} placeholder="Check out this catch!"/>
                    <input type="text" onChange={this.updateField("picture")} placeholder="Picture URL"/>
                    <button type="submit">Create</button>
                </form>
            </div>
        )
    }
}

export default PostForm;