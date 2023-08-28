**\*\***\*\*\***\*\*** CHAPTER 4 - LETS GET HOOKED (24th August 2023) **\*\***\*\*\***\*\***

There are two types of export one is default export and other one is named export, same for the import.

# React Hooks (Normal JS utility function)

What are hooks?
Hooks are nothing but normal javascript function that are given to us by REact

There are two most important hooks in React

1. useState()
2. useEffect()

useState - this is used to generate superpowerful state variable in React

Why it is called state variable , becauser it manages the state of your component

There are two types of state variable

1. local state variable -it manages the state of your component i.e the scope will be limited to that functional scope

2. global state variable

# Some Powerful feature of state variable is , that it keeps the UI synced with the data lay3er

# Whenever the state variable updates, React rerenders the component in simple words if the state variable changes, react will re render the component

# Lets Now see how react re renders the component wherver the state variable changes

## React uses Reconciliation Algorithm also known as React Fiber to rerender the components and to make it faster React uses somthing known as Virtual DOM

# Virtual DOM is nothing but a representation of an Actual DOM i.e a Normal Javascript Object;

# Diff Algorithm - Diff Algorithm is nothing but finding the difference between the old Virtual DOM and latest Virtual DOM and updating only that piece which are changed in the Actual DOM

- If Someone Asks you why is REact Fast,
  \*\* React is fast because of its Efficient DOM manipulation, how does it perform efficient DOM manipulation because of Virtual DOM, What is Virtual DOM its nothing but the javasscript representation of the acutal DOM, so DIFF algorithm of REact to find out the difference between latest Virtual DOM and old virtual DOM makes the DOM manipulation efficient, so React keeps track of our components as soon as you use setstate funciton to update your state variable it uses virtual DOM by using diff algorithm and finds out the difference between latest and old virtualdom and quickly updates it in the actual DOM
