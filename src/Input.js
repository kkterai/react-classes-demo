import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            githubUsername: "",
            name: "", 
            email: "", 
            company: "", 
            public_repos: ""
        }
    }

    handleUsernameChange = event => {
        this.setState({
          githubUsername: event.target.value
        })
      }
  
    render() {
      return (
        <form>
            <h2>Enter a Github username:</h2>
            <input type="text" name="githubUsername" onChange={event => this.handleUsernameChange(event)} value={this.state.githubUsername} />
        </form>
      )
    }
}

export default Input;
  