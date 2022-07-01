import React from "react";

function Cabecalho(props) {
    return (
        <div className="imagem-container">
        <div>
            <img src={props.imagem}/>
            <h1>{props.texto}</h1>
        </div>
        </div>
    );
}

export default Cabecalho;