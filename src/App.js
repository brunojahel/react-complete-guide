import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    persons: [
      { name: 'Maximillian Pegasus', age:'20'},
      { name: 'Bruno', age:'25'},
      { name: 'Harry', age:'30'},
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age:'20'},
        { name: 'Bruno', age:'25'},
        { name: 'Harry', age:'30'},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Maximillian Pegasus', age:'25'},
        { name: event.target.value, age:'25'},
        { name: 'Harry', age:'30'},
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button
            style={style}
            onClick={() => this.switchNameHandler('Maximillian Pegasus')}>Switch name</button>
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'King of monster duel')}
            changed={this.nameChangedHandler}>And I like to swim</Person>
        <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;