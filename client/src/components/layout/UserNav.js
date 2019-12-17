import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";


class UserNav extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const isMobile = window.innerWidth <= 600;
    const { user } = this.props.auth;
    if (this.props.auth.isAuthenticated) {
      return (
        <div className="row mr-1">
          {/* SEARCH BUTTON ----------------------------------------- */}
          <div className="nav-link">
            Hello {user.email} 👏
          </div>          
          
          {/* SIGN OUT BUTTON ----------------------------------------- */}
          <button onClick={this.onLogoutClick} className="btn btn-primary">
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div className="row mr-1">
          {/* SIGN IN BUTTON ----------------------------------------- */}
          <Link to="/login" className="nav-link">
            Sign In
          </Link>
          {/* SIGN UP BUTTON ----------------------------------------- */}
          <Link to="/register" className="btn btn-primary">
            Sign Up
          </Link>
        </div>
      );
  }
}
}

UserNav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(UserNav);
