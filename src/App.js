import React, { Component } from 'react';

//import Data from './Data'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        githubUsername: "",
        data: null,
    };
}

componentDidMount() {
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => this.setState({ data }));
}

handleSubmit(event) {
  event.preventDefault();
  debugger
  this.sendFormDataSomewhere(event)
  this.setState({ githubUsername: "" })
}

searchUsers(username) {
  this.state.data.filter(object => object.login === username)
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
           <form onSubmit={event => this.handleSubmit(event)}>
              <h2>Enter a Github username:</h2>
              <input type="text" name="githubUsername" onChange={event => this.searchUsers(event)} value={this.state.githubUsername} />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
