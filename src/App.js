import "./styles.css";

import React, { useState, Component } from "react";

import "material-icons";

document.body.style.margin = 0;
document.body.style.padding = 0;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { submenu: false };
    

    this.handleClick = this.handleClick.bind(this);
    this.ComponentChange = this.ComponentChange.bind(this);
  }
  handleClick() {
    this.setState({ submenu: true });
  }

  ComponentChange() {
    this.setState({ submenu: false });
  }
  render() {
    return (
      <div>
        {this.state.submenu ? (
          <div>
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
                  <a
                    onClick={this.ComponentChange}
                    href="#"
                    className="Login-menu"
                  >
                    {" "}
                    <li>
                      <div className="color-text">
                        <h5>Acerca de Opper </h5>
                      </div>
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
            </div>

            <div className="submenu-padding">
              <h5 className="submenu-text">¿Qué es Opper?</h5>
              <hr />
              <h5 className="submenu-text">Nuestro equipo</h5>
              <hr />
              <h5 className="submenu-text">¿Por qué Opper?</h5>
            </div>
          </div>
        ) : (
          <div>
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
                  <a onClick={this.handleClick} href="#" className="Login-menu">
                    {" "}
                    <li>
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
            </div>
            <div className="Banner-Change" />
          </div>
        )}
      </div>
    );
  }
}

export default Login;
