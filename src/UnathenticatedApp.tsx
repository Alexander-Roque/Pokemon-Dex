import * as React from "react"
import LoginForm from "./components/login-form"
import SignupForm from "./components/Signup-Form"



const UnathenticatedApp = ({onLogin, onSignup}) => {
  const [showLogin, setShowLogin] = React.useState(true);
  const handlerClick = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <h1>Welcome to Poke Collection</h1>
      {showLogin ? <LoginForm onLogin={onLogin} /> : <SignupForm onSignup={onSignup}/>}
      <button onClick={handlerClick}>{showLogin ? "Create Account" : "Log In"}</button>
    </div>
  )
}

export default UnathenticatedApp