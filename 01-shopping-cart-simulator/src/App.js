import React, { Component } from 'react';
import './App.css';

import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
                {id: 1, value: 0},
                {id: 2, value: 0},
                {id: 3, value: 5},
                {id: 4, value: 0},
            ]
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(counter => counter.id !== counterId);
    this.setState({ counters })
  };

  handleIncrement = (counter) => {
    const index = this.state.counters.indexOf(counter);
    const counters = [...this.state.counters];

    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
        counter.value = 0;
        return counter;
    });
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const index = this.state.counters.indexOf(counter);
    const counters = [...this.state.counters];

    counters[index] = {...counter};
    if (counters[index].value > 0) {
      counters[index].value--;
    }
    this.setState({ counters });
  }
  render() { 
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className='container d-flex align-items-center justify-content-center main-wrapper'>
          <Counters counters={this.state.counters}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onReset={this.handleReset} />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;
