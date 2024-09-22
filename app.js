import React from "react";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root");

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="kk"
        src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
      />
      <h3> sourabh food</h3>
      <h4> chilly potato</h4>
      <h4> 4.star</h4>
      <h4> 38 minutes </h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search </div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

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
