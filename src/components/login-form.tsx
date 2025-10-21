import * as React from "react"
import Input from "./input";

const LoginForm = ({onLogin}) => {
    const [formData, setFormData] = React.useState({
        email: "",
        password: ""
      })
    
      function handlerSubmit (event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log("onLogin:", onLogin)
        if(typeof onLogin === "function") {
          onLogin(formData);
        } else {
          console.error("onLogin no es una función")
        }
      }
    
      function handlerChange (event:React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setFormData ({...formData, [name]: value})
      }
    return (
        <div>
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
    )
}
export default LoginForm