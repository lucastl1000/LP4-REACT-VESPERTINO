import {useState} from 'react'

const ListRender = () => {
    const [lista] = useState(["Lucas","Iara","João Pedro"]) 

    const [users , setUsers] = useState([
        {id:1 , nome: "Lucas" , idade: 26},
        {id:2 , nome: "Iara" , idade: 22},
        {id:3 , nome: "João Pedro" , idade: 21}
    ])

    const deleteAleatorio = () =>{
      const randomNumber = Math.floor(Math.random() * 4);

      setUsers((prevUsers) => {
        console.log(prevUsers);
        return prevUsers.filter((users) => randomNumber !== users.id)
      })
    };

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

      <button onClick={deleteAleatorio}>Deleta usuario aleatorio</button>
    </div>
  )
}

export default ListRender


