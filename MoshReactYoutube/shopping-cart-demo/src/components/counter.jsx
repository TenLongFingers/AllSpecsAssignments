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

  handleIncrement = (product) => {
    console.log(product);
    // this.state.count++;
    //This won't increment the count. The count IS changing, but it's not being shown on the webpage.
    //This next line is how you do it. It tells the page to update the displayed count.
    this.setState({ count: this.state.count + 1 });
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
          onClick={() => {
            this.handleIncrement({ id: 1 });
          }}
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
