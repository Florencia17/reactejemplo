import React, { Component } from "react";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default class Estudiante extends Component {
  constructor(props) {
    super(props);
    this.cargarCurso = this.cargarCurso.bind(this);
    this.listarEstudiantes = this.listarEstudiantes.bind(this);

    this.state = {
      estudiantes: [],
      cursos: [{ nombre: "Termodinamica", horas: "15" }],
      listaCursos: [
        { nombre: "Fisica", horas: "20" },
        { nombre: "Electrotecnia", horas: "10" },
        { nombre: "Matematica", horas: "30" },
        { nombre: "Estatica", horas: "15" },
        { nombre: "Hidroestatica", horas: "10" },
      ],
      result: "",
    };
  }

  cargarCurso() {
    this.setState((state) => ({
      cursos: [
        ...state.cursos,
        state.listaCursos[Math.floor(Math.random() * 5)],
      ],
    }));
  }

  listarEstudiantes(inputValue) {
    fetch("/estudiantes.json?apellido=" + inputValue)
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          estudiantes: json.estudiantes,
          result: json.result,
        });
      });
    console.log(this.state.estudiantes);
  }

  componentDiUpdate(prevProps, prevState) {
    if (prevProps.inputValue !== this.props.inputValue)
      this.listarEstudiantes(this.props.inputValue);
  }

  componentDidMount() {
    this.listarEstudiantes(this.props.inputValue);
  }

  render() {
    return (
      <div>
        //PONER NOMBRE ALUMNO
        <Table striped bordered hover>
          <thead>
            <th>Curso</th>
            <th>Cantidad de Hs</th>
          </thead>
          <tbody>
            {this.state.cursos.map((c, index) => (
              <tr>
                <td>{c.nombre}</td>
                <td>{c.horas} horas semanales</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={this.cargarCurso}>inscribirme</Button>
        <h3>Estudiantes</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody>
            {this.state.estudiantes.map((e, index) => (
              <tr>
                <td>{e.nombre}</td>
                <td>{e.apellido} </td>
                <td>
                  {e.cursos
                    .map((c) => c.curso)
                    .reduce((acumulador, c) => acumulador + ", " + c)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
