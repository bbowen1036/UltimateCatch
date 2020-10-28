import React from 'react';
import { withRouter } from 'react-router-dom';
import './signup_form.css'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="form-container">
        <h3 className="signup-title">Register</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <br/>
              <label className="signup-email">Email</label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                className="email"
              />
            <br/>
            <label className="signup-handle">Handle</label>
              <input type="text"
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="Handle"
                className="handle"
              />
            <br/>
              <label className="signup-password">Password</label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="password1"
              />
            <br/>
            <label className="signup-password2">Confirm Password</label>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
                className="password2"
              />
            <br/>
            <input className="submit" type="submit" value="Sign Up" />
            
          </div>
        </form>
        <div className='form-errors'>{this.renderErrors()}</div>
      </div>
    );
  }
}

export default withRouter(SignupForm);