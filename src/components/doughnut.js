import React from 'react'

import  { Chart as ChartJS} from 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2';




const DoughnutChart = ({accounts}) => {




    const data ={
        datasets:[{
            label:'Banks',
            data:[1250, 2500, 3750],
            backgroundColor:['#0747b6','#2265d8', '#2f91fa' ],

        }],
        labels:['Bank1', 'Bank2', 'Bank3'],
        

    }
  return (


  <Doughnut data={data}
    options={{
        aspectRatio:'',
        cutout:'60%',
        plugins:{
            legend:{display:false}
        }
    }}
  />
  )
}

export default DoughnutChart