import { useState } from 'react'
import './main'

function App() {
  const [count, setCount] = useState(0)
  const texts = [
    "ini text pertama, i love you beb <3",
    "ini text kedua, jadian yuk",
    "ini text ketiga, mau gak??"
  ]
  return (
    <>
      <div className="h-dvh w-screen items-center justify-start gap-8 flex flex-col-reverse bg-blue-300">
        <div className="
          flex flex-col w-4/5 h-32 py-4 px-8 mb-4 
          rounded-xl bg-gradient-to-tr from-pink-300/80 to-pink-400/80
          outline-pink-600/80 outline-offset-4 outline outline-4
          text-white
          shadow-xl
        ">
        <h1 className='text-xl font-bold'>Cristian Hadiwijaya</h1>  
        <hr className='-mx-4 mt-2 mb-1'/>
        <p>{texts[count]}</p>
        </div>

        <div className="flex justify-end w-4/5">
          <div className="
            flex flex-col items-end py-2 px-4 mb-2
            rounded-xl bg-gradient-to-bl from-pink-300/80 to-pink-400/80
            outline-pink-600/80 outline-offset-4 outline outline-4
            text-white
          ">
            <div>
              <h1 className='text-lg font-bold'>Dialogue Option</h1>
              <hr className='-mx-4 mt-2 mb-2'/>
              <div className='bg-pink-500/50 hover:bg-pink-600/50 active:bg-pink-700/50 rounded-xl shadow py-1 px-3 mt-1' onClick={() => setCount(count => count + 1)}>TEMP (NEXT TEXT)</div>
              <div className='bg-pink-500/50 hover:bg-pink-600/50 active:bg-pink-700/50 rounded-xl shadow py-1 px-3 mt-1' onClick={() => setCount(count => count - 1)}>TEMP (BACK TEXT)</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
