import React from 'react'
import { useState } from 'react'

import auth from  './Auth.module.css'
import logo from '../images/logo.png'
import {Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'



const AuthForm = ({type}) => {

  const [Msg, setMsg] = useState('')
  const [userName, setuserName]= useState('') 
  const [email, setemail] = useState('')
  
  const [isLoading, setisLoading] = useState(false)
  const [password, setpassword] = useState('')


  function submitHandler(e){
      e.preventDefault()

      
      setisLoading(true)
      setInterval(()=>{setisLoading(false)},3000)
        

     

      if(type==='sign-in'){
        setMsg('Sorry  resource not available at the moment')
        setInterval(()=>{setMsg('')},4000)
       
      
      } if(type==='sign-Up'){
        setMsg('Sorry  resource not available at the moment')
        setInterval(()=>{setMsg('')},4000)
       
      
      }
      //response router.push(/)//

      setemail('')
      setpassword('')
      setuserName('')
  }

  return (
    <div className={auth.form}>
      <div className={auth.back}>
    <header className={auth.header}>
    <Link>
    <div className={auth.bar}>
      <div className={auth.section}>
      <img src={logo} width={35} height={35} className={auth.img} alt={'yes'}></img>
      <h2 className={auth.name}>Verizon</h2>
     
      </div  >
      </div>
   </Link>



   </header>
         
          <form className={auth.form2} onSubmit={submitHandler}>
              { type ==='sign-Up' &&  (
                <>
                  <div className={auth.control}>
                  <label htmlFor='Full Name'>Full Name</label>
                  <input type='text' id='' placeholder='Enter your full name' value={userName} onChange={(e)=>setuserName(e.target.value)}/>
                  </div>

                  
                </>
              )}
            <div className={auth.control}>
              <label htmlFor='email'>Email</label>
              <input type='text' id='email' placeholder='Enter your Email' value={email} onChange={(e)=>setemail(e.target.value)}/>
            </div>

            <div className={auth.control}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' placeholder='Enter your Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
              
            </div>

            <div className={auth.action}>
             <button  onClick={submitHandler} disabled={isLoading} >
              {isLoading ?(
                <div>
                
                Loading...
                </div>
              ): type === 'sign-in' ? 'Sign In ': 'Sign Up'}
             </button>

            </div>
            <p className={auth.Msg}> {Msg}</p>

            
            <p className={auth.sign}>{type === 'sign-in'? 'Dont have an acount? ': 'Already have an account?'}
            <NavLink className={auth.link}  to ={type === 'sign-in'? '/sign-up': '/sign-in'}>
              
              {type === 'sign-in'? 'Sign-up': 'Sign-in'}
            
             </NavLink></p>
          
          </form>
  
        

        
        
        
        

    </div>
    </div>
  )
}

export default AuthForm