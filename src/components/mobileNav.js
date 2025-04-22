import React from 'react'

import mobile from './mobile.module.css'
import {NavLink} from 'react-router-dom'
import logo from '../images/logo.png'
import homes from '../images/home.png'
import banks from '../images/bank.png'
import transfers from '../images/transfer.png'
import historys from '../images/history.png'
import close from '../images/close.png'


const MobileNav = (props) => {



  function closeMenu(){
      props.onCancel()
      
  }

  const pathName = window.location.pathname
  const  isActive = pathName === '/' || pathName.startsWith(`/`)
    const home='/'
    const game = '/games'
   const  quiz='/quiz'
   const upload = '/upload'
   const edit = '/edit'
   const signUp ='/sign-up'
  return (
    <div className={mobile.mobile}>
    <div className='close'>
      <div className={mobile.nav}>
        

        <div className={mobile.bar}>
        <img src={close} width={20} height={19} className={mobile.close} alt={'yes'} onClick={closeMenu}></img>
          
      <div className={mobile.section}>
      <img src={logo} width={35} height={35} className={mobile.img} alt={'yes'}></img>
      <h2 className={mobile.name}>Logout</h2>

      </div>
      <div className={('links' , {'active':isActive})}  >

        <div className={mobile.home } >
           
            <NavLink to={home} className={mobile.homelink}>
            <img src={homes} alt={'yes'} className={mobile.homeimg} width={23}></img>
              Home
             </NavLink>
           </div> 
        <div className={mobile.banks}>
          
          <NavLink to={game} className={mobile.banklink} >
          <img src={banks} alt={'yes'} className={mobile.bank} width={24} ></img>
            Games
            </NavLink>
           </div>
        <div className={mobile.history}>
         
          <NavLink to={upload} className={mobile.historylink}>
          <img src={historys} alt={'yes'} className={mobile.historys}  width={23}></img>
            Uploads
            </NavLink>
          </div>
      <div className={mobile.transfer}>
        
        <NavLink to={quiz} className={mobile.transferlink}>
        <img src={transfers} alt={'yes'} width={22} className={mobile.transfers}></img>
          Quiz
          </NavLink>
        </div>

        <div className={mobile.transfer}>
        
        <NavLink to={edit} className={mobile.transferlink}>
        <img src={transfers} alt={'yes'} width={22} className={mobile.transfers}></img>
          Edit profile
          </NavLink>
        </div>
        <div className={mobile.transfer}>
        
        <NavLink to={signUp} className={mobile.transferlink}>
        <img src={transfers} alt={'yes'} width={22} className={mobile.transfers}></img>
          SignUp
          </NavLink>
        </div>
           
           
          
      </div>
      </div>
      </div> 
      </div>
        
    </div>
  )
}

export default MobileNav