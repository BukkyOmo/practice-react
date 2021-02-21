import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor() {
    super()
    this.state = {
      quote: 'Self care and love is key',
      author: 'Bukola Odunayo'
    }
  }

  handleClick = () => {
    const quotes = [
      {
        quote: "Start writing, no matter what. The water does not flow until the faucet is turned on.",
        author: "Louis L’Amour"
      },
      {
        quote: "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.",
        author: "William Faulkner"
      },
      {
        quote: "The first draft is just you telling yourself the story.",
        author: "Terry Pratchett"
      },
      {
        quote: "Start before you’re ready.",
        author: "Steven Pressfield"
      },
      {
        quote: "You can always edit a bad page.You can’t edit a blank page",
        author: "Jodi Picoult"
      },
      {
        quote: "You can’t wait for inspiration. You have to go after it with a club",
        author: "Jack London"
      },
      {
        quote: "Outside of a dog, a book is man’s best friend. Inside of a dog, it’s too dark to read",
        author: "Groucho Marx"
      },
      {
        quote: "I love deadlines. I like the whooshing sound they make as they fly by.",
        author: "Douglas Adams"
      },
      {
        quote: "If you have no critics, you’ll likely have no success.",
        author: "Malcolm X"
      },
      {
        quote: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers, you cannot be successful or happy.",
        author: "Norman Vincent Peale"
      }
    ];
    const random_quote = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({
      quote: random_quote.quote,
      author: random_quote.author
    })
  }

  render() {  
    return (
      <div className="App">
        <div className="container">
          <button onClick={this.handleClick}>Generate Quote</button>
          <p>{ this.state.quote }</p>
          <div className="span-container">
            <span>{this.state.author}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
