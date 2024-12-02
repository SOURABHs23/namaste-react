import { Link } from "react-router-dom";
import { LOGO_LINK } from "../utils/constant";
import { useEffect, useState } from "react";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  useEffect(() => {
    // console.log("inside useeffect");
  }, []);

  // console.log("inside header");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_LINK} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home</Link>
            {/* <a href="/">Home</a> */}
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
