import { Component } from 'react';
import car1 from './images/benz1.jpg';
import car2 from './images/car1.jpg';
import car3 from './images/car2.jpg';
import car4 from './images/car3.jpg';
import car5 from './images/car4.jpg';
import car6 from './images/car5.jpg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { counter: 0 }
    this.arrayOfCars = [car1, car2, car3, car4, car5, car6];
  }

  handlePrevButton = () => {
    const newCounter = this.state.counter - 1;
    this.setState(() => ({
        counter: newCounter < 0 ? this.arrayOfCars.length - 1 : newCounter
    }))
  }

  handleNextButton = () => {
    this.setState(state => {
      const newCounter = state.counter + 1;
      return {
        counter: newCounter === this.arrayOfCars.length ? 0 : newCounter
      }
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="container" style={{ backgroundImage: `url(${this.arrayOfCars[this.state.counter]})` }}>
          <button className="prev" onClick={this.handlePrevButton}>prev</button>
          <button className="next" onClick={this.handleNextButton}>next</button>
        </div>
      </div>
    );
  }
}

export default App;
