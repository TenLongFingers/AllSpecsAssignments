import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [`tag1`, `tag2`, `tag3`],
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  styles = {
    fontSize: 14,
    fontWeight: "bold",
  };

  handleIncrement = () => {
    console.log("Increment Clicked", this);
  };

  render() {
    return (
      <div>
        {/* {this.state.tags.length === 0 && `Please create a new tag`} */}
        {/* This works because if both statements are truthy (array length is zero and the existance of a non=empty string), the second operand will be returned. */}
        <span style={{ fontSize: 18 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.renderTags()}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "m-2 badge bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return this.state.count === 0 ? `Zero` : this.state.count;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>Your shopping cart is empty</p>;
    return (
      <ul>
        {" "}
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag} </li>
        ))}
      </ul>
    );
  }
}

export default Counter;
