import './App.css'; 
import React, { Component} from 'react';
import Navbar from './components/navbar';
import Main from './components/main';

class App extends Component {

  state = { 
        count: [
            {id: 1, value: 0},
        ]
  };

  handleDelete = (counterId) => {
      const updateCount =  this.state.count.filter(c => c.id !== counterId)
      this.setState({ count: updateCount })
  }

  handleIncrement = (counter) => {
      const counters = this.state.count;
      const index = counters.indexOf(counter);
      counters[index].value++;
      this.setState({counters})
  }

  handleReset = () => {
      const updateCount = this.state.count.map(v => {
          v.value = 0;
          return v;
      });
      this.setState({ count: updateCount });
  };

  handleContainer = () => {
      if(this.state.count.length === 0){
          const count = this.state.count;
          count[0] = {id: 0, value: 0};
          this.setState({count});
      }else {
          const getLength = this.state.count.length;
          const getId = this.state.count[getLength - 1].id;
          const updateCount = this.state.count;
          updateCount[getId] = {id: getId+1, value: 0};
          this.setState( { count: updateCount } );
      }
  }

  render() { 
    return (
      <React.Fragment>
        <Navbar totalCounters = {this.state.count.filter( v => v.value > 0).length}/>
        <main className='container'>
            <Main count={this.state.count} onAdd={this.handleContainer} onIncrement={this.handleIncrement} onDelete={this.handleDelete} onReset={this.handleReset}/>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
