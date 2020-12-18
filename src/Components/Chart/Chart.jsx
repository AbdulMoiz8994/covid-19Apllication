import React,{useState,useEffect} from 'react'
import {Line,Bar} from 'react-chartjs-2';
import {fetchDailyData} from '../../Api/index'

import style from './Chart.module.css'

export function Charts({data:{confirmed,recovered,deaths} ,country}){
    const[dailyData,fDailyData]=useState([])

    useEffect(() =>{
     const fetchData= async () =>{
    const response= await fetchDailyData() 
    fDailyData(response)
    }
// console.log(dailyData)
    fetchData()
    },[])
const LineChart =(
    dailyData.length !== 0
     ?(
    <Line
    data={{
        labels: dailyData.map(({date}) => date),
        datasets:[{
          data: dailyData.map(({confirmed}) => confirmed),
          label: 'Infected',
          borderColor: 'blue',
          fill: true, 
          backgroundColor: 'rgba(0,0,255,0.4)',
        },{
          data: dailyData.map(({deaths}) => deaths),  
          label: 'Deaths',
          borderColor: 'red',
         fill: true,
         backgroundColor: 'rgba(255,0,0,0.4)',
        }]
    }}
    /> ) : null
)
console.log(confirmed,recovered,deaths)
const BarChart=(
  confirmed ?(
      <Bar
      data={{
          labels:['Infected','Recovered','Deaths'],
          datasets: [{
              label: 'People',
              backgroundColor:[
                'rgba(0,0,255, 0.7)',
                'rgba(50,205,50, 0.7)',
                'rgba(255,0,0, 0.7)',
                ],
              data:[confirmed.value,recovered.value,deaths.value],  
          }]
      }}
      options={{
          legend:{display: false},
          title:{display: true, text:`Current State in ${country}`}
      }}
      />
  ): null
)

    return(
 <div className={style.container}>
     {country? BarChart: LineChart}
 </div>
    )
}