import React, { useState } from 'react'
import SignUp from '../Signup/SignUp';
import './Login.css'



const Login = () => {

const[signin,setSignIn]=useState(false);



  return (
    <div className='loginScreen'>
      <div className='loginScreen__background'>
      <img 
      className='loginScreen__logo'
      src=""   alt=""/>

      <button className='loginScreen__button' 
      onClick={()=>setSignIn(true)}
      >Sigin</button>

      <div className='loginScreen__gradient' />
      </div>
      <div className='loginScreen__body'>
      {signin ?(
      <SignUp/>
      ):
      (
        <>
        <h1>Unlimited films, TV programmes and more.</h1>
        <h2>Watch anywhere. Cancel at anytime</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership</h3>
        
  
        <div className='loginScreen__input'>
        
        <form>
        <input type='email' placeholder="Email address"></input>
        <button onClick={()=>setSignIn(true)}
        
        className='loginScreen__getStarted'>Get Started</button>
        </form>
        </div>
        </>
        
        


      )
    
    }
      
      </div>

    </div>
  )
}

export default Login
