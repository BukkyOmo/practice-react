import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { color: 'rgb(255, 255, 255)' }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    const randomNumber1 = Math.floor(Math.random() * 256);
    const randomNumber2 = Math.floor(Math.random() * 256);
    const randomNumber3 = Math.floor(Math.random() * 256);
    const color = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
    this.setState({ color });
  }


  render() {
    const { color } = this.state;
    return (
      <div style={{ backgroundColor: color }} className="container">
        <div>
          <h1>RGB Code: {this.state.color}</h1>
          <button className="click_button" onClick={this.handleClick}>Click me</button>
        </div>
      </div>
    );
  }
}

export default App;
