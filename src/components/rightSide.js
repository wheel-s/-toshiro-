import React from 'react'
import right from '../components/rightSide.module.css'
import Bankcard from './Bankcard'
import add from '../images/add.png'

const RightSide = ({user, transactions, banks}) => {
  return (
    <div className={right.wrappe}>
        <div className={right.wrapper}> 
        <div className={right.wrapp}>
        <div className={right.profile}>
            <div className={right.img}></div>
            <div className={right.pic}>
                <span className={right.letter}>{user.firstName[0]}</span>
            </div>
            <div className={right.info}>
                <h2>{user.firstName} {user.lastName}</h2>
                <p className={right.email}>{user.email}</p>
            </div>
        </div>  

        <div className={right.banks}>
            <div className={right.flex}>
                <h3 className={right.my}>My Banks</h3>
                <div className={right.add}>
                    <img src={add} alt={'yes'} className={right.plus} width={20} height={20}></img>
                    <p>Add Bank</p>
                </div>
            </div>
        </div>  
        
          <div>
          {banks.length === 0 ? null:  (
                <div className={right.card}>
                    <div className={right.card1}>
                        <Bankcard
                            key={banks[0].$id}
                            account={banks[0]}
                            userName = {`${user.firstName} ${user.lastName}`}
                            showBalance={false}
                        />
                    </div>
                    {banks[1] && (
                        <div className={right.card2}>
                            <Bankcard
                            
                            
                             key={banks[1].$id}
                            account={banks[1]}
                            userName = {`${user.firstName} ${user.lastName}`}
                            showBalance={false}/>
                        </div>
                    )}
                </div>


            )}
          </div>
          </div>
          </div>
    </div>
  )
}

export default RightSide