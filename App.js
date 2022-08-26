import logo from './logo.svg';
import Css from './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      shouldShowCounter: false
    }
  }
  render() {
    return <>
      <h1 className='counter'>{this.state.counter}</h1><button onClick={() => {
        this.setState({
          counter: this.state.counter + 1
        });
      }}>Increment</button>
      <button onClick={
        () => {
          if(this.state.counter > 0)
          this.setState({
            counter: this.state.counter - 1
          });
        }
      }>Decrement</button>
      <p>Click on the button for the increment.</p>
    </>
  }
}

export default App;
