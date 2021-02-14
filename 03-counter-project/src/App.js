import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  handleLowerClick = () => {
    this.setState(state => ({
      count: state.count - 1,
    }))
  }

  handleUpperClick = () => {
    this.setState(state => ({
      count: state.count + 1,
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="counter-container">
          <h1>Counter</h1>
          <p style={this.state.count === 0 ? { color: 'black' } : this.state.count > 0 ? { color: 'green' } : { color: 'red' }}>{this.state.count}</p>
          <div className="button-container">
            <button onClick={this.handleLowerClick}>Decrease Count</button>
            <button onClick={this.handleUpperClick}>Increase Count</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
