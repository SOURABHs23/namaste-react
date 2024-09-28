import React from "react";
import ReactDOM from "react-dom/client";
const root = document.getElementById("root");
import Body from "./src/components/Body";
import Header from "./src/components/Header";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const app = ReactDOM.createRoot(root);

app.render(<AppLayout />);
