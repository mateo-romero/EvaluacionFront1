import React from "react";

import Data from "./data.json";

class Juego extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anterior: "1",
      historiaActual: "1",
    };
    this.deshacer.bind(this);
  }

  buscar = (id) => {
    return Data.find((a) => a.id === id);
  };

  deshacer = (anterior) => {
    this.setState({
      historiaActual: anterior,
    });
  };

  changeValue(numero, letra, anterior1) {
    // if (numero + letra === ("2a" || "2b")) {
    //   anterior1 = "1";
    // }
    this.setState({
      historiaActual: numero + letra,
      anterior: anterior1,
    });
  }

  render = () => {
    let actual2 = this.buscar(this.state.historiaActual);
    let anterior = this.state.historiaActual;

    return (
      <div className="layout">
        <div className={"historia"}>{actual2.historia}</div>
        <div className="opciones">
          <div className="opcion">
            <button
              className={
                this.state.historiaActual === "5a" ||
                this.state.historiaActual === "5b"
                  ? "hidden"
                  : "botones"
              }
              onClick={() =>
                this.changeValue(
                  parseInt(actual2.id.charAt(0)) + 1,
                  "a",
                  anterior
                )
              }
              value="A"
            >
              {actual2.opciones.a}
            </button>
          </div>
          <div className="opcion">
            <button
              className={
                this.state.historiaActual === "5a" ||
                this.state.historiaActual === "5b"
                  ? "hidden"
                  : "botones"
              }
              onClick={() =>
                this.changeValue(
                  parseInt(actual2.id.charAt(0)) + 1,
                  "b",
                  anterior
                )
              }
              value="B"
            >
              {actual2.opciones.b}
            </button>
          </div>
        </div>

        <button
          className={this.state.historiaActual === "1" ? "hidden" : "botones"}
          onClick={() => this.deshacer("1")}
        >
          Volver Inicio
        </button>
      </div>
    );
  };
  componentDidUpdate() {
    console.table(this.state);
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
}

export default Juego;
