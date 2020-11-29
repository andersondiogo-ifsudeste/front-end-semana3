import React, { Component } from "react";
import App from "./App";

class UsuarioEntrada extends Component {
  render() {
    return (
      
        <div>
          
          <form>
<table>
<tr>
    <td><h3>Texto:</h3></td>
    <td><textarea cols="50" rows="5" name="texto" onKeyDown="conta()" onKeyUp="conta()"></textarea></td>
</tr>
<tr>
    <td><h3>Caracteres:</h3></td>
    <td><input type="text" name = "caracteres" size = "10" ></input> </td>
</tr>
</table>
</form>
   <hr>
   
   </hr>
   
  </div>
       
    );
  }
}


export default UsuarioEntrada;