import React, { Component } from 'react';

class ContadorClasseComEstado extends Component {
    incrementar = () => {
        this.props.setValor(this.props.valor + 1);
    };

    render() {
        return (
            <div>
                <h2>Contador Classe com Estado</h2>
                <p>Valor: {this.props.valor}</p>
                <button onClick={this.incrementar}>Incrementar</button>
            </div>
        );
    }
}

export default ContadorClasseComEstado;