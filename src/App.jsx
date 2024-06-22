import React from 'react'
import Sidebar from './Components/Sidebar'
import About from './Components/About'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Links from './Components/Links'

const App = () => {
  return (
    <div className=' w-full  grid sm:grid-cols-4 '>
    

      <Sidebar/>

      <div className=' col-span-3 overflow-scroll p-3 flex flex-col gap-2 bg-blue-950'>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <Links/>
      </div>
    </div>
  )
}

export default App