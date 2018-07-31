import React, { Component } from 'react';
import './App.css';

//Routes
import routes from './routes'

//Components
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
