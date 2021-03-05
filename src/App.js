import React, {useState} from 'react';
import './App.css';
import Person from "./Person/Person";

const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: '20'},
      {name: 'Bruno', age: '25'},
      {name: 'Harry', age: '30'},
    ]
  });

  const [stringState, setStringState] = useState('Teste de string')

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Maximillian Pegasus', age: '25'},
        {name: 'Bruno', age: '25'},
        {name: 'Harry', age: '30'},
      ]
    })
  }

  return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={switchNameHandler}>Switch name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>And I like to swim</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
  );

}

export default app;