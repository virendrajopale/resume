import React, { useState } from "react";
import { FaGithub, FaLaptopCode, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";

const Links = () => {
  const link = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/virendra-jopale ",
      tag: <FaLinkedinIn />,
    },
    {
      name: "Portfolio ",
      link: "https://meet-virendra-jopale.netlify.app/",
      tag: <AiOutlineProject />,
    },
    {
      name: "Github  ",
      link: " https://github.com/virendrajopale",
      tag: <FaGithub />,
    },
    {
      name: "LeetCode  ",
      link: " https://leetcode.com/virendrajopale",
      tag: <FaLaptopCode />,
    },
    {
      name: "Codechef   ",
      link: " https://www.codechef.com/users/veeru_1612",
      tag: <HiOutlineCodeBracketSquare />,
    },
  ];
  const [copy,setCopy]=useState('')
  const handleCopy=(data)=>{
  navigator.clipboard.writeText(data.link)
  console.log(copy);
  }
  
  return (
    <div name="online" className=" grid sm:grid-cols-2 gap-4 bg-black/20 p-3">
      {link.map((link, index) => {
        return (
          <a  href={link.link} target="_blank"
            key={index}
            className=" text-wrap flex items-center gap-5 group p-4 w-full bg-white/10 text-white border-2 border-yellow-600 rounded-lg shadow-[0.2em_0.2em] hover:shadow-[0.12em_0.12em] overflow-hidden"
          >
            <p >{link.name}</p>
              
            <a  href={link.link} target="_blank" className="  text-pretty"> {link.link}</a>
            <span className=" text-3xl rounded-full opacity-0 group-hover:opacity-100 -translate-x-8 group-hover:translate-x-1 duration-500">
              {link.tag}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default Links;
