# --------- Chapter 9 - Optimising our App -------------#

1. What is SRP(single responsibility principle)?

# The single responsibility principle (SRP) is a fundamental concept in software design. It states that every class, module, or function in a program should have one responsibility or purpose.

bonus - Hooks are just utility functions

2. How to create your own custom hooks ?

# We can create our own custom hooks just by creating them like a normal component js file it is recommended to use keyword 'use' ex: useData.js

# After creating our own custom hooks we can abstract a lot of logic

# we can return the variables after creating the hooks so that we use them wherever we wants

# for example : const {data, setData} = useFetch(props)

3. What is Code Splitting or Chunking?

# Whenever we create a file for production the bundlers bundles everything and creates a single file

# if we have a lot of js files, the size of that one compiled and minified files will be much greater.

# to avoid large mb of file we split or chunk the files into seperate files as needed this process is known as chunking or code splitting.

# using these process we will reduce the load time of the website and we will load the files as needed.

# this process is also known as dynamic bundling, lazy loading, on demand loading etc.

4. How can we use lazy loading in React and how it will help?

# We can use Lazy Loading In REact by Using a function given by React known as lazy

- lazy()

- it will take a callback function as an arugment

- lazy(()=> import('pathofthecompnoent'))

- in that callback function we will dynamically import the component by writng the path.

- we have to use Suspense also, which is given to use by React to render a fallback compenent when the react is sending request for the desired file.

- if we dont use suspense then we will get an error

- we can wrap our component inside <Suspend fallback={component}> c<Suspend/>

- Fallback is nothing but a backup of what should be render when the code of the desired component is not available or while we are waitng to get the response form the server
