import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Fun from './list';


const root = ReactDOM.createRoot(document.getElementById('root'));



// render needs a object of html element it is ok to pass reactElement in render method
// const reactElement = (
//   <a href="https://www.youtube.com" target="_blank">click here</a>
// )
const reactElement1=React.createElement(
  'p',
  {className:'paragraph'},
  'click here for google'
);
//this is the custom rendering 
root.render(
//   //its ok to pass like this int the render method because app and fun is method, always make method startingg Upper case
//   // <React.StrictMode>
//     // <App />,
//     // <Fun />,
//     // App(),
//     // Fun(),
//     reactElement
   reactElement1
//   // {/* </React.StrictMode> */}
);

