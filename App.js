import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "new" }, "Hello I am react");

const JSXheading = <h1>Hello From JSX</h1>;

console.log(JSXheading);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(JSXheading);
