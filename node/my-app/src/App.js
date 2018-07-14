import React, { Component } from 'react';
import Nav from './nav';
import Home from './Home'
import B from './b'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Sun'
    }
  }
  changeName = e => {
    this.setState({ name: e.target.value})
  }

  render() {
    const {name} = this.state
    return (
      <div>
        <Nav />
        <input 
        class="input" 
        type="text" 
        placeholder="Text input"  
        value={name}
        onChange={this.changeName}
          />
        
          <Link class="button is-light" to="/">A</Link>
          <Link class="button is-dark" to="/B">B</Link>
        <Route exact={true} path="/" render={ () => <Home text={name}/> } />
        <Route exact={true} path="/B" render={() =>
          <B/>
        } />
      </div>
    )
  }
}

export default App;
