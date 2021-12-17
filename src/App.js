import { useState , useEffect } from 'react';
//css
import './App.css';

//componets
import Header from './components/Header';   
import Main from './components/Main';
import Punklist from './components/Punklist';

//api axios
import axios from 'axios';

function App() {

  const [punkListData , setPunkListData] = useState([]);
  const [selectedPunk , setSelectedPunk] = useState(0)

  useEffect(()=>{
    const getMynfts = async ()=>{
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xf2527AcC3EfB06880C5b9e136bee4A390468985b&order_direction=asc'
      )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
  return  getMynfts()
  },[])

  return (
    <div className="app">

      <Header/>
      {
        punkListData.length>0 &&(
      <>
         <Main selectedPunk = {selectedPunk}  punkListData = {punkListData} />
         <Punklist punkListData = {punkListData} setSelectedPunk = {setSelectedPunk}/>
   </>
        )
  }
    </div>
  );
}

export default App;
