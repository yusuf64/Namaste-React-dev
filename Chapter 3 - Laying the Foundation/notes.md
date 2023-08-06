**Chapter 3 - Laying the Foundation (6th August 23)**

# How can we create our own script to execute the parcel instead of writing the whole command?

- We can create our own script in package.json in script object, type the name you want to give to your script and the value will be the real command that is used to execute that packagge

- After creating your own script you can execute it by using this command
  `npm run your-command-name` OR `npm your-command-name`

- As you already know if we need to create a react element wecna use react.createlement and then it will take 3 arguments , now its easy when we are just creating an heading, but when we build a complex nested html, it will look cramped

- To avoid this React comes up with **JSX**

- With JSX we can create html element in javascript like the way we write html in normal .html file

- Note: JSX is not HTML inside JAVASCRIPT, JSX is different than HTML
- JSX has syntax like HTML/XML
  JSX stands for JavaScript XML. It is a syntax extension for JavaScript used primarily with React, a popular JavaScript library for building user interfaces. JSX allows developers to write XML-like code directly in JavaScript, making it easier to describe and create the structure of UI components in a more intuitive and expressive way.

Here's a detailed explanation of JSX:

XML-like Syntax: JSX resembles XML or HTML, allowing developers to write familiar HTML-like tags within their JavaScript code. These tags represent UI components or elements.

Embedding JavaScript Expressions: JSX allows developers to embed JavaScript expressions within curly braces {}. This enables dynamic content and the use of variables, functions, or other JavaScript expressions within the JSX code.

Creating React Elements: JSX is not directly rendered in the browser. Instead, it is transpiled by tools like Babel into standard JavaScript code that React can understand. JSX expressions are transformed into React elements, which are lightweight representations of the UI components.

Component Composition: In JSX, you can easily compose and nest components within each other, creating a component tree to build complex user interfaces.

JSX Attributes: Similar to HTML attributes, JSX supports passing props (properties) to components using attributes. For example, <Button color="red" onClick={handleClick}>Click me</Button>.

Class Names and Styles: Class names and inline styles can be applied in JSX just like in HTML.

Comments: You can add comments within JSX using the standard JavaScript comment syntax ({/_ Your comment here _/}).

Self-closing Tags: JSX supports self-closing tags for components without children, just like in HTML (<Component />).

<!-- SO IS JSX  a valid Javascript? -->
<!-- The answer is no, because the JS Engine only understand a pure javascript i.e Ecmascript and JSX is not a js Its a syntax to write html easily in js file, so the question is how JSX is then rendered? -->

-- Okay so whenver you write JSX it will before reaching to JS engine it is transpiled by Babel/Parcel to a standard javascript code and then it will go to JS engine to execute.

-- What do you mean by Transpiled ?

## Transpiled simply means converting the source code from one language to another while maintaning the same functionality, in React case JSX is converted into js code which browsers understand

-- What is Babel ?

## Babel is a Javascript Compiler that takes your JSX code and traspiles it.

-- How JSX Works ?

## JSX => ReactElement(converted by Babel) => React js Object => render(converted by ReactDOM) => HTML

-- How can we add attribute in JSX?

## In JSX we will write className instead of just class and everything we write as an attibute should be in camelCase

-- What if we want to write mulitple lines on jsx how can we write it?

## we must wrap our jsx inside () round brackets so that babel can understand that jsx is starting here and ending here.
