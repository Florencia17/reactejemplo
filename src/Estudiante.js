import React, { Component } from 'react'; 
import "./Estudiante.css"; 


export default class Estudiante extends Component {
  render() {
      
      let objet = {
        nombre: "Florencia",
        apellido: "Malacarne",
      };
    return (
      <div>
        <p className='estilo'>{objet.nombre + " " + objet.apellido}</p>      
      </div>
    )
  }
}
