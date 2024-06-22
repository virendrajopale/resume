import React from 'react'

const Projects = () => {
    const projects = [
        {
          
          name: "Ecommerce Website",
          src: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/pl3grhkx0sineh1qaxft',
          code: "https://github.com/virendrajopale/ecommerce-web",
          demo:"https://e-commerce-57a2.onrender.com/"
        },
        {
          
          name: "Connect2Campus",
          src: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/zotqgepgmi3dnr9sqb4l',
          code: "https://github.com/virendrajopale/Campus2Campus.git",
          demo:"https://main--connect2campuus.netlify.app/user/login"
        },
        {
          
          name: "Ecommerce Filters React",
          src: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/qkz3flfoxjtibwc4iadi',
          code: "https://github.com/virendrajopale/Ecommerce-Filters.git",
          demo:"https://ecommerce-filters-two.vercel.app/"
        },
        {
          
          name: "To Do MERN App",
          src: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/zyqxlppz4eitkkmvvyvf',
          code: "https://github.com/virendrajopale/todo-web-app",
          demo:"https://todo-web-app-mern.onrender.com/"
        },
        
        {
          
          name: "Kanban To-Do",
          src: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/lwjafoa4bb65ihnjcpuk',
          code: "https://github.com/virendrajopale/drag-drop-todo-kanban.git",
          demo:"https://drag-drop-todo-kanban.vercel.app/"
        },
        {
          
          name: "Personal Bookshelf",
          src: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/hq04hrnchkrpgrwmmdxi',
          code: "https://github.com/virendrajopale/personal-bookshelf.git",
          demo:"https://personal-bookshelf-9vf7vncpj-virus-projects-c0405544.vercel.app/"
        },
        {
          
          name: "News Website",
          src: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/vuwuwzmlbszxtd135fqd',
          code: "https://github.com/virendrajopale/news-web-react.git",
          demo:"https://github.com/virendrajopale/news-web-react.git"
        },
       
      ]
  return (
    <div name={'projects'} className='grid sm:grid-cols-3 gap-2'>
            {/* <div className='relative  mr-0 ml-0 w-full '>
            
            <span className=' absolute bg-yellow-400  top-0 left-0 mt-1 ml-1 h-full w-full  rounded-lg hover:scale-[1.01]'></span>
            <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg hover:scale-[1.01]">
            <img src='https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/vuwuwzmlbszxtd135fqd' className='  overflow-hidden object-contain '/>
        
            </div>
     </div> */}
    {
   
    projects.map((prj,index)=>{
        return ( 
            <a href={prj.demo} target='_blank' className=' bg-white-400 border-2 border-yellow-500 rounded-lg shadow-[0.3em_0.3em] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0.15em_0.15em_white] duration-200 cursor-pointer overflow-hidden'>
          <div className=' relative w-full'>
     
            <h1 className=' absolute z-20 flex text-center h-full w-full justify-center items-center text-yellow-400 bg-white/10 backdrop-blur-sm hover:backdrop-blur-0 duration-300 text-2xl font-playfair'>
            {prj.name}
            </h1>
            <img className=' relative h-full w-full' src={prj.src} />
          </div>

            </a>
        )}) 
        }
    </div>
  )
}

export default Projects