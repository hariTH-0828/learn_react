import React, { Component } from 'react'
import Counters from './counters';

class Main extends Component {
    state = { 
        count: [
            {id: 1, value: 0},
            {id: 2, value: 1},
            {id: 3, value: 2}
        ]
     };

    styles = {
        fontWeight : 'bold',
        fontSize : 15,
        margin : 25,
    }

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
                <button style={this.styles} className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>Reset</button>
                <button style={this.styles} className="btn btn-secondary btn-sm m-2" onClick={this.handleContainer}>Add</button>
                {this.state.count.map(counter => (
                    <Counters key={counter.id} onDelete={this.handleDelete} onIncrement={this.handleIncrement} counter={counter}/>
                ))}
            </React.Fragment>
        );
    }
}
 
export default Main;