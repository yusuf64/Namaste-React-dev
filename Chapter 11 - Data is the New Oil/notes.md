--------------- CHAPTER 11 - Data is the New Oil 30th December 2023 ------------

1. What are High Order Component (HOC)?
   Higher Order Components is a function that takes a Component as an argument enhances it and returns a Component.

   Higher Order Components are Pure Functions, which does not modify the existing fucntion passed into rather it just enhance it without making changes to the original function and returns a new modified fucntion

2. What is Props Drilling ?

Props drilling refers to the process of passing down props (properties) through multiple layers of nested components in a React application. When you have a component deep within the component tree that needs access to certain data or functionality, you pass down the required props from its parent, and if necessary, the parent's parent, and so on until you reach the component where the data is needed.
