import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserNav from "./UserNav";


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light" id="topbar">
        <div className="container-fluid">
          <div className="col">
            {/* LOGO ----------------------------------------- */}
            <Link to="/" className="navbar-brand">
              <h2>iAlbum</h2>
            </Link>
          </div>
          <UserNav />
        </div>
      </nav>
    );
  }
}

export default Navbar;
