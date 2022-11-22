import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count : 0,
    };

    formatCounter() {
        const { count } = this.state;
        return count === 0 ? "Zero" : this.state.alertMsg;
    }

    styles = {
        fontWeight : 'bold',
        fontSize : 15
    };

    render() { 
        return (
            <React.Fragment>
                <span style={this.styles} className='badge badge-primary m-2'>
                    {this.formatCounter()}
                </span>
                <button style={ {textAlign : 'center', fontWeight : 'bold'}} className='btn btn-light btn-sm'>
                    Increment
                </button>
            </React.Fragment>
        );
    }
}

export default Counter;