import React from 'react'
import { Link } from 'react-scroll'
import second from '../assets/VirendraJopaleResume.pdf'
import { MdDownload } from 'react-icons/md'
const Sidebar = () => {
  const navs=[
    {
      to:'about',
      text:"About Me"
    },
    {
      to:'edu',
      text:"Education"
    },
    {
      to:'skills',
      text:"Skills"
    },
    {
      to:'projects',
      text:"Projects"
    },
    
    {
      to:'online',
      text:"Find Me Online"
    },
    // {
    //   to:'achi',
    //   text:"Achievements"
    // },
  ]
  
  return (
    <div className='h-screen sm:sticky top-0 col-span-1 bg-blue-950 hidden sm:block'>
        <ul className='flex flex-col justify-center items-center gap-4 h-full text-white text-xl'>
        <li>
          
          <Link>
            <img src='https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/vssaxklyyu75utojervr' className='h-20 object-contain rounded-full border-red-300' alt='image'/>
          </Link>
        </li>
          {
            navs.map((links,index)=>{
              return (  
                <li key={index} className='font-playfair hover:text-yellow-300 cursor-pointer hover:scale-[1.01]'>
            <Link duration={400} smooth to={links.to}>{links.text}</Link>
          </li>
              )
            })
          }
         
          <a href={second} download="VirendraJopaleResume" className='bg-white rounded-lg border-2 border-green-500 text-black p-3 shadow-[0.2em_0.2em_white] hover:shadow-[0.12em_0.12em_white] duration-300' target='_blank'>
<button type="button" className=' flex  justify-center items-center gap-2'> <MdDownload className=' animate-bounce'/> Download Resume</button>
</a>
          
        </ul>
    </div>
  )
}

export default Sidebar