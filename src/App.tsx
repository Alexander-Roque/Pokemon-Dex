import * as React from "react"
import LoginForm from "./components/login-form"
import SignupForm from "./components/Signup-Form"
import { getUser } from "./services/User-service";
import AuthenticatedApp from "./AuthenticatedApp";
import UnathenticatedApp from "./UnathenticatedApp";
import { login } from "./services/auth-service";



function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(()=>{
    getUser().then(u=> setUser(u)).catch(error => console.log(error))
  }, [])

    function handleLogin(credentials) {
    login(credentials)
      .then((u) => setUser(u))
      .catch((error) => console.log(error));
  }

  return user ? <AuthenticatedApp /> : <UnathenticatedApp onLogin = {handleLogin} />
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