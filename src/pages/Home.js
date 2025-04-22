import React from 'react'


import RightSide from '../components/rightSide'
import Layout from '../components/layout'
import hi from '../images/blackboard-hi.gif'

const Home = ({type='title', title,user}) => {
  const loggedIn = {firstName:'Adran', lastName:'JSM', email:'contact@jsmastery.pro'}

 
  return (
    <div className='wrappe'>
     
     <div className='flex'>
      <div> <Layout/></div>
    <div className='wrapp'>
      
        <header className='home-header' >
        <div className='hi'>
        <img src={hi} className='hey' alt={'hey'}/>
        <p>Keep your heart with all diligence for out of it are the issue of life. (Proverbs 4:23) </p>
        <p>Keep yourselves in the love of God (Jude 21) </p>
      </div>

      <div>
            <h1 className='headerbox'>
            
                {type ==='greeting' &&(<span className='name'>
                    {user}
                </span>)}
            </h1>
            <div className='flax'>
            
            <div > 
              <h4> The Heart of Man🤷‍♂️</h4>
              <p>The heart is where thoughts are formed and decisions are made.</p>
              <p>The heart is deceitful above all things and desperately wicked who can know it? (Jeremaih 17:9-10)</p>
            </div>
            
              
                 
            
            <div > 
               <h4>God examines the heart 🎶</h4>
            <p></p> 
             <p> (for the lord seeth not as man seeth; for man looked on the outward appearancr, but the LORD looketh on the heart; 1Samuel 16:6)</p>
            </div>
             <div >
               <h4>The need for a new heart</h4>
             <p></p>
             <p>Create in me a clean heart o God and renew a right spirit within me (psalm 51:10)</p>
             </div>

             <div > 
               <h4>What to do with your Heart 🚀</h4>
            <p></p> 
             <p>1. love theLord your God with all your heart (Mark 12:29-30)</p>
             <p>2. fellowship with God</p>
             <p>3. Humility (phipplians 2:5-11)</p>
             <p>4.Think (phipplians 4:8)</p>
             <p>5. Beleive (Romans 10:10, Mark11:23-24)</p>
            </div>
             <div ></div>
            </div>
            
        </div>
                <div className='foot'>
                    <h4>What is the condition of your heart?</h4>
                    <p>Mind the thing you allow into your heart and give your heart to Jesus!!!</p>
                    <p>Over to you <span></span></p>
                    <p>(Mark 12:29-30)</p>

                </div>
        
          
        </header>
                
          <div>
            <p></p>
          </div>
   
        </div>

        <div className='right'>
          <RightSide 
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 123.53},{currentBalance: 543.35}]}
            
          />
          </div>
    
         
          </div>
    </div>
  )
}

export default Home