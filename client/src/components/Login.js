import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios.post("http://localhost:5001/api/login", this.state.credentials)
    .then(res=> {
      window.localStorage.setItem("token", JSON.stringify(res.data.token)); 
      this.props.history.push("/protected"); 
    })
    .catch(err => console.error(err.message)); 
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button onClick={(e)=> this.login(e)}>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;