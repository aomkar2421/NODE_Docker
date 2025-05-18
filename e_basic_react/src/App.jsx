import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Moon from './Components/Moon'
import Sun from './Components/Sun'

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "dark" : ""}>

      <div className='h-screen bg-slate-100 dark:bg-slate-800'>
        <div className='p-12 md:w-1/3 m-auto flex justify-evenly'>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo h-16" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react h-16" alt="React logo" />
          </a>
        </div>

        <h1 className='text-center font-bold text-5xl my-5 dark:text-white'>Vite + React</h1>

        <div className="my-5 md:w-1/3 m-auto flex justify-evenly">
          <button onClick={() => setCount((count) => count + 1)}
            className='dark:bg-slate-400 bg-slate-300 text-black dark:text-white w-24 h-10 text-center rounded-md'>
            count is {count}
          </button>
          <button onClick={toggleMode} className='h-9 w-9 dark:bg-slate-400 bg-slate-300 text-black dark:text-white border-black border-2 rounded-full flex justify-center items-center' >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>

          <p className='text-center dark:text-white'>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>

        <p className="text-center my-5 dark:text-white">
          Click on the Vite and React logos to learn more
        </p>
      </div>

    </div>
  )
}

export default App
