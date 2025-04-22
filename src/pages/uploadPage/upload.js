import React from 'react'
import Layout from '../../components/layout'
import delet from '../../images/delete.png'
import upload from './upload.module.css'
import cool from '../../images/cool.jpg'
import axe from '../../images/axe.jpg'
import meme from '../../images/meme.jpg'
import back from '../../images/back.jpg'
import wallpaper from '../../images/wallpaper.jpg'
import download from '../../images/download.jpg'
import { useState } from 'react'

const Upload= () => {


  const [image, setimage] = useState('')

  const [Msg , setMsg]= useState('')

 
  
 const handleChange= (e)=>{
   e.preventDefault()
    
    
   const data = new FileReader()
  
   data.addEventListener('load', ()=>{
     setimage(data.result)
   })
   data.readAsDataURL(e.target.files[0])
 

 
 
 }
  



  const uploadImage = (e)=>{
    e.preventDefault()
    setMsg('Cannot upload ')
    setInterval(()=>{setMsg('')},5000)
     
  }
  

 
  const setSize = (e)=>{
    e.preventDefault()
    e.target.classList.toggle('size')
       
  }



  
  return (

    
    <div className='wrapper'>
      <Layout/>
      <div className={upload.main}>
      <div className={upload.header}>
        <form className={upload.form}>
         <div>
           <input  type='file'className={upload.input}    onChange={handleChange}/>
         </div>  
       
        <button className={upload.btn} onClick={uploadImage}>upload 🚀</button>
        </form>
       
      </div>
      <h2>{Msg}</h2>
          
      <div className={upload.grid} >
        <div className={upload.card}>
       <figure>
            <img src={image} alt={'img'} width={120} height={130}className={upload.img} onClick={setSize}/>
          </figure>
          <div className={upload.body}>
            <p className={upload.title}>posted by:</p>
            <p className={upload.create}></p>
            <img src={delet} alt={'png'} width={18} className={upload.delete}/>
            <div className={upload.actions}>
           
            <button  className={upload.btn2} >Comments</button>
            </div>
            
        </div>
      </div>
           
      <div className={upload.grid} >
    
    <div className={upload.card}>
   <figure>
        <img src={axe} alt={'img'} width={120} height={130}className={upload.img} onClick={setSize}/>
      </figure>
      <div className={upload.body}>
        <p className={upload.title}>posted by:</p>
        <p className={upload.create}></p>
        <img src={delet} alt={'png'} width={18} className={upload.delete}/>
        <div className={upload.actions}>
       
        <button  className={upload.btn2} >Comments</button>
        </div>
        
    </div>
  </div>
</div>

<div className={upload.grid} >
    
    <div className={upload.card}>
   <figure>
        <img src={back} alt={'img'} width={120} height={130}className={upload.img} onClick={setSize}/>
      </figure>
      <div className={upload.body}>
        <p className={upload.title}>posted by:</p>
        <p className={upload.create}></p>
        <img src={delet} alt={'png'} width={18} className={upload.delete}/>
        <div className={upload.actions}>
       
        <button  className={upload.btn2} >Comments</button>
        </div>
        
    </div>
  </div>
</div>
<div className={upload.grid} >
    
    <div className={upload.card}>
   <figure>
        <img src={wallpaper} alt={'img'} width={120} height={130}className={upload.img} onClick={setSize}/>
      </figure>
      <div className={upload.body}>
        <p className={upload.title}>posted by:</p>
        <p className={upload.create}></p>
        <img src={delet} alt={'png'} width={18} className={upload.delete}/>
        <div className={upload.actions}>
       
        <button  className={upload.btn2} >Comments</button>
        </div>
        
    </div>
  </div>
</div>
<div className={upload.grid} >
    
    <div className={upload.card}>
   <figure>
        <img src={download} alt={'img'} width={120} height={130}className={upload.img} onClick={setSize}/>
      </figure>
      <div className={upload.body}>
        <p className={upload.title}>posted by:</p>
        <p className={upload.create}></p>
        <img src={delet} alt={'png'} width={18} className={upload.delete}/>
        <div className={upload.actions}>
       
        <button  className={upload.btn2} >Comments</button>
        </div>
        
    </div>
  </div>
</div>
      <div className={upload.grid} >
    
        <div className={upload.card}>
       <figure>
            <img src={meme} alt={'img'} width={120} height={130}className={upload.img} onClick={setSize}/>
          </figure>
          <div className={upload.body}>
            <p className={upload.title}>posted by:</p>
            <p className={upload.create}></p>
            <img src={delet} alt={'png'} width={18} className={upload.delete}/>
            <div className={upload.actions}>
           
            <button  className={upload.btn2} >Comments</button>
            </div>
            
        </div>
      </div>
    </div>
    <div className={upload.card}>
       <figure>
            <img src={cool} alt={'img'} width={120} height={130}className={upload.img} onClick={setSize}/>
          </figure>
          <div className={upload.body}>
            <p className={upload.title}>posted by:</p>
            <p className={upload.create}></p>
            <img src={delet} alt={'png'} width={18} className={upload.delete}/>
            <div className={upload.actions}>
           
            <button  className={upload.btn2} >Comments</button>
            </div>
            
        </div>
      </div>


      
       </div>
      
      </div>
    </div>
  )
}

export default Upload