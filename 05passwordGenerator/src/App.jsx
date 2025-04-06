import React from 'react'
import { useState,useEffect,useRef } from 'react';

function App() {

  const [count, setcount] = useState(0);
  let a = 0;
  useEffect(() => {
    a = a + 1;
    console.log(`rerendering  and the value of a is ${a}`);
    
  })





  return (
    <div>App</div>
  )
}

export default App; 