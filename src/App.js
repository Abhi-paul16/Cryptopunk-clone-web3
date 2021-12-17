import { useState , useEffect } from 'react';
//css
import './App.css';

//componets
import Header from './components/Header';   
// import Collectioncard from './components/CollectionCard';
import Punklist from './components/Punklist';

//api axios
import axios from 'axios';

function App() {

  const [punkListData , setPunkListData] = useState([]);

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
   <Punklist punkListData = {punkListData}/>
    </div>
  );
}

export default App;
