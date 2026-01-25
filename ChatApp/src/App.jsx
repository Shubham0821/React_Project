import React from 'react'

function App() {
  return (
    <div className='grid grid-cols-5 h-screen text-center'>

      <div className='col-span-1 bg-zinc-700'>
    
      </div>

      <div className='col-span-4 p-10'>
        <div className="container h-135">
          
        </div>
        <div className='text-white bg-zinc-700 w-1/2 p-1 pr-5 h-16 m-auto rounded-4xl border-teal-600 border flex'>
          <input type="text" placeholder='Ask me Anything ?' className='w-full h-full p-3 outline-none' />
          <button >Ask</button>
        </div>

      </div>

    </div>
  )
}

export default App