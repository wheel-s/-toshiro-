import React from 'react'
import {NavLink} from 'react-router-dom'
import side from './side-bar.module.css'
import logo from '../images/logo.png'

import homes from '../images/home.png'
import banks from '../images/bank.png'
import transfers from '../images/transfer.png'
import historys from '../images/history.png'



const Sidebar = ({user}) => {
  const pathName = window.location.pathname
 const  isActive = pathName === '/' || pathName.startsWith(`/`)
   const home='/'
   const game = '/games'
  const quiz ='/quiz'
  const upload = '/upload'
    const edit = '/edit'
   const signUp ='/sign-up'
  

  return (
    <div className={side.bar}>
      <div className={side.section}>
      <img src={logo} width={55} height={54} className={side.img} alt={'yes'}></img>
      <h2 className={side.name}>Verizon</h2>
     
      </div>
      <div className={('links' , {'active':isActive})} >

        <div className={side.home } >
           
            <NavLink to={home} className={side.homelink}>
            <img src={homes} alt={'yes'} className={side.homeimg} width={23}></img>
              Home
             </NavLink>
           </div> 
        <div className={side.banks}>
          
          <NavLink to={game} className={side.banklink} >
          <img src={banks} alt={'yes'} className={side.bank} width={24} ></img>
            Games
            </NavLink>
           </div>
        <div className={side.history}>
         
          <NavLink to={upload} className={side.historylink}>
          <img src={historys} alt={'yes'} className={side.historys}  width={23}></img>
            Uploads
            </NavLink>
          </div>
      <div className={side.transfer}>
        
        <NavLink to={quiz} className={side.transferlink}>
        <img src={transfers} alt={'yes'} width={22} className={side.transfers}></img>
          Quiz
          </NavLink>
        </div>
           
        <div className={side.transfer}>
        
        <NavLink to={edit} className={side.transferlink}>
        <img src={transfers} alt={'yes'} width={22} className={side.transfers}></img>
          Edit profile
          </NavLink>
        </div>
           
              
        <div className={side.transfer}>
        
        <NavLink to={signUp} className={side.transferlink}>
        <img src={transfers} alt={'yes'} width={22} className={side.transfers}></img>
          Sign Up
          </NavLink>
        </div>
           
          
      </div>

      

    </div>
  )
}

export default Sidebar