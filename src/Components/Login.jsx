import {signInWithPopup } from 'firebase/auth'
import React from 'react'
import {auth,googleProvider} from '../firebase'
import {useNavigate} from 'react-router-dom'

function Login(props) {
    const navigate = useNavigate()
    function googleLogin(){
        signInWithPopup(auth,googleProvider)
        .then(function(){
            props.info(true)
            const username = auth.currentUser.displayName
            const email = auth.currentUser.email
            console.log(username,email)
            navigate('/home')
        })
        .catch(function(err){
            console.log(err)
        })
    }
  return (
    <div className="login-container" style={{margin:30,}}>
      <button type="button" className="btn btn-outline-primary" onClick={googleLogin}>Continue with Google</button><br/><br/>
      <button type="button" className="btn btn-outline-primary">Continue with Email</button><br/><br/>
      <button type="button" className="btn btn-outline-primary">Continue with GitHub</button><br/><br/>
      <p>OR</p>
      <div>
        +91 <input type="number"/>
      </div>
    </div>
  )
}

export default Login
