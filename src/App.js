import "./styles.css";

import React, { useState, Component } from "react";

import "material-icons";

document.body.style.margin = 0;
document.body.style.padding = 0;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { banner:  2};

    this.Inicio = this.Inicio.bind(this);
    this.quienes_somos = this.quienes_somos.bind(this);
    this.que_es_opper = this.que_es_opper.bind(this);
    this.por_que_opper = this.por_que_opper.bind(this);
    this.nuestro_equipo = this.nuestro_equipo.bind(this);
    this.opper_premiun = this.opper_premiun.bind(this);
    this.soporte = this.soporte.bind(this);
  }
  Inicio() {
    this.setState({ banner: 1 });
  }

  quienes_somos() {
    this.setState({ banner: 2 });
  }

  que_es_opper() {
    this.setState({ banner: 3 });
  }

  por_que_opper() {
    this.setState({ banner: 4 });
  }

  nuestro_equipo() {
    this.setState({ banner: 5 });
  }

  soporte() {
    this.setState({ banner: 6 });
  }

  opper_premiun() {
    this.setState({ banner: 7 });
  }

  Menubar() {
    return (
      <div className="App-Container">
        <div class="menu-container">
          <nav class="menu">
            <ul>
              <li>
                <a onClick={this.Inicio} href="#">
                  <h5>Inicio</h5>
                </a>
              </li>
              <li>
                <a href="#">
                  <h5>Acerca de Opper</h5>
                </a>
                <ul class="submenu">
                  <li>
                    <a onClick={this.quienes_somos} href="#">
                      <h5>¿Quienes somos?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.que_es_opper} href="#">
                      <h5>¿Que es Opper?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.por_que_opper} href="#">
                      <h5>¿Por que Opper?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.nuestro_equipo} href="#">
                      <h5>Nuestro equipo</h5>
                    </a>
                  </li>
                </ul>{" "}
              </li>
              <li>
                <a href="#">
                  <h5>Servicios</h5>
                </a>
                <ul class="submenu">
                  <li>
                    <a onClick={this.opper_premiun} href="#">
                      <h5>Opper premium</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.soporte} href="#">
                      <h5>Soporte</h5>
                    </a>
                  </li>
                </ul>{" "}
              </li>
            </ul>
          </nav>
          <div className="Logo-Opper">
            <h2>OPPER</h2>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.banner === 1) {
      return (
        <div className="Inicio-Container">
          <div className="App-Container">
            <div class="menu-container">
              <nav class="menu">
                <ul>
                  <li>
                    <a onClick={this.Inicio} href="#">
                      <h5>Inicio</h5>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <h5>Acerca de Opper</h5>
                    </a>
                    <ul class="submenu">
                      <li>
                        <a onClick={this.quienes_somos} href="#">
                          <h5>¿Quienes somos?</h5>
                        </a>
                      </li>
                      <li>
                        <a onClick={this.que_es_opper} href="#">
                          <h5>¿Que es Opper?</h5>
                        </a>
                      </li>
                      <li>
                        <a onClick={this.por_que_opper} href="#">
                          <h5>¿Por que Opper?</h5>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h5>Nuestro equipo</h5>
                        </a>
                      </li>
                    </ul>{" "}
                  </li>
                  <li>
                    <a href="#">
                      <h5>Servicios</h5>
                    </a>
                    <ul class="submenu">
                      <li>
                        <a onClick={this.opper_premiun} href="#">
                          <h5>Opper premium</h5>
                        </a>
                      </li>
                      <li>
                        <a onClick={this.soporte} href="#">
                          <h5>Soporte</h5>
                        </a>
                      </li>
                    </ul>{" "}
                  </li>
                </ul>
              </nav>
              <div className="Logo-Opper">
                <h2>OPPER</h2>
              </div>
            </div>
          </div>

          <div className="Login-Container">
            <h2>Somos Opper</h2>
            <h4>El tiempo se acaba, no dejes que pase</h4>
            <div className="Button-Container">
              <button>Empezar</button>
              </div>
            
          </div>
        </div>
      );
    }

    if (this.state.banner === 2) {
      return (
        <div className="App-Container">
        <div class="menu-container">
          <nav class="menu">
            <ul>
              <li>
                <a onClick={this.Inicio} href="#">
                  <h5>Inicio</h5>
                </a>
              </li>
              <li>
                <a href="#">
                  <h5>Acerca de Opper</h5>
                </a>
                <ul class="submenu">
                  <li>
                    <a onClick={this.quienes_somos} href="#">
                      <h5>¿Quienes somos?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.que_es_opper} href="#">
                      <h5>¿Que es Opper?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.por_que_opper} href="#">
                      <h5>¿Por que Opper?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.nuestro_equipo} href="#">
                      <h5>Nuestro equipo</h5>
                    </a>
                  </li>
                </ul>{" "}
              </li>
              <li>
                <a href="#">
                  <h5>Servicios</h5>
                </a>
                <ul class="submenu">
                  <li>
                    <a onClick={this.opper_premiun} href="#">
                      <h5>Opper premium</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.soporte} href="#">
                      <h5>Soporte</h5>
                    </a>
                  </li>
                </ul>{" "}
              </li>
            </ul>
          </nav>
          <div className="Logo-Opper">
            <h2>OPPER</h2>
          </div>
        </div>
        <div className="quienes-somos">
          <div className="title-2">
            <h2>¿Quienes somos?</h2>
            
          </div>
          <div className="description-2"></div>
              </div>
      </div>
      );
    }

    if (this.state.banner === 3) {
      return (
        <div className="App-Container">
        <div class="menu-container">
          <nav class="menu">
            <ul>
              <li>
                <a onClick={this.Inicio} href="#">
                  <h5>Inicio</h5>
                </a>
              </li>
              <li>
                <a href="#">
                  <h5>Acerca de Opper</h5>
                </a>
                <ul class="submenu">
                  <li>
                    <a onClick={this.quienes_somos} href="#">
                      <h5>¿Quienes somos?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.que_es_opper} href="#">
                      <h5>¿Que es Opper?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.por_que_opper} href="#">
                      <h5>¿Por que Opper?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.nuestro_equipo} href="#">
                      <h5>Nuestro equipo</h5>
                    </a>
                  </li>
                </ul>{" "}
              </li>
              <li>
                <a href="#">
                  <h5>Servicios</h5>
                </a>
                <ul class="submenu">
                  <li>
                    <a onClick={this.opper_premiun} href="#">
                      <h5>Opper premium</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.soporte} href="#">
                      <h5>Soporte</h5>
                    </a>
                  </li>
                </ul>{" "}
              </li>
            </ul>
          </nav>
          <div className="Logo-Opper">
            <h2>OPPER</h2>
          </div>
        </div>
      </div>
      );
    }

    if (this.state.banner === 4) {
      return (
        <div className="App-Container">
        <div class="menu-container">
          <nav class="menu">
            <ul>
              <li>
                <a onClick={this.Inicio} href="#">
                  <h5>Inicio</h5>
                </a>
              </li>
              <li>
                <a href="#">
                  <h5>Acerca de Opper</h5>
                </a>
                <ul class="submenu">
                  <li>
                    <a onClick={this.quienes_somos} href="#">
                      <h5>¿Quienes somos?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.que_es_opper} href="#">
                      <h5>¿Que es Opper?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.por_que_opper} href="#">
                      <h5>¿Por que Opper?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.nuestro_equipo} href="#">
                      <h5>Nuestro equipo</h5>
                    </a>
                  </li>
                </ul>{" "}
              </li>
              <li>
                <a href="#">
                  <h5>Servicios</h5>
                </a>
                <ul class="submenu">
                  <li>
                    <a onClick={this.opper_premiun} href="#">
                      <h5>Opper premium</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.soporte} href="#">
                      <h5>Soporte</h5>
                    </a>
                  </li>
                </ul>{" "}
              </li>
            </ul>
          </nav>
          <div className="Logo-Opper">
            <h2>OPPER</h2>
          </div>
        </div>
      </div>
      );
    }

    if (this.state.banner === 5) {
      return (
        <div className="App-Container">
        <div class="menu-container">
          <nav class="menu">
            <ul>
              <li>
                <a onClick={this.Inicio} href="#">
                  <h5>Inicio</h5>
                </a>
              </li>
              <li>
                <a href="#">
                  <h5>Acerca de Opper</h5>
                </a>
                <ul class="submenu">
                  <li>
                    <a onClick={this.quienes_somos} href="#">
                      <h5>¿Quienes somos?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.que_es_opper} href="#">
                      <h5>¿Que es Opper?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.por_que_opper} href="#">
                      <h5>¿Por que Opper?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.nuestro_equipo} href="#">
                      <h5>Nuestro equipo</h5>
                    </a>
                  </li>
                </ul>{" "}
              </li>
              <li>
                <a href="#">
                  <h5>Servicios</h5>
                </a>
                <ul class="submenu">
                  <li>
                    <a onClick={this.opper_premiun} href="#">
                      <h5>Opper premium</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.soporte} href="#">
                      <h5>Soporte</h5>
                    </a>
                  </li>
                </ul>{" "}
              </li>
            </ul>
          </nav>
          <div className="Logo-Opper">
            <h2>OPPER</h2>
          </div>
        </div>
      </div>
      );
    }

    if (this.state.banner === 6) {
      return (
        <div className="App-Container">
        <div class="menu-container">
          <nav class="menu">
            <ul>
              <li>
                <a onClick={this.Inicio} href="#">
                  <h5>Inicio</h5>
                </a>
              </li>
              <li>
                <a href="#">
                  <h5>Acerca de Opper</h5>
                </a>
                <ul class="submenu">
                  <li>
                    <a onClick={this.quienes_somos} href="#">
                      <h5>¿Quienes somos?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.que_es_opper} href="#">
                      <h5>¿Que es Opper?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.por_que_opper} href="#">
                      <h5>¿Por que Opper?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.nuestro_equipo} href="#">
                      <h5>Nuestro equipo</h5>
                    </a>
                  </li>
                </ul>{" "}
              </li>
              <li>
                <a href="#">
                  <h5>Servicios</h5>
                </a>
                <ul class="submenu">
                  <li>
                    <a onClick={this.opper_premiun} href="#">
                      <h5>Opper premium</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.soporte} href="#">
                      <h5>Soporte</h5>
                    </a>
                  </li>
                </ul>{" "}
              </li>
            </ul>
          </nav>
          <div className="Logo-Opper">
            <h2>OPPER</h2>
          </div>
        </div>
      </div>
      );
    }

    if (this.state.banner === 7) {
      return (
        <div className="App-Container">
        <div class="menu-container">
          <nav class="menu">
            <ul>
              <li>
                <a onClick={this.Inicio} href="#">
                  <h5>Inicio</h5>
                </a>
              </li>
              <li>
                <a href="#">
                  <h5>Acerca de Opper</h5>
                </a>
                <ul class="submenu">
                  <li>
                    <a onClick={this.quienes_somos} href="#">
                      <h5>¿Quienes somos?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.que_es_opper} href="#">
                      <h5>¿Que es Opper?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.por_que_opper} href="#">
                      <h5>¿Por que Opper?</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.nuestro_equipo} href="#">
                      <h5>Nuestro equipo</h5>
                    </a>
                  </li>
                </ul>{" "}
              </li>
              <li>
                <a href="#">
                  <h5>Servicios</h5>
                </a>
                <ul class="submenu">
                  <li>
                    <a onClick={this.opper_premiun} href="#">
                      <h5>Opper premium</h5>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.soporte} href="#">
                      <h5>Soporte</h5>
                    </a>
                  </li>
                </ul>{" "}
              </li>
            </ul>
          </nav>
          <div className="Logo-Opper">
            <h2>OPPER</h2>
          </div>
        </div>
      </div>
      );
    }
  }
}

export default Login;
