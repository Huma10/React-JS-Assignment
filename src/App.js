import react,{useState} from 'react';
import './App.css';

function App() {
  //define states
  let [x,setX] = useState(0);
  let [y,setY] = useState(0);
  let [z,setZ] = useState(0);
  const add = () =>{
    setZ(x+y);
  }
  const sub = ()=>{
    setZ(x-y);
  }

  return (
    <div className="App">
      <h1>My First React JS Component</h1>
      <input type="text" value={x}
           onChange={(evt)=>{setX(parseInt(evt.target.value))}} />
      <input type="text" value={y} onChange={(evt)=>{setY(parseInt(evt.target.value))}}/>     
      <input type="button" value="Add" onClick={add}/>
      <input type="button" value="Sub" onClick={sub}/>
      <br/>
      <strong>Result is {z}</strong>
    </div>
  );
}

export default App;
