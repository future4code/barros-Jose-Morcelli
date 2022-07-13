import React from 'react'

const Etapa1=()=>{
    return(
        <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <p>1. Qual o seu nome?</p>
        <input></input>

        <p>2. Qual sua idade?</p>
        <input></input>

        <p>3. Qual o seu e-mail?</p>
        <input></input>

        <p>4. Qual a sua escolaridade?</p>
        <select>
            <option>Ensino médio incompleto</option>
            <option>Ensino médio completo</option>
            <option>Ensino Superior</option>
        </select>

        </div>

    )
}

export default Etapa1;