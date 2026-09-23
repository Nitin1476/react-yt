import axios from 'axios'

const App = () => {


  
   {/* async function getData(){          //Using FETCH API
   const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response);
  } */}

 {/*  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await response.json()
    console.log(data);
    
  } */}

  const getData = async() => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log(data);
    
    
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
