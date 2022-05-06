import React, { Component } from "react";
import CrearEstudiante from "./CrearEstudiante";
import Cursos from "./Cursos";
import Estudiante from "./Estudiante";
import Welcome from "./Welcome";
import { Container } from "react-bootstrap";

export default class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className="body">
        {this.props.itemClicked === 0 && <Welcome />}
        {this.props.itemClicked === 1 && <Cursos />}
        {this.props.itemClicked === 2 && (
          <Estudiante inputValue={this.props.imputValue} />
        )}
        {this.props.itemClicked === 3 && <CrearEstudiante />}
      </Container>
    );
  }
}
