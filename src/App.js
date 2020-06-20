import "./styles.css";

import React, { useState, Component } from "react";

import "material-icons";

document.body.style.margin = 0;
document.body.style.padding = 0;

class Login extends React.Component {
  render() {
    return (
      <div className="Login-menu-Container">
        <nav className="#d-flex">
          <div className="Login-bar d-flex justify-content-center">
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            />
            <a href="#" className="Login-menu">
              <li>
                {" "}
                <h5>Inicio</h5>{" "}
              </li>
            </a>
            <a a href="#" className="Login-menu">
              {" "}
              <li>
                {" "}
                <h5>Acerca de Opper </h5>
                <div className="icon">
                  <span class="material-icons">expand_more</span>
                </div>
              </li>
            </a>
            <a href="#" className="Login-menu">
              <li>
                {" "}
                <h5>Servicios</h5>
              </li>
            </a>
          </div>
        </nav>

        <div className="background-1" />
      </div>
    );
  }
}

export default Login;
