import React from 'react'
import { useActionData, useLoaderData} from 'react-router-dom'
import { Form } from 'react-router-dom'
import { loginUser } from '../api'
import { redirect } from 'react-router-dom'
import { useNavigation } from 'react-router-dom'

export function loginloader ({request}){
return new URL(request.url).searchParams.get("message")
}


export async function loginAction ({request}){
 const formData = await request.formData()
 const email = formData.get("email")
 const password = formData.get("password")

 try {
    const data = await loginUser({email, password})
    localStorage.setItem("loggedin", true)
    const response = redirect("/Host")
    response.body=true
     return response
 } catch (err){
    return err.message
 }

}


const Login = () => {
    const navigation = useNavigation()
    //console.log(navigation)
    
const url = useLoaderData()
const errormessage = useActionData()
//console.log(errormessage)

    return (
        <div className="login-container">
           <h1>Sign in to your account</h1>
           {url &&  <h3 className='red'>{url}</h3>}
           {errormessage && <h5 className='red'>{errormessage}</h5>}
            <Form method="post" className="login-form" replace>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={navigation.state === "submitting"}>
                    {navigation.state === "idle"? "Login" : "Logging in.."}
                </button>
            </Form>
        </div>
    )

}


export default Login