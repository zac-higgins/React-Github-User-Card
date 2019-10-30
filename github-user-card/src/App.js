import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import './css/App.css';


class App extends Component {
  state = {
    user: {}
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/zac-higgins')
      .then(res => {
        console.log("Here's your data!", res);
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log("No luck with that data", err))
  }


  render() {
    console.log("Here's your state", this.state.user);
    return (
      <div className="App">
        <div className="userCard">
          <div className="userInfo">
            <img src={this.state.user.avatar_url} />
          </div>
          <div className="userDescription">
            <h2 className="descriptionItem">{this.state.user.login}</h2>
            <p className="descriptionItem">{this.state.user.name}</p>
            <p className="descriptionItem">{this.state.user.email}</p>
            <p className="descriptionItem">{this.state.user.bio}</p>
            <p className="descriptionItem">Public Repos: {this.state.user.public_repos}</p>
            <p className="descriptionItem">Followers: {this.state.user.followers}</p>
            <p className="descriptionItem">Following: {this.state.user.following}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;