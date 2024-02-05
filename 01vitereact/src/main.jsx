import React from "react";
import ReactDOM from "react-dom/client";
// import{jsx as _jsk} from "react/jsx-runtime.js";
import App from "./App.jsx";

function Myapp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}
// const reactElement = {
//   type:'a',
//   props: {
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target = '_blank'>Visit Google </a>
)
const anotherUser = "How are You!"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me to Visit Google,',
  // anotherElement
  anotherUser
)


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    // <App/>
  //   <Myapp/>
  //   </React.StrictMode>,
  // anotherElement  
    reactElement
)
