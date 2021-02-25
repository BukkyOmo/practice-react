import React, { useState } from 'react';
import './App.css';
import user1 from './images/user-1.jpg';
import user2 from './images/user-2.jpg';
import user3 from './images/user-3.jpg';
import user4 from './images/simi.jpeg';

function App() {
  const [counter, setCounter] = useState(0);
  const array = [
    {
      image: user1,
      name: 'Alan Turing',
      review: 'I do not regret buying the product'
    },
    {
      image: user2,
      name: 'Nicholas Tesla',
      review: 'This is a gem for anyone trying to have a top-mid-level gaming PC. The parts are very well chosen and everything worked perfectly. Real plug & play stuff.'
    },
    {
      image: user3,
      name: 'Ada Lovelace',
      review: 'Computer was failing to power up right out of box, after some trouble shooting I noticed one of the RAM sticks was not fully seated in the slot. Clicked it into place and computer has been working great ever since'
    },
    {
      image: user4,
      name: 'Charles Babbage',
      review: 'Computer was failing to power up right out of box, I do not recommend to anyone willing to buy. Try other products'
    }
  ]

  const handlePrevButton = () => {
    let newCounter = counter - 1;
    if (newCounter < 0) {
      newCounter = array.length - 1
    }
    setCounter(newCounter);
  }
  
  const handleNextButton = () => {
    let newCounter = counter + 1;
    if (newCounter === array.length) {
      newCounter = 0
    }
    setCounter(newCounter)
  }
  
  return (
    <div className="App">
      <div className='container'>
      <h1>CLIENT</h1>
      <h2>TESTIMONIALS</h2>
      <div className="review-div">
          <div className="image-div"><img id="img" src={array[counter].image} alt='car'/></div>
          <h3 id="reviewer">{array[counter].name}</h3>
          <p id="review">{ array[counter].review}</p>
          <div>
            <button
              className="prev"
              id="prev"
              type='button'
              onClick={handlePrevButton}
            >
              prev
            </button>
            <button
              className="next"
              id="next"
              type='button'
              onClick={handleNextButton}
            >
              next
            </button>
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;
