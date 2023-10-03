
import { redirect } from "react-router-dom"

export default async function requireAuth(request){

  const pathname  = new URL(request.url).pathname

  const isLoggedin = localStorage.getItem("loggedin")
  if(!isLoggedin){
    const response = redirect(`/login?message=You must login first &redirectTo=${pathname}`)
    response.body=true
    throw response
  }
  return null
}


  