import React from "react";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root");
// const h1 = document.createElement("h1");
// h1.textContent = "hello js";
// root.append(h1);

{
  /* <div id="parent">
  <div id="child">
    <h1>this is h1</h1>
  </div>
</div>; */
}

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is h1 tag "),
    React.createElement("h1", {}, "this is h1 tag "),
  ])
);

console.log(heading);

const app = ReactDOM.createRoot(root);

app.render(heading);
