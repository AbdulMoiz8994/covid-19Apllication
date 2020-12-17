import axios from 'axios'


const url='https://covid19.mathdro.id/api'


 export const fetchData= async() =>{
    try{
      const {data:{confirmed,recovered,deaths,lastUpdate}}= await axios.get(url) 
      
  const modifyData={
    confirmed,
    recovered,
    deaths,
    lastUpdate,
  }
      return modifyData
    }
    catch(error){
   return error
    }
}


export const fetchDailyData= async()=>{
  try{
   const {data}=await axios.get(`${url}/daily`)
  //  console.log(data)
  const modifyDailyData=data.map((dailyData) =>({
    confirmed: dailyData.confirmed.total,
    deaths: dailyData.deaths.total,
    date: dailyData.reportDate,
  })
  );
 return modifyDailyData

  }
  
  catch(error){
    return error
  }
}