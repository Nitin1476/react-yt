import React from 'react'

const App = () => {

  const user = {
    username:'Nitin',
    age:'20',
    city:'Rishikesh'
  }

  localStorage.setItem('user', JSON.stringify(user))

  return (
    <div>
    
    </div>
  )
}

export default App