import React from 'react'

import Layout from '../../components/layout'

import edit from './edit.module.css'
import { useState } from 'react'
import cool from '../../images/rukia.jpg'


const Edit = () => {

  const [Msg, setMsg] = useState('')
  
  const [email, setemail]= useState('')
  const [password, setpassword]= useState('')
  const [userName, setuserName] = useState('')
  const [isLoading, setisLoading] = useState(false)
 
    
    
 
  

  function submitHandler(e){
    e.preventDefault()

    
    setisLoading(true)
    setInterval(()=>{setisLoading(false)},3000)
    
   

   
    
      setMsg('Sorry  resource not available at the moment')
      setInterval(()=>{setMsg('')},3000)
    
    
   

    //response router.push(/)//

    setemail('')
    setpassword('')
    setuserName('')
}
const handleChange= (e)=>{
  e.preventDefault()

  
  const data = new FileReader()
  
  data.addEventListener('load', ()=>{
 
  })
  data.readAsDataURL(e.target.files[0])

 
}

const size = (e)=>{
  e.preventDefault()
  e.target.classList.toggle('sized')
}
const deleteAccount = (e)=>{
  e.preventDefault()
  
  
    setMsg('Sorry  resource not available at the moment')
    setInterval(()=>{setMsg('')},3000)
  
  


}

return (
    <div className='wrapper'>
    <Layout/>
        <div className={edit.form}>
        <div className={edit.back}>
          <div className={edit.bar}>
                <div className={edit.section}>
                <img src={cool} width={65} height={65} className={edit.img} alt={'pic'} onClick={size}></img>
                <h2 className={edit.name}>Edit profile</h2>
                <button className={edit.delete} onClick={deleteAccount}>delete account</button>
                </div  >
                
                </div>
          <div className={edit.header}>
        <form className={edit.form2} onSubmit={submitHandler}>
             
                <div>
                  <div className={edit.control}>
                  <label htmlFor='Full Name'>Username</label>
                  <input type='text' id='' placeholder='Enter your full name' value={userName} onChange={(e)=>setuserName(e.target.value)}/>
                  </div>

                  
                </div>
            
            <div className={edit.control}>
              <label htmlFor='email'>Email</label>
              <input type='text' id='email' placeholder='Enter your Email' value={email} onChange={(e)=>setemail(e.target.value)}/>
            </div>

            <div className={edit.control}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' placeholder='Enter your Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
              
            </div>

            <div className={edit.upload}>
                <div>
                   <input  type='file'className={edit.input}    onChange={handleChange}/>
                 </div>  
                    
            </div>

            <div className={edit.action}>
             <button  onClick={submitHandler} disabled={isLoading} >
              {isLoading ?(
                <div>
                
                Loading...
                </div>
              ): 'edit'}
             </button>

            </div>
            <p className={edit.Msg}> {Msg}</p>

            
          
          
          </form>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Edit