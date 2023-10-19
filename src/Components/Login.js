import React from 'react'
import { Provider,Auth } from './Firebase'
import { signInWithPopup } from 'firebase/auth'
import {useNavigate} from "react-router-dom"

export default function Login(props) {
  const navigate=useNavigate()

  function pleaseLogin(){

       signInWithPopup(Auth,Provider)
       .then(function(){
        props.info(true)
             const Username=Auth.currentUser.displayName
             const email=Auth.currentUser.email
             console.log(Username,email)
             navigate("/home")
       })
       .catch(function(error){
       console.log(error)
       })
  }

  return (
    <div style={{margin:30 }} >
           <button className='btn btn-outline-primary' onClick={pleaseLogin}>Login with Google</button>

    </div>
  )
}