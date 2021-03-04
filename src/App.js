import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <Person name="Bruno" age="25" />
        <Person name="Lucas" age="25">And I like to swim</Person>
        <Person name="Harry" age="30"/>
      </div>
    );
  }
}

export default App;