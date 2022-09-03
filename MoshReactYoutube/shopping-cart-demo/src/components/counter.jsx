import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
    };
    
    styles ={
        fontSize: 10,
        fontWeight: "bold"

    }


    render() { 
        let classes = "m-2 badge bg-";
        classes += (this.state.count === 0) ? "warning" : "primary"
return (
    <div>
        <span style={{fontSize : 18}}className={classes}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
            );
    }
    formatCount () {
        const {count} = this.state;
        return this.state.count === 0 ? `Zero` : this.state.count;
    }
}
 
export default Counter;