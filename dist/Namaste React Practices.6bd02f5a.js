// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!!!!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log(heading);
//  <div id="parent">
//      <div id="child">
//          <h1>I am h1 tag</h1>
//          <h2>I am h2 tag</h2>
//      </div>
//      <div id="child2">
//          <h1>I am h1 tag</h1>
//          <h2>I am h2 tag</h2>
//      </div>
//  </div>
im;
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);

//# sourceMappingURL=Namaste React Practices.6bd02f5a.js.map
