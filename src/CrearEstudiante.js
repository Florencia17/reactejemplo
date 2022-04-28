import React, { Component } from "react";
import "./CrearEstudiante.css";

export default class CrearEstudiante extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      form: {
        nombre: "",
        apellido: "",
        curso: "",
      },
      resultado: "",
      cursos: [],
    };
  }

  handleChange(e) {
    let nombre = e.target.name;
    let valor = e.target.value;
    this.setState((state) => ({
      form: {
        ...state.form,
        [nombre]: valor,
      },
    }));
  }
  handleSubmit(e) {
    e.preventDefault();
    fetch("/estudiantes.json", {
      method: "POST",
      body: JSON.stringify({
        nombre: this.state.form.nombre,
        apellido: this.state.form.apellido,
        cursos: [this.state.form.curso],
      }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.result === "error") {
          this.setState({
            resultado: json.message,
          });
          return;
        }
        this.setState({
          resultado: "El estudiante ha sido creado con exito",
        });
      });
    console.log(this.state.form.curso);
  }
  componentDidMount() {
    fetch("/cursos.json")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          cursos: json.cursos,
          respuesta: json.result,
        });
      });
  }

  render() {
    return (
      <div className="estiloCrearEstudiante">
        <form>
          <label>
            Nombre
            <input
              type="text"
              name="nombre"
              value={this.state.form.nombre}
              onChange={this.handleChange}
            />
          </label>
          <label>
            apellido
            <input
              type="text"
              name="apellido"
              value={this.state.form.apellido}
              onChange={this.handleChange}
            />
          </label>
          <label>curso </label>
          <select name="curso" onChange={this.handleChange}>
            {this.state.cursos.map((c) => (
              <option value={c.id}>{c.curso}</option>
            ))}
          </select>

          <button type="submite" onClick={this.handleSubmit}>
            Enviar
          </button>
        </form>
        <p>{this.state.resultado}</p>
      </div>
    );
  }
}
