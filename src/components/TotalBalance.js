import React from 'react'
import classes from './totalBalance.module.css'
import Animation from './count-up'
import DoughnutChart from './doughnut'



const TotalBalance = ({accounts=[], totalBanks, totalCurrentBalance}) => {
  return (
    <div className={classes.wrapp}>
      
    <div className={classes.box}>
        <div  className={classes.total}>
          <DoughnutChart accounts = {accounts}/>
        </div>

        <div className={classes.gap}>
          <h2 className={classes.h2}>Bank Accounts: {totalBanks}</h2>

          <div className={classes.gap2}>
            <p> Total Current Balance</p>
            <div className={classes.current}>
              <Animation amount={totalCurrentBalance}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TotalBalance