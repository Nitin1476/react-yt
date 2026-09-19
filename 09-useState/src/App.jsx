import React, { useState } from 'react'

const App = () => {

const [num, setnum] = useState(0)

function increase(){
    setnum(num+1);
}

function decrease(){
    setnum(num-1);
}

function incrby10(){
    setnum(num+10);
}

  return (
    <div>
        <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={incrby10}>Incr by 10</button>

    </div>
  )
}

export default App
