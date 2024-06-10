import { useState } from "react";
function App() {
  
  let [counter,setCounter]=useState(1);
  function addvalue(){
    if(counter<20){
    counter=counter+1;
    setCounter(counter)}
  }
  function decreaseValue () {
    if(counter>0){
    counter=counter-1;
    setCounter(counter)
    }

  }
  return (
   <>
   <h1>Count value {counter}</h1>
   <button onClick={addvalue}>Increment</button>
   <br>
   </br>
   <button onClick={decreaseValue}>Decrement</button>
    </>
  );
}

export default App;
