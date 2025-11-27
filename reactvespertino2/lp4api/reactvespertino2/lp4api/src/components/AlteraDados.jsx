import {useState} from 'react'

const AlteraDados = () => {
    const[numero, setNumero]= useState(15);
    let soma = 10;
    return(
        <div> 
            <p>Valor: {soma}</p>
            <button onClick={() => {soma = 15}}>Muda Valor!</button>

            <p>Valor: {numero}</p>
            <button onClick={() => setNumero(35)}>Muda Valor!</button>
        </div>
    )
}

export default AlteraDados 