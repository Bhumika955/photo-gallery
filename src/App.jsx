import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Gallery from './components/Gallery'

function App() {
  return(
    <>
    <h1 className='text-5xl text-center font-bold text-slate-800 mt-6'>Photo-Gallery</h1>
   <Gallery/>
   </>
  )
}

export default App
