import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data,setData]=useState('')
  const [showButton, setShowButton] = useState(true);

  const url=`https://api.nasa.gov/planetary/apod?api_key=qqzbrqjafeVli8WlJGkeVmIda5cyd8kC88nZoXp2`
  const button=()=>{
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
      setShowButton(false)
    })
  }
  
  return (
    <div className="App">
         <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
       
        <div>
        <div className='button'>
       {showButton && (<button onClick={button}>Click Here for picture</button>)}
       </div>
        <div className='title'>
       <h1>{data?data.title:null}</h1> 
        </div>
        <div className='video'>
          {data.video?<video width="320" height="240"  src={data?data.url:null} controls>
        
          </video>:null}
        </div>
        <div className='pic'>
        <img src={data?data.hdurl:null} />
        
        </div>
          <div className='info'>
          <h2><div className='date'> {data?data.date:null}</div></h2>
          <h3> {data?data.explanation:null} </h3>
          </div>
          
        </div>
    </div>
  );
}

export default App;
