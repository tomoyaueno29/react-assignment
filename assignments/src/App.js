import React, { Component } from 'react';
import './App.css';
import Validate from './Validate/Validate'

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

  
  render() {
    let validate = null;

    if(this.state.textLength >= 5){
      validate=(
        <p>Text long enough</p>
      )
    }
    
    if(this.state.textLength < 5){

      validate=(
        <p>Text long too short</p>
      )
    }
    

    return (
      <div className="App">
        <input 
        type="text" 
        onChange={this.inputChangeHandler} 
        value={this.state.userInput}
        />
        <p>{validate}</p>
      </div>
    );
  }
}

export default App;
