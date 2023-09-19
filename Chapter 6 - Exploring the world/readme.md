\***\*\*\*\*\*** CHAPTER 6 - EXPLORING THE WORLD \***\*\*\*\*\***

There are two approaches to display the data from API.

1. Approach 1:
   Page Loads => API call => render the page

2. Approach 2:
   Page Loads => Render the page => API call => render the page (by updating the state);

# Hooks

1. useEffect hooks - useEffect is normal javascript function with superpowers it takes two arguments first is a callback function and other one is a dependency array;

2. What it does?
   A. So if we want something to be rendered after our component has been rendered then we will use this hook, the component will render first and then whatever we will pass inside this useeffect hook will be called

# Conditional Rendering

Rendering somehting on the basis of condition is known as conditional rendering
for example - Rendering Shimmer Ui until we get the real data to render

# What will happen when you update a state variable

When you update a state variable React quickly re-renders the whole componnet to get the updated data, re-render means it calls that component in which we are upating the state variable

# When using a usestate hook we destructure it and define 2 constants but we cant change the value of const variable, is'nt it?

Yes, you are right we can't change the value of const , but in react when we are updating a state variable, it will re-render/ call that component that means its creating a new const variable whenver the state variable changes but now we have defined its value which we pass from setstate variable. and then it compares to the initial state of that component with the latest one and calculate the diff between these two, and it will only update what is changed, this is nothing but react reconciliation algorithm
