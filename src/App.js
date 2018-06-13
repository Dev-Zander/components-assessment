import React, { Component } from 'react';
import './App.css';
import Class from '../src/ClassComponent';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      numClicks : 0
    }
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick(){
    let currentCount = this.state.numClicks
    this.setState({
      numClicks : currentCount + 1
    })
  }
  render() {

    console.log(this.state.numClicks, 'App')
    return (
      <div className="App">
      <button onClick={this.handleClick}>Count My Clicks</button>
     <Class clicks={this.state.numClicks}/>
      </div>
    );
  }
}

export default App;
