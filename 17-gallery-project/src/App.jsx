import React, { useEffect, useState } from 'react'
import axios from "axios";

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async() => {
   const response = await  axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)

  }

  useEffect(() => {
    getData()
  }, [index])


  let printUserdata = <h3 className='text-gray-400 text-xl'>No User Available</h3>

  if(userData.length > 0){
    printUserdata = userData.map(function(elem, idx){
      return <a href={elem.url} target='_blank'>
        <div key={idx} >
        <div className='h-40 w-44 overflow-hidden rounded-xl'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h2 className='font-bold text-lg'>{elem.author}</h2>
      </div>
      </a>
    } )
  }

  return (

    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <h1 className='fixed text-'>{index}</h1>
      <div className='flex flex-wrap gap-4'>
        {printUserdata}
      </div>

      <div className=' flex justify-center gap-6 items-center p-4'>
        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2'
          onClick={() => {
            if (index > 1) {
              setIndex(index-1)
            }
            
          }}
        >
          Prev
          </button>
        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2' 
          onClick={() => {
            setIndex(index+1)
            
          }}
        >
          Next
          </button>
      </div>

    </div>
  )
}

export default App
