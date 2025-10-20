import * as React from "react"


function App() {
  // const [email, setEmail] = React.useState ("")
  // const [password, setPassword] = React.useState("")
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  })

  function handlerSubmit (event){
    event.preventDefault();
    console.log(formData)
  }

  function handlerChange (event) {
    const {name, value} = event.target;
    // console.log({name, value})
    setFormData ({...formData, [name]: value})
  }

  return (
    <div>
      <h1>Welcome to Poke Collection</h1>
      <form onSubmit={handlerSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handlerChange}
            placeholder="example@mail.com"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handlerChange}
            placeholder="******"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App

// Pregunar al profesor porque el token no recibe la url, el post create no recibe el token de post login
//  ademas el repositorio no se encuentra https://github.com/codeableorg/poke-collection-c11