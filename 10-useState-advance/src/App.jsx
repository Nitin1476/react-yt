import React, { useState } from 'react'

const App = () => {

const [num, setNum] = useState({user:"Nitin", age: 20})

const btnClicked = () => {
  const newNum = {...num};
  newNum.user = "Ritik"
  newNum.age = 18
  setNum(newNum)
}

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}> click</button>
    </div>
  )
}

export default App
