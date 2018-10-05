import React, { Component } from 'react';

import Data from './Data'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        githubUsername: "",
        data: null,
        user: "",
    };
}

componentDidMount() {
  fetch('https://api.github.com/users', {
    // headers: {
    //     Links: '<https://api.github.com/user/repos?page=3&per_page=100>; rel="next"'
    // }
  })
    .then(response => response.json())
    .then(data => this.setState({ data }));
}

handleSubmit = event => {
  event.preventDefault();
  let user = this.searchUsers(this.state.githubUsername)
  this.setState({ 
    githubUsername: "",
    user: user[0]
  })
}

handleUsernameChange = event => {
  this.setState({
    githubUsername: event.target.value
  })
}

searchUsers = username => {
  return this.state.data.filter(object => object.login === username);
}

  render() {
    return (
      <div className="App">
           <form onSubmit={event => this.handleSubmit(event)}>
              <h2>Enter a Github username:</h2>
              <input type="text" name="githubUsername" onChange={event => this.handleUsernameChange(event)} value={this.state.githubUsername} />
          </form>
          <Data userInfo={this.state.user}/>
      </div>
    );
  }
}

export default App;