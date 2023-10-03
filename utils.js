
import { redirect } from "react-router-dom"

export default async function requireAuth(){
  const isLoggedin = localStorage.getItem("loggedin")
  if(!isLoggedin){
    const response = redirect("/login?message=You must login first")
    response.body=true
    throw response
  }
  return null
}


  