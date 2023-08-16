import React from "react";
import ReactDOM from "react-dom/client";

// This is a React Element

const heading = React.createElement("h1", { id: "new" }, "Hello I am react");

const JSXheading = <h1>Hello From JSX</h1>;

console.log(JSXheading);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

// This is a React Component

const HeadingComponent = () => <h1>Hello World</h1>;

const nameofClass = "hello";

// So this is how we render an fucntional component what if we wnat to render an elwment
// we can do this i have created a variable nameofClass and i called it in JSX withthe use of {} curly braces

const TitleComponent = () => (
  <div id="main">
    {HeadingComponent()}
    <h1 className={nameofClass}>Hello Word from another Component</h1>
  </div>
);

// root.render(
//   <>
//     <HeadingComponent />
//     <TitleComponent name={"hello"} />
//   </>
// );

// The above way of doing these and below way of rendering two components either we nest it inside one another or we use <></> and call our components here

root.render(<TitleComponent />);
console.log(TitleComponent);
