import React, { Component } from 'react';
import Person from './Person/Person';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    persons :[
      {id:'asf', name : 'Moha',age:28},
      {id:'fad',name : 'Mzbf',age:28},
      {id:'daf',name : 'Meth',age:28}
    ],
    showPerson : false
  }

switchNameHandler=()=>{
    console.log('Switched')
    this.setState({
      persons : [
        {name : 'Meth',age:28}
      ]
    })

}
toggleHandler=()=>{
  const doesShow = this.state.showPerson;
  this.setState({showPerson:!doesShow})
}
deletePersonHandler = (personIndex)=>{
     // const persons = this.state.persons;
      const persons = [...this.state.persons]
      persons.splice(personIndex,1);
      this.setState({persons:persons})
}
nameChangedhandler=(event,id)=>{
  const personIndex = this.state.persons.findIndex(p=>{
    return p.id === id;
  });
  const person = {
    ...this.state.persons[personIndex]
  };

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex]=person;

  //const person = Object.assign({},this.state.persons[personIndex])
  this.setState({ persons:persons})
}
  render() {
    let persons = null
    if(this.state.showPerson){

    persons =(
      <div>
        {
          this.state.persons.map((person,index) => {

            return <Person
              click= {()=> this.deletePersonHandler(index)}
              name= {person.name} 
              age={person.age}
              changed={(event)=>this.nameChangedhandler(event,person.id)}
              key={person.id}/>
          })
        }
      {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobbies: Nothing</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Nothing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobbies: Nothing</Person>
 */}
      </div>
    )  
    }
    return (
      <div className="App">
      <header className="App-header">
    
        <p>
          Fonds Médina Baye
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <h1>Teste My React JS</h1>
      <button onClick={this.toggleHandler}>Switch Name </button>
     {persons}

    </div>
    )
    /* 
       return  React.createElement('div',{className:'App'}, React.createElement('h1',null,'Ndax Mongui Bakh ?'))
     */
      }
}

export default App;
