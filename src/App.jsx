import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const texts = [
    "ini text pertama, i love you beb <3",
    "ini text kedua, jadian yuk",
    "ini text ketiga, mau gak??"
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <h1 className='underline'>{texts[count]}</h1>
    </>
  )
}

export default App
