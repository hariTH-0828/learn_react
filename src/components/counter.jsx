import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count : 0,
        tags : ["tag1", "tag2", "tag3"],
        //tags : [],
    };

    // formatCounter() {
    //     const { count } = this.state;
    //     return count === 0 ? "Zero" : count;
    // }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    renderTags() {
        if(this.state.tags.length === 0) return <p style={this.styles}>There is no tags!</p>

        return <ul style={this.styles}>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    // Binding method :

    // constructor() {
    //     super();
    //     this.handleIncrements = this.handleIncrements.bind(this);
    // }
    // Instead of using this method to arrow function

    handleIncrements = () => {
        this.setState({ count: this.state.count+1})
    };

    styles = {
        fontWeight : 'bold',
        fontSize : 15,
        margin : 25,
    };

    render() { 

        // let classes = "badge m-2 badge-";
        // classes += (this.state.count === 0) ? "warning" : "primary";

        return (
            <React.Fragment>
                <span style={this.styles} className={this.getBadgeClasses()}>  
                    {this.state.count}              { /*  previous : {this.formatCounter()} */}
                </span>

                {this.state.tags.length === 0 && <p style={this.styles}>Please create a tag.</p>}
                {this.renderTags()}
                <button onClick={this.handleIncrements} style={ {textAlign : 'center', fontWeight : 'bold'}} className='btn btn-light btn-sm m-4'>
                    Increment
                </button>
            </React.Fragment>
        );
    }
}

export default Counter;