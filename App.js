// For creating an element we will use REACT method, create element, it will take three arguments 1. the tag that we want to create  2. the object in which we can add attribute to our element 3. the content inside our tag

const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Hello World From React !"
);

// For rendering a element we need to first create a root element in which we eill render all the stuff and for that we will use REACTDOM

const root = ReactDOM.createRoot(document.getElementById("root"));

// For putting the heding inside the root div we weill simply use ReactDom method render() and in that we will pass the argument whcih we want to render

root.render(heading);

// as you can see we created a javascirp object usiing React method cReateElement()
// and after that we created a root
// and the render method is just converting that heading object into html and putting it into the root div

// Now this was just a single element what if we want to create a nested element a seciotn or landing page hwo can we do this, will find out soon :)

// let us find it out

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am inside a child element")
  )
);

// Remember the React.createElement is not a not creating a html element its just a JS object , the ReactDOM.render is used convert that object into html element

// Now what if we want to pass more than one children of a specific parent
// we can do this by passing an arry of children into third argument

const parent2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am inside a child element"),
    React.createElement("h2", {}, "I am inside a child element"),
  ])
);

root.render(parent2);

console.log(parent2);

// Now lets make it more complext

const parent3 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am inside a child element"),
    React.createElement("h2", {}, "I am inside a child element"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am inside a child element"),
    React.createElement("h2", {}, "I am inside a child element"),
  ]),
]);

// so this how we can create nested childs in react without using JSX
// but but but how can we use this its very ugly and what if we have more nested ocmplex html we cant even read this to solve this problem we will use JSX

// WILL soon learn about JSX till then enjoy :)DD

// what if we have already have some content inside root elmenet , root.render replaces everyting in that root element with the content we will add using root.render(heaindg);
