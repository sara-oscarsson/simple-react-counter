import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };
    addItem = ()=> {
        console.log("Plus one!");
        this.setState({ count: this.state.count + 1 });
    }
    removeItem = ()=> {
        console.log("Minus one!");
        this.setState({ count: this.state.count - 1 });
    }
    deleteItem = ()=> {
        console.log("Deleted!");
        this.setState({ count: this.state.count = 0 });
    }
    render() {    
        return (
            <React.Fragment>
                <span style={{ color: 'white'}} className={ this.getClassesForStyle() }>{this.formatCount()}</span>
                <button 
                style={{fontSize: '25px'}}
                onClick={this.addItem} 
                className="btn btn-outline-primary btn-sm m-2"
                >
                    +
                </button>
                <button 
                style={{fontSize: '25px', width: '35px'}}
                onClick={this.removeItem} 
                className="btn btn-outline-primary btn-sm m-2"
                >
                    -
                </button>
                <button 
                onClick={this.deleteItem} 
                className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </React.Fragment>
        );
    }
    getClassesForStyle() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "success";
        return classes;
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'ZERO' : count;
    }
}
 
export default Counter;