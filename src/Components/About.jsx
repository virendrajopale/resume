import React from 'react'
import { AiFillContacts } from 'react-icons/ai'

const About = () => {
  return (
    <div name='about' className='w-full  bg-green-200/20 backdrop-blur-sm shadow-[0.3em_0.3em_yellow] hover:shadow-[0.13em_0.13em_yellow] duration-300 border-2 border-black rounded-lg flex flex-col sm:flex-row items-end overflow-visible'>

     <img className=' drop-shadow-[0.3em_0.0em_white] hover:drop-shadow-[0.5em_0.0em_white] hover:-translate-x-1  duration-300' src='https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/dwmre0xkg9y8oauxjjdz'/>
     <div className='flex flex-col gap-3 self-center justify-self-start font-playfair'>
        <h1 className=' text-5xl font-playfair text-green-600'>Virendra Jopale</h1>
        
        <ul className=' text-yellow-300 flex flex-col gap-3 self-center justify-end'>

        <li className=''>
          (+91) 8669022407
        </li>
        <li>
            <a  href= "mailto:virendrajopale@gmail.com">
            virendrajopale@gmail.com
            </a>
        </li>
        <li> Nashik,Maharashtra </li>
        </ul>
        <p className=' text-white text-xl text-justify pr-2 leading-8'>
        Aspiring IT professional, MERN Stack Web Developer, a final-year B.Tech student at GCEK College, aims to innovate and excel in dynamic tech environments. Passionate about leveraging technology to solve real-world problems and continuously grow in the field. Ready to contribute and make a meaningful impact.
        </p>
     </div>
    </div>
  )
}

export default About