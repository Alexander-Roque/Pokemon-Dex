import * as React from "react"
import LoginForm from "./components/login-form"
import SignupForm from "./components/Signup-Form"


function App() {
  const [showLogin, setShowLogin] = React.useState(true);
  const handlerClick = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <h1>Welcome to Poke Collection</h1>
      {showLogin ? <LoginForm /> : <SignupForm />}
      <button onClick={handlerClick}>{showLogin ? "Create Account" : "Log In"}</button>
      <SignupForm />
    </div>
  )
}

export default App

// Pregunar al profesor porque el token no recibe la url, el post create no recibe el token de post login
//  ademas el repositorio no se encuentra https://github.com/codeableorg/poke-collection-c11
// Contruir por componentes la aplicacion
// estoy obteniendo un error 401, no puedo acceder al servidor para obtener los datos puede ser culpa de la url
// 1. Crear el usuario y asegurate que tu correo sea unico
// 2. Me devolvera un token que utilizaremos para logearnos, cambiendo el correo, password y el token
//3. El nuevo token me permitira acceder a las demas request debemos colocarlo al nivel global en raiway editando el token base


// hacer que funcione la creacion de usuario (signup), el login poder logearse
// y agregar los favoritos