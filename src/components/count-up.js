import React from 'react'
import CountUp from 'react-countup'
const Animation= ({amount}) => {
  return (
    <div>
        <CountUp end={amount}
            decimal='.'
            prefix='£'
            duration={1.3}
            decimals={2}
        />
    </div>
  )
}

export default Animation