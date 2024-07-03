import { useState } from "react";
import "./App.css";
import axios from 'axios'

function App() {
  let [value, setValue] = useState();
   const [data,setData] = useState([])
            
              axios.get('http://localhost:5500/')
              .then((a)=>setData(a.data))
          
              const handle = ()=>{
                axios.post('http://localhost:5500/home',{value})
              }
  return (
    <>
     {
      data.map((a)=>{
        return(
          <h1>{a.value}</h1>
        )
      })
     }
     <form onSubmit={handle}>
     <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => setValue(e.target.value)}
      />
      <button>submit</button>
     </form>
   
    </>
  );
}

export default App;
