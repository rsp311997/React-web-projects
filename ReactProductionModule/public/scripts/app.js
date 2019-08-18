"use strict";

console.log("react is working");

var template = React.createElement(
  "p",
  null,
  "this is the first jsx power is fun"
);

var approot = document.getElementById('root');

ReactDOM.render(template, approot);
