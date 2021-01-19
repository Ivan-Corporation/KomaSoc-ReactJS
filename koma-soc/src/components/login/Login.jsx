import React from 'react'
import { Form, Field } from 'react-final-form'


const LoginForm = (props) => {
    return (
        <form>
            <div>
                <Field placeholder ={"Login"} component={"input"}/>
            </div>
            <div>
            <Field placeholder ={"Password"} component={"input"}/>
            </div>
            <div>
            <input type ={"checkbox"}/> Remember me
            </div>
            <div>
                <button>Login  </button>
            </div>
        </form>
        )
}



const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
        </div>
}

export default Login;