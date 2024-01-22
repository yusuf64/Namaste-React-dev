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

Extra notes:

- In earlier version of Vanilla Redux we cant directly mutate the state , we have to create a copy of the state and we have to mutate that new
  variable wchih we have created.

- But in latest react redux we dont have to do it manually , Reduxt will take care of all things by using somthing Known as IMMER js

- Immer js will help you to work with immutable state by creating a copy of the state that you want to mutate and then only the differences will be implemented efficiently, now earlier we use to write all this code by hand but now by using Immer js we dont have to worry about mutating the original state.

- This is how Immer Works
  How Immer works
  The basic idea is that with Immer you will apply all your changes to a temporary draft, which is a proxy of the currentState. Once all your mutations are completed, Immer will produce the nextState based on the mutations to the draft state. This means that you can interact with your data by simply modifying it while keeping all the benefits of immutable data.

immer-hd.png

Using Immer is like having a personal assistant. The assistant takes a letter (the current state) and gives you a copy (draft) to jot changes onto. Once you are done, the assistant will take your draft and produce the real immutable, final letter for you (the next state).

Head to the next section to further dive into produce.
