function ContadorFuncaoComEstado({ valor, setValor }) {
    function incrementar() {
        setValor(valor + 1);
    }

    return (
        <div>
            <h2>Contador Função com Estado</h2>
            <p>Valor: {valor}</p>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    );
}
export default ContadorFuncaoComEstado;