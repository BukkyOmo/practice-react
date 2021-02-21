import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      outputValue: ''
    }
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      inputValue: '',
      outputValue: this.state.inputValue
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h1>A message you would like to pass</h1>
            <input value={this.state.inputValue} type='text' onChange={this.handleChange} />
            <div className="btn-container">
              <button>Submit</button>
            </div>
          </form>
          <div>
            <h2>Last message delivered</h2>
            <p>{this.state.outputValue.toUpperCase()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
