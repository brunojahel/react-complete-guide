import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    persons: [
      {name: 'Maximillian Pegasus', age: '20'},
      {name: 'Bruno', age: '25'},
      {name: 'Harry', age: '30'},
    ],
    otherState: 'outro valor',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Maximillian Pegasus', age: '25'},
        {name: event.target.value, age: '25'},
        {name: 'Harry', age: '30'},
      ]
    })
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person name={person.name} age={person.age} click={() => this.deletePersonHandler(index)}/>
            })}
          </div>
      );
    }

    return (
        <div className="App">
          <h1>Hi, I am a React App</h1>
          <button
              style={style}
              onClick={this.togglePersonsHandler}>Toggle persons
          </button>
          {persons}
        </div>
    );
  }
}

export default App;