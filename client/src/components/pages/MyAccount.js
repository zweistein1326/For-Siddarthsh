import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class MyAccount extends Component {
  render() {
    const { user } = this.props.auth;
      return (
        <div className="main-content bg-fixed-bottom">
          <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light" id="sidebar">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="sidebarCollapse">
                <ul class="navbar-nav mb-md-4">
                  <li class="nav-item">
                    <a class="nav-link " href="/getalbum/0">
                    My Album
                    </a>
                    
                  </li>
              </ul>
              </div>
              </div>
          </nav>
          
              <div className="container lt-10">
                 <div className="col-12 col-lg-6 col-xl">
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col">
                       <h6 className="card-title text-uppercase text-muted mb-2">
                       Budget
                       </h6>
                       <span className="h2 mb-0">
                       $24,500
                       </span>
                       <span className="badge badge-soft-success mt-n1">
                        +3.5%
                       </span>
                      </div>
                      <div className="col-auto">
                       <span className="h2 fe fe-dollar-sign text-muted mb-0"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
  }
}

MyAccount.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(MyAccount);
