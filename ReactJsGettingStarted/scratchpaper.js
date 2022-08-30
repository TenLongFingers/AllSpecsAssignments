function Hello() {
  return React.createElement("div", null, "Hello React!!!");
}

ReactDOM.render(
  React.createElement(Hello, null),
  document.getElementById("mountNode")
);
