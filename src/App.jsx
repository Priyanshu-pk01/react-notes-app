
import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])

  const SubmitHandeler = (e) => {
    e.preventDefault()
    console.log("Form Submitted")
    if(title.trim().length<3){ 
      alert("Enetr title ")
      return
    }
    if (details.trim().length<5){
      alert("Enter Details")
      return

    }
     const copytask = [...task];
    copytask.push({ title, details })
  

    setTask(copytask)

    setTitle("")
    setDetails("")}
    
    
   const delet =(idx)=>{
    const copyTask =[...task];
    copyTask.splice(idx,1)
    setTask(copyTask)

   }


  return (
    <div className='min-h-screen bg-linear-to-br from-zinc-950 via-slate-900 to-indigo-950 text-white lg:flex p-10'>

      <form onSubmit={SubmitHandeler} className='flex items-start p-10 lg:w-1/2 gap-4 flex-col'>
        <h1 className='text-5xl font-bold'>Add Notes</h1>

        <input type='text'
          placeholder='Enter title '
          className='px-5 w-full border-2 rounded outline-none py-2 font-medium ' value={title} onChange={(e) => { setTitle(e.target.value) }}
        />
        <textarea className='w-full px-8 py-4 border-2 h-32 flex items-start flex-row font-medium rounded outline-none' placeholder='Enter details' value={details} onChange={(e) => { setDetails(e.target.value) }} ></textarea>

        <button type='submit' className='w-full px-5 py-2 rounded items-center cursor-pointer active:scale-85 bg-white text-black font-medium  outline-none' >Add Notes</button>

      </form>
      <div className='lg:h-screen lg:overflow-auto lg:w-1/2 lg:border-l-2 border-white  '>
        <h1 className='text-5xl text-white font-bold px-10 mt-10'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5   px-5 m-3 overflow-auto '>
          {task.map(function (Elem, idx) {
            return (<div
              key={idx}
              style={{
                backgroundImage:
                  "url('https://static.vecteezy.com/system/resources/thumbnails/027/524/846/small_2x/note-paper-page-free-png.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="flex flex-col justify-between items-start h-52 w-40 pt-9 pb-4 px-4 text-black rounded-xl"
            >
              <div>
                <h3 className="leading-tight text-lg font-bold">
                  {Elem.title}
                </h3>

                <p className="mt-2 leading-tight text-xs font-semibold text-gray-600">
                  {Elem.details}
                </p>
              </div>
              <button onClick={()=>{delet(idx)}} className='bg-red-400 w-full rounded py-1  text-white cursor-pointer font-bold active:scale-95'>Delete</button>
            </div>
            )
          })}

        </div>


      </div>

    </div>
  )
}

export default App
