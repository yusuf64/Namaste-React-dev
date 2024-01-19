<!-- Chapter 12 - Lets Build our Store Date- 20 January 2024 -->

1. What is Redux?

- Redux is big javascript object that contains a lot of data and it is globally available. Its used to manage state of our components efficiently

2.  What is Slice in Redux?

- Slice in Redux store is nothing but data belongs to different components and to manage each state of the different compnents efficiently, eg: Cart data will have it own Slice, User login data will have its own slice etc.

3. How to Modify the data which is present in each Slice?

- to Modify the data which is present in the slice, you have to dispatch and action which will call a reducer fucntion which will modify the data present in the slice.

4. How to access the data which is present in the slice of Redux Store?

- For that we need to use a SELECTOR . using a Selector we can read this data and sent it any where ino ur component, This process is called as Subscribing to the store.

5. What is Subscribing to the store?

- Subscribing to store is nothing but in sync with the data of slice we are showing in a component. if the data of cart slice changes the component in which we are using that data will also change and to Subscribe we use a Selector.
