# -------------- CHAPTER 8 - LETS GET CLASSY -------------------#

1. What are class based components ?

# class based components are nothing but a javascript class which has a render method which returns a piece of JSX

2. Why do we use extends.ReactComponent while creating class compnent in REact?

# To let react know that its a class based component, and React.Component is a class which is given to us By React and we are inheriting it properties by extending

3. how can we pass a props in class component?

# to pass a props we first need to initalize a constructor and in that constructor we will pass our props, and then we will use super()

# In a class-based React component, the super(props) call is used in the constructor to initialize the parent class, which in the case of a React component, is the React.Component class. The purpose of super(props) is to ensure that the parent class's constructor is called with the props object, and it allows you to access and use this.props within your component. Here's why it's necessary:

# Inheritance: When you create a class that extends another class in JavaScript, as is the case with React components, the child class inherits properties and methods from the parent class. To set up this inheritance correctly, you must call the parent class's constructor using super().

# Passing Props: In React, components can receive data via props. When you call super(props), you're passing the props object from the child component to the constructor of the parent class (React.Component). This is necessary for the parent class

# IN Class based components if you want to create local state variables we can use the this.state to create a local state variables and this.state is nothing but an object that contains all the variables with its inital value, to update the state variable we have this.setState this is also an object in whihc we can modify or update our state varaibel

# what will happen if we render two class based child components in a parent class based component what will be the lifecylce order

Lifecycle:

- Parent constructor will be called
- Parent render will be called
- if class based components encountered then it will trigger its lifecyle
- 1st child constructor will be called
- 1st child render will be called
- 2nd child constuctor will be called
- 2nd child render will be called
- after both child has been rendered which means it has been mounted then
- 1st child ComponentDidMount will be called
- 2nd child ComponentDidMount will be called
- Parent ComponentDid MOunt will be called

# React Component Lifecycle

React component lifecylce has two Phases

A. Mounting, Updating

1. Render Phase

   - Constructor
   - Render

2. Commit Phase
   - React updates the DOM
   - ComponentdidMount is called for sideeffects

# React Update Lifecycle

- constructor {state variable created}
- render { state variable mounted - dummy}
- componentdid mount { making an API call and updating the state variable}
- setstate() triggerd
- render Method will called again (to update the dummy data with real data)
- dom will be updated
- Component Did update will be called

# NOTE

# when mutiple class child is called, then React will batch the render phase of both child component, then it will call the component did mount method

Chapter 08 - Let's get Classy
Q: How do you create Nested Routes react-router-dom configuration?
A: We can create a Nested Routes inside a react router configuration as follows: first call createBrowserRouter for routing different pages

const router = createBrowserRouter([
{
path: "/", // show path for routing
element: <Parent />, // show component for particular path
errorElement: <Error />, // show error component for path is different
children: [ // show children component for routing
{
path: "/path",
element: <Child />
}
],
}
])
Now we can create a nested routing for /path using children again as follows:

const router = createBrowserRouter([
{
path: "/",
element: <Parent />,
errorElement: <Error />,
children: [
{
path: "/path",
element: <Child />,
children: [ // nested routing for subchild
{
path: "child", // Don't use '/' because then react-router-dom will understand it it's the direct path
element: <SubChild />,
}
],
}
],
}
])
Q: Read about createHashRouter, createMemoryRouter from React Router docs.
A: createHashRouter is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL". Other than that, it is functionally the same as createBrowserRouter. For more reference Read more

createMemoryRouter Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment. For more reference Read more

Q: What is the order of life cycle method calls in Class Based Components?
A: Following is the order of lifecycle methods calls in Class Based Components:

constructor()
render ()
componentDidMount()
componentDidUpdate()
componentWillUnmount()
For more reference React-Lifecycle-methods-Diagram

Q: Why do we use componentDidMount?
A: The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered. We can run any piece of react code to modify the components. For ex. It's the best place to make API calls.

Q: Why do we use componentWillUnmount? Show with example.
A: componentWillUnmount() is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance. For example, in Repo class, during componentDidMount() a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example clearInterval(timer) to clear the timer interval before unmounting Repo component.

Q: (Research) Why do we use super(props) in constructor?
A: super(props) is used to inherit the properties and access of variables of the React parent class when we initialize our component. super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console. The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

Q: (Research) Why can't we have the callback function of useEffect async?
A: useEffect expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as async, it will return a promise and the promise will affect the clean-up function from being called.
