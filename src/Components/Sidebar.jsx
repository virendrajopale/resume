import React from 'react'
import { Link } from 'react-scroll'

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
          
          
          
        </ul>
    </div>
  )
}

export default Sidebar