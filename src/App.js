import React,{useEffect,useState} from 'react'
import './App.css';

//import Components
// import {Cards} from './Components/Cards/Card'
// import {Charts} from './Components/Chart/Chart'
// import {CountryPickers} from './Components/CountryPicker/CountryPikcer'
//we can also imoort like this
import {Cards,Charts,CountryPickers} from './Components/index'
import {fetchData} from './Api/index'
import {Header} from './Components/Header/Header.jsx'

//import style.css , we do import style like below , module word is import to target specific file
import style from './App.module.css'


function App() {
  const[cData,uData]= useState({})  
  const[country, setCountry]=useState('')
  // const [isFetched,setFetched]=useState(false);
  useEffect(()=> {
    async function getData() {
      const response= await fetchData()
      uData(response)
  //  console.log(response)
    }
getData()

  },[])
  const handleCountryChange= async (country) =>{
    let fetchedData;
    if(country==='global'){
    fetchedData= await fetchData()
         setCountry('')
    }
    else{
      fetchedData= await fetchData(country)
    }
    uData(fetchedData)
    setCountry(country)    
console.log(fetchedData)
   }
  return (
    <div className={style.container}>
      <Header/>
      <Cards data={cData}/>
      <CountryPickers handleCountryChange={handleCountryChange}/>
      <Charts data={cData} country={country}/>
    </div>
  );
}

export default App;
