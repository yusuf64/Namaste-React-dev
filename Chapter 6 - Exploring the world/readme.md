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
