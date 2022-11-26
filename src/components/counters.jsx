import React, { Component } from 'react';

class Counters extends Component {
    // state = { 
    //     value: this.props.counter.value,
    // };
    
    styles = {
        fontWeight : 'bold',
        fontSize : 15,
        margin : 25,
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    // handleIncrements = () => {
    //     this.setState({ value: this.state.value + 1});
    // };
    
    render() { 
        return (
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>  
                    {this.props.counter.value}
                </span>

                <button onClick={() => this.props.onIncrement(this.props.counter)} style={{textAlign : 'center', fontWeight : 'bold'}} className='btn btn-light btn-sm m-4'>
                    Increment
                </button>

                <button onClick={() => this.props.onDelete(this.props.counter.id)} style={ {textAlign : 'center', fontWeight : 'bold'}} className='btn btn-danger btn-sm m-4'>
                    Delete
                </button>
                <br/>
            </div>
        );
    }
}
 
export default Counters;


