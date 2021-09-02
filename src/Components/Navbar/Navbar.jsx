import React from "react";
import "./style.scss";

import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../../Assets/Images/Logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div className="navbar">
      <Link to="/">
        <img src={Logo} alt="Crypto Port" />
      </Link>

      <div className="searchBar">
        <i className="ri-search-line"></i>
        <input type="text" placeholder="Search" />
      </div>

      <div className="extra">
        {isAuthenticated ? (
          <div>
            <button>Profile</button>
            <button onClick={() => logout()}>Logout</button>
          </div>
        ) : (
          <button onClick={() => loginWithRedirect()}>
            <i className="ri-fingerprint-fill"></i> <span>Authenticate</span>
          </button>
        )}
      </div>
    </div>
  );
}
