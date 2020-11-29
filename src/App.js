import React, { Component } from "react";
import UsuarioEntrada from "./UsuarioEntrada";
import Channel from './Channel' 

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { usu: "Anderson Diogo do Nascimento" };
  }

  onChangeUsuario = (parametroUsuario) => {
    this.setState({
      usu: parametroUsuario
    });
  }

  render() { 
    return (
      <div>
        <center>
          <h1>Contador de Caracteres</h1>
          
          <UsuarioEntrada usu={ this.state.usu } onChangeUsuario={ this.onChangeUsuario }  />     
        </center>
       <div className="App">
         <center><Channel /></center>
         <hr>
         </hr>
       </div>
      </div>    
     

    ); 
  };
}

export default App;

