import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age:'20'},
      { name: 'Bruno', age:'25'},
      { name: 'Harry', age:'30'},
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Maximillian Pegasus', age:'25'},
        { name: 'Bruno', age:'25'},
        { name: 'Harry', age:'30'},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>And I like to swim</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;