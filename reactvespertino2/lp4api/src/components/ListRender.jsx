import {useState} from 'react'

const ListRender = () => {

    const [lista] = useState(["Lucas","Iara","João Pedro"]) 

    const [users] = useState([
        {id:1923 , nome: "Lucas" , idade: 26},
        {id:8912 , nome: "Iara" , idade: 22},
        {id:1892 , nome: "João Pedro" , idade: 21}
    ])

  return (
    <div>
      <ul>
        {lista.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
            <li key = {user.id}>{user.nome} - {user.idade}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListRender


