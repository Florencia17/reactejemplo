import React, { Component } from "react";
import "./Cursos.css";

export default class Cursos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursos: [],
      estudiantes: [],
      resp: "",
    };

    this.listarTodo = this.listarTodo.bind(this);
    this.listarCursoEstudiante = this.listarCursoEstudiante.bind(this);
  }

  listarTodo() {
    fetch("/cursos.json")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          cursos: json.cursos,
          resp: json.result,
        });
      });
    console.log("cursos: " + this.state.cursos);
  }

  listarCursoEstudiante() {
    fetch("/estudiantes.json?apellido=Malacarne")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          cursos: json.estudiantes[0].cursos,
          estudiante:
            json.estudiantes[0].nombre + " " + json.estudiantes[0].apellido,
          resp: json.result,
        });
      });
    console.log("curso estudiante: " + this.state.cursos);
  }

  render() {
    return (
      <div className="estiloCurso">
        <button onClick={this.listarTodo}>Listar Todo</button>
        <button onClick={this.listarCursoEstudiante}>
          Listar Curso de Malacarne
        </button>
        <p>
          {this.state.estudiante ? "Estudiante: " + this.state.estudiante : ""}
        </p>
        <h3>Cursos</h3>
        <table border="1">
          <thead>
            <tr>
              <th>id</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cursos.map((c, index) => (
              <tr key={index}>
                <td>{c.id}</td>
                <td>{c.curso} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
