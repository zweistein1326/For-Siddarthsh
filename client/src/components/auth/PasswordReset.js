import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class PasswordReset extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to Homepage
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
        <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-5 col-xl-4 my-5">
                  <h1 className="display-4 text-center mb-3">
                    Password reset
                  </h1>
                  <p className="text-muted text-center mb-5">
                    Enter your email to get a password reset link.
                  </p>
                  <form>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" className="form-control" placeholder="name@address.com" />
                    </div>
                    <button className="btn btn-lg btn-block btn-primary mb-3">
                      Reset Password
                    </button>
                    <div className="text-center">
                      <small className="text-muted text-center">
                        Remember your password? <Link to="login">Log in</Link>.
                      </small>
                    </div>
                  </form>
                </div>
              </div>
            </div>
    );
  }
}




PasswordReset.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { }
)(PasswordReset);
