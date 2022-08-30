document.getElementById("mountNode").innerHTML = "Hello!";

function Hello() {
  return <div>Hello React!</div>;
}

ReactDOM.render(<Hello />, document.getElementById("mountNode"));
