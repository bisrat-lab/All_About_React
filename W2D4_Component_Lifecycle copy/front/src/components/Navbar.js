import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new-book">Add Book</Link>
        </li>
        {!localStorage.getItem("accessToken") && (
          <React.Fragment>
            <li>
              <Link to="/login">LogIn</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </React.Fragment>
        )}

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
