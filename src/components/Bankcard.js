import React from 'react'
import card from './card.module.css'
import{Link} from 'react-router-dom'
import wifi from '../images/wifi.png'

const Bankcard = ({account, userName, showBalance=true}) => {
  return (
    <div className={card.wrapp}>

        <div className={card.visa}>
          <Link to='/' className={card.card}>
                <div className={card.content}>
                  <div className={card.flux}>
                  <h1 className={card.name}>{ userName}</h1>
                  <p className={card.balance}>${account.currentBalance}</p>
                  <div>
                    <img src={wifi} alt='yes' width={27}className={card.flax}></img>
                  </div>
                  </div>
                  <div className={card.numbers}>
                    <div className={card.number}>
                    <h1 className={card.user}>{userName}</h1>
                    <h2 className={card.slash}>**/**</h2>
                   
                </div>
                <p className={card.star}>**** **** ****<span>{account.mask}</span></p>
                  </div>
                 <div className={card.icon}>

                 </div>
              
              </div>  
          </Link>
          </div>
    </div>
  )
}

export default Bankcard