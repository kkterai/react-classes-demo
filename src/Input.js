import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            githubUsername: ""
        }
    }
  
    render() {
      return (
        <form>
            <h2>Enter a Github username:</h2>
            <input type="text" name="githubUsername" value={this.state.githubUsername} />
        </form>
      )
    }
}

export default Input;
  