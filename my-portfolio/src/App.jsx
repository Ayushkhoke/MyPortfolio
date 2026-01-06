import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import ContactUs from './pages/ContactUs'
import Skills from './pages/Skills'
import Project from './pages/Projects'
 import {Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-[100vw] h-[100vh]    bg-[#010714] '>

       <Navbar/>

   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/aboutus' element={<Aboutus/>}/>
   <Route path='/contactus' element={<ContactUs/>}/>
   <Route path='/skills' element={<Skills/>}/>
   <Route path='/project' element={<Project/>}/>
   <Route path='/Skills' element={<Skills/>}/>
   </Routes>
       
     
      </div>
    
    </>
  )
}

export default App
