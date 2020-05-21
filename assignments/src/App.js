import React, { Component } from 'react';
import './App.css';
import Validate from './Validate/Validate'
import Char from './Char/Char'

class App extends Component {
  state = {
    userInput: "",
    textLength: null
  }

  inputChangeHandler = (event) => {
    this.setState({
      userInput: event.target.value,
      textLength: event.target.value.length
    })
  }

  deleteCgarHandler = (index) => {
    console.log('clicked');
  }

  
  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
              character = {ch}
              key = {index}
              click = {() => this.deleteCgarHandler(index)}
            />
    })


    let validate = null;

    if(this.state.textLength >= 5){

      validate = <p>Text long enough</p>
    }
    
    if(this.state.textLength < 5){

      validate = <p>Text long too short</p>
    }
    

    return (
      <div className="App">
        <input 
        type="text" 
        onChange={this.inputChangeHandler} 
        value={this.state.userInput}
        />
        <Validate
          text={this.state.userInput}
        />
        {charList}
        <p>{validate}</p>
      </div>
    );
  }
}

export default App;
