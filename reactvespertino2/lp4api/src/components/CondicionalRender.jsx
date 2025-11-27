import {useState} from 'react'

const CondicionalRender = () => {

    const [x] = useState(false);

    const [nome] = useState("João");
  return (
    <div>
      <h1>Comparação simples</h1>
      {x && <p>O x é verdadeiro</p>}
      {!x && <p>O x não é verdadeiro</p>}

      <h1>If ternário</h1>
        { nome === "Lucas" ? (
            <div>
                <p>O nome é Lucas</p>
            </div>
        ) : (
            <div>
                <p>O nome não é Lucas</p>
            </div>
        )}
    </div>
  )
}

export default CondicionalRender
