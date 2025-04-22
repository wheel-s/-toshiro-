import React from 'react'
import { useState } from 'react'
import Sidebar from './side-bar'
import MobileNav from './mobileNav'
import menu from '../images/menu.png'
import cool from '../images/cool.jpg'





const Layout = () => {

    const [IsOpen, setIsOpen] = useState(false)
    function openMenu(){
      
      setIsOpen(true)
    }
    
  function closeMenu(){
    
    setIsOpen(false)
}


    const loggedIn = {firstName:'Adran', lastName:'JSM'}

  return (
    <div>
       <Sidebar user={loggedIn} />

        <div className='mobilenav'>
          
          <div className='nav'>
            
          <img src={menu} alt={'yes'} width={29} height={29} className='navbar' onClick={openMenu}></img>
            <div>
          
           
           
              <p className='veri'>verizon</p>
             <img src={cool} alt={'yes'} width={59} height={59} className='logos'></img>
                        
           </div>
           
          </div>
         
        </div>
        
           {IsOpen &&  <MobileNav onCancel={closeMenu}/> }
            
    </div>
  )
}

export default Layout