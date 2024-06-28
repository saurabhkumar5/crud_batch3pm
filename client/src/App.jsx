import { useState } from "react";
import "./App.css";
import axios from 'axios'

function App() {
  let [value, setValue] = useState();
          //  console.log(value)

          


          
                  axios.post('http://localhost:5500/home',{value})
                 .then((a)=>console.log(a))

        

  return (
    <>
      <h1>hello</h1>
    
      <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => setValue(e.target.value)}
      />
   
    </>
  );
}

export default App;
