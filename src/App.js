import "./styles.css";

import React, { useState, Component } from "react";

import "material-icons";

document.body.style.margin = 0;
document.body.style.padding = 0;

class Login extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {submenu:false}

    this.state = {inicio:true}
    this.state = {quienes_somos:true}

    this.handleClick = this.handleClick.bind(this);
    this.ComponentChange = this.ComponentChange.bind(this);
  
    }
    handleClick(){
      this.setState({submenu:true})
    }
  
    ComponentChange(){
      this.setState({submenu:false})
    }
  render() {
    return (
      
      <div className="Menu-Container">
        
        
        <nav className="Menu">
          <ul>
       
            <li><a href="#"><h5>Inicio</h5></a></li>
            <li><a href="#"><h5>Acerca de Opper</h5></a>
            <ul>
            
            <li><a href="#"><h5>¿Quienes somos?</h5></a></li>
            <li><a href="#"><h5>¿Que es Opper?</h5></a></li>
            <li><a href="#"><h5>¿Por que Opper?</h5></a></li>
            <li><a href="#"><h5>Nuestro equipo</h5></a></li>
            </ul>
            
            </li>

            <li><a href="#"><h5>Servicios</h5></a>
            
            <ul>
            <li><a href="#"><h5>Opper premium</h5></a></li>
            <li><a href="#"><h5>Soporte</h5></a></li>
          
            </ul>
            
            </li>
          
          
          </ul>
          </nav>
          <div>
            <h2>OPPER</h2>
            </div>        
      </div>
      
    );
  }
}

export default Login;
