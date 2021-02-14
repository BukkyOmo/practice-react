import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { color: '#FFFFFF' }
  }

  handleClick = () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';
    for (let i = 0; i < 6; i++){
      const random = array[Math.floor(Math.random() * array.length)];
      color += random; 
    }
    this.setState({ color })
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.color }}>
        <div>
          <h1>HEX COLOR: {this.state.color}</h1>
          <button className="btn" onClick={this.handleClick}>Click me</button>
        </div>
      </div>
    );
  }
}

export default App;
