import React, { Component } from 'react';

class ContadorClasseSemEstado extends Component {
  render() {
    return (
      <div>
        <h1>Contador (Classe Sem Estado)</h1>
        <p>Valor: {this.props.valor}</p>
        <button>Incrementar</button>
      </div>
    );
  }
}

export default ContadorClasseSemEstado;