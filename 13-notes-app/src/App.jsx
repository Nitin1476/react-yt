import React, { useState } from 'react'


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    
    copyTask.push({title, details})

    setTask(copyTask)
    console.log(task);
    

    setTitle('')
    setDetails('')
    
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)

    setTask(copyTask)
    
    
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={(e) => {
        submitHandler(e);
      }} className=' flex gap-4 lg:w-1/2 items-start flex-col p-10'>

      <h1 className='text-3xl font-bold'>Add Notes</h1>

          {/*pehla input for heading*/}
         <input 
          type="text" 
          placeholder='Enter Notes Heading' 
         className='px-5 font-medium w-full py-2 border-2 rounded outline-none '
         value={title}
         onChange={(e) => {
            setTitle(e.target.value)
         }}
        />
          {/*details wala input*/}
        <textarea 
          type="text" 
          placeholder='Write Details Here'
          className=' px-5 font-medium w-full py-2 flex items-start flex-row h-32 border-2 rounded  outline-none'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
            
          }}
        />

         <button className= ' w-full font-medium active:scale-95 bg-white text-black px-5 py-2 rounded  outline-none'>Add Notes</button>
         
    </form>
    <div className=' lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function(elem, idx){

            return  <div key={idx} className=" flex justify-between flex-col items-start relative text-black pt-9 pb-4 p-5 h-52 w-40 bg-cover rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
               <div>
                  <h3 className='leading-tight text-xl font-bold'>{elem.title} </h3>
                  <p className='mt-3 leading-tight font-medium text-gray-500 ' > {elem.details} </p>
              </div>
                
                <button onClick={() => {
                  deleteNote(idx)
                }} className='w-full cursor-pointer active:scale-95 bg-red-400 py-1 text-xl rounded font-bold text-white'>Delete</button>
                

            </div>


          })}
        
      </div>

    </div>
  </div>
)
}

export default App