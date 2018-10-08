import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './services/authorizeConnect.service'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { auth: null }
  }

  async authorize() {

  }

  async componentDidMount() {
    const auth = new Auth()
    console.log(auth)
    const handle = await auth.appHandle()
    console.log(handle)
    this.setState({ auth: handle })
  }

  render() {
    console.log(this.state.auth)
    // console.log(Auth.appHandle())
    return (
      this.state.auth &&
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
