import React from 'react'
import card from './components/card'
import Navbar from './components/navbar'


const App = () => {
  return (
    <div>
      <div className='card'>
        <h1>Nitin Bedwal</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, itaque!</p>
      </div>
      {card()}
      {navbar()}
    </div>
  )
}

export default App
