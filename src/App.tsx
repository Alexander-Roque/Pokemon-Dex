import * as React from "react"
import Input from "./components/input";
import {login} from "./services/auth-service"


function App() {

  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  })

  function handlerSubmit (event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    console.log(formData)
    login(formData)
    .then(user => console.log(user))
    .catch(error => console.log(error))
  }

  function handlerChange (event:React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target;
    setFormData ({...formData, [name]: value})
  }

  return (
    <div>
      <h1>Welcome to Poke Collection</h1>
      <form onSubmit={handlerSubmit}>
        <Input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handlerChange}
        placeholder="example@gmail.com"
        label="Email"
         />
        <Input
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handlerChange}
        placeholder="******"
        label="Password"
         />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App

// Pregunar al profesor porque el token no recibe la url, el post create no recibe el token de post login
//  ademas el repositorio no se encuentra https://github.com/codeableorg/poke-collection-c11
// estoy obteniendo un error 401, no puedo acceder al servidor para obtener los datos puede ser culpa de la url