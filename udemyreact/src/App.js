import React, { Component } from "react";

import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    userInput: " ",

    persons: [
      { id: "asda", name: "Krishna", age: "23" },
      { id: "asdasaasda", name: "Saurav", age: "28" },
      { id: "asdasda", name: "Buddhi", age: "25" },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black',
      // };
    
          
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes= ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }

    return (
        <div className="App">
          <h1>Hi, Im a React App.</h1>
          <p className={classes.join(" ")}>This is acutally working!!</p>
          <button  className="button" onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
  