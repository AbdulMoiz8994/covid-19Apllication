import React,{useState,useEffect} from 'react'
import {Line} from 'react-chartjs-2';
import {fetchDailyData} from '../../Api/index'

import style from './Chart.module.css'

export function Charts(){
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
        },{
          data: dailyData.map(({deaths}) => deaths),  
          label: 'Deaths',
          borderColor: 'red',
          fill: true
        }]
    }}
    /> ) : null
)

    return(
 <div className={style.container}>
     {LineChart}
 </div>
    )
}