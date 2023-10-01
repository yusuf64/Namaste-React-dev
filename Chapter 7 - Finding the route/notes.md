/////// Finding the Route - Chapter 7 (1 October 2023) \\\\\\\\\\\\\\\

in this episode we will learn about what is routing and how it works, additonlly we will also learn deeply about useEffect hooks

1. What is UseEffect ?
   Useeffect is a special hook given by React to use to perform side effects, use effect takes two argument first is the callback function and the second is the dependency array, useffect executes the callback function after the compoent has been rendered, means the component will render first and then the useeffect hook will call the callback funciton, now why we do use the dependency array, its becasue if you dont put dependency array the call back function will gets called everytime the componnent renders.

   if(dependency array is empty ) => useEffect (will be called only at initial render)

   if(dependecy array not present) => useEffect (will be called evertime the component renders)

2. What is React Router?

React Router is a widely used library in the React.js ecosystem that helps you manage navigation and routing in your web applications. It allows you to create single-page applications (SPAs) by handling the changing of URLs and rendering different components based on those URLs without requiring full page reloads.

To use React Router library we first need to install it using 'npm install react-router-dom'

and after isntalling it we first need to create routing configuration i.e what component should render on each path,
we need to import createBrowserRouter from react-router to create all these configuraation after creating the config
we need to use RouterProvider which provide tthe created config to ourApp
