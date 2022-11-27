import React, { Component } from 'react'
import Counters from './counters';

class Main extends Component {

    styles = {
      fontWeight : 'bold',
      fontSize : 15,
      margin : 25,
  }

    render() {
        // We don't need to type again & again this.props while using different param, we simply declare as set and use it directly.
        const { onReset, onAdd, count, onDelete, onIncrement } = this.props
        return (
            <React.Fragment>
                <button style={this.styles} className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>
                <button style={this.styles} className="btn btn-secondary btn-sm m-2" onClick={onAdd}>Add</button>
                {count.map(counter => (
                    <Counters key={counter.id} onDelete={onDelete} onIncrement={onIncrement} counter={counter}/>
                ))}
            </React.Fragment>
        );
    }
}
 
export default Main;