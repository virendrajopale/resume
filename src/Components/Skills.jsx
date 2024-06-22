import React from "react";



const Skills = () => {
  const Lnaguags = [
    {
      
      lang: "C",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/h5sdmbzwo6mjzfnuycv8',

    },
    {
      
      lang: "C++",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/oue8kiizxcergajo8rvk',

    },
    {
      
      lang: "MySQL",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/xc4micnr1rmnoknqyv3n',

    },
    {
      
      lang: "DSA",
      url: 'https://miro.medium.com/v2/resize:fit:1400/0*7AHKqhGVaDWZJ1L_.png',

    },
    {
      
      lang: "OOP",
      url: 'https://t4.ftcdn.net/jpg/03/81/49/21/360_F_381492166_7VjcukTYqp0unQfIEbH3rZkqOKwore0o.jpg',

    },
    {
      
      lang: "GitHub",
      url: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/github-512.png',

    },
    {
      
      lang: "HTML",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/akctvbjox1mwbvo7uet2',

    },
    {
      
      lang: "CSS",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/cdodztgwhsraotrpgrzf',

    },
    {
      
      lang: "Tailwind CSS",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/tnz8rpov2oufcr2ptqzl',

    },
    {
      
      lang: "Javascript",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/he7p7kb3lwsxxkfnbtyq',

    },
    {
      
      lang: "React Js",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/rqvp6k5on7czbq2jpc1d',

    },
    {
      
      lang: "Node Js ",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/qpzz2l7vkluywqzfguyt',

    },
    {
      
      lang: "Mongo Db",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/rkl4lwaby41xjqyhdjed',
    
    },
    {
      
      lang: "Redux",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/eajbylhqynoek6fldek2',
    
    },
  ];
  return (
    <>


    <div name="skills" className="w-full  h-full pt-4 bg-cyan-500/20 backdrop-blur-md rounded-lg shadow-[0.1em_0.1em] overflow-hidden">
     
  
   
        
          
          
          <div className=" w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center  p-2 sm:px-2 ">
            {Lnaguags.map((lang,index) =>{
            
              return (
            
                <div key={index} className='bg-white border-2 shadow-[0.2em_0.2em] border-yellow-500 rounded-lg p-4 hover:shadow-[0.15em_0.15em_white] hover:-translate-x-1 hover:-translate-y-1 duration-300'>
              
                {/* <div 
                  className={`  relative flex flex-col items-center justify-center 
          h-52 w-80 rounded    `}> */}
                  <img src={lang.url} className=" h-28 font-bold text-white z-10" alt="img"/>
                  <p className="hover:scale-105 duration-300">{lang.lang}</p>
                {/* </div> */}
              </div>
            )})}
          </div>
        </div>

      
   
    </>
  );
};

export default (Skills);