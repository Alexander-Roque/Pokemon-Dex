import * as React from "react"
// import { login } from "../services/auth-service";
// import { createUser } from "../services/User-service";
import Input from "./input";

const SignupForm = ({onSignup}) => {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
    })
    function handlerSubmit (event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        // console.log(formData)
        onSignup(formData)
        .then(user => console.log(user))
        .catch(error => console.log(error))
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
         <Input 
         name= "first_name"
         value= {formData.first_name}
         onChange={handlerChange}
         label="First name"
         />
          <Input 
         name= "last_name"
         value= {formData.last_name}
         onChange={handlerChange}
         label="Last name"
         />
        <button type="submit">Create Account</button>
      </form>
    </div>
    )
}
export default SignupForm