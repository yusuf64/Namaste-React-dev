**\*\***\*\*\***\*\*** CHAPTER 4 - TALK IS CHEAP (15th August 2023) **\*\***\*\*\***\*\***

- So we will build a Food delivery app, so lets plan what are the component we need to create to build our App

-- Header - logo - Nav Links
-- Body - Search Bar - Card Container - Card
-- Footer - Copyright - Navlinks

- What if we want to add inline styles, how can we do this in React JSX

- We can create a object first and then that object we will use style={Objectname}

- This is the two way to write styles
  const stylecard = {
  backgroundColor: "blue",
  color: "white",
  };

const RestaurantCard = () => {
return (

<div className="res-card" style={stylecard}>
<h3>Nawab Seekh Paratha</h3>
<p style={{ color: "red" }}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, esse
animi? Delectus aspernatur quo ipsam dignissimos atque odit eum, illo
doloribus itaque dolorum facere exercitationem sed possimus ratione
placeat hic?
</p>
</div>
);
};

-- What is PROPS?

## A: props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic. in simple words props are nothing but a simple javascript argument that we pass to javascript function

## in React when we use prop in component it is known as passing a props to that component and when we pass props, it will be stored in a JS object that we can use in our component

## So basically whatever props you will pass in a component, it will be stored in an object and we can use that props using props.propname

## so whenever you want to pass a dynamic data to your funcitonal component you will pass props to that component

## you can also destructure the props on the fly

example: function({propname1, propname2}) insteaf of this function(props)

Q. What is Config Driven UI?
Config Driven UI are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic. It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort. A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.

basically all the ui which is depend on data configuration is nothing but a config driven UI, SO Our UI will change according to the data we recieve from backend api data configuration

# One more important thing whenver you write a child compoentnt it should must have a unique key property, so during optimisation or rerendering react will only re render those child components which have a new key, this way it will understood about the old react child , and new child so instead of re rendering every react component it will render only the new child with new key

# if you dont have any unique values to pass in keys you can pass index as a second argument in map function, but it is not recommended to use index .
