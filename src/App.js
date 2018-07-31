import React, { Component } from 'react';
import './App.css';

//Components
import About from './components/About/About';
import Appointments from './components/Appointments/Appointments';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Services from './components/Services/Services';
import Schedule from './components/Schedule/Schedule';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Appointments />
        <Gallery />
        <Home />
        <Nav />
        <Services />
        <Schedule />
      </div>
    );
  }
}

export default App;
