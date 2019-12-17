import React, { Component } from "react";

class Index extends Component {
  render() {
    return (
      <div className="container-fluid mt-n6">
        <div className="header">
          <div className="container-fluid">
            <div className="header-body">
              <div className="row align-items-end">
                <div className="col">
                  <h1 className="header-title">
                    <b>PWA</b> (Progressive Web App) built with
                    <span style={{ fontFamily: "monospace" }}> Reactjs</span>,
                    <span style={{ fontFamily: "monospace" }}> Nodejs</span> and
                    <span style={{ fontFamily: "monospace" }}> MongoDB</span>
                  </h1>
                </div>
                <div className="col-auto" />
              </div>
            </div>
            <h2 style={{ textAlign: "center" }} className="m-5">
              Still Underconstruction
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
