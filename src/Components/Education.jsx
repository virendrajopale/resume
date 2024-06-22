import React from 'react'
import { MdCastForEducation } from "react-icons/md";
const Education = () => {
    const edu = [
        { 
            ed: '10th',
            clg: "Adash Vidyalaya, Shirwal, Satara",
            year: '2019',
            marks: "85.60"
        },
        { 
            ed: '12th',
            clg: "Dnyansmwardhini Junior College, Shirwal, Satara",
            year: '2021',
            marks: "85.20"
        },
        {
            ed: 'Graduation',
            trend: "Information Technology",
            clg: "Government College Of Engineering, Karad",
            year: '2025',
            // marks: "85.60"
        }
    ]

    return (
        <div name='edu' className='bg-yellow-300/20 rounded-lg p-6 space-y-6'>
            {edu.map((ed, index) => (
                <div key={index} className='bg-white border-2 shadow-[0.2em_0.2em] border-yellow-500 rounded-lg p-4 hover:shadow-[0.15em_0.15em_yellow] hover:-translate-x-1 hover:-translate-y-1 duration-300'>
              <span className='flex  items-center gap-4'> <MdCastForEducation className=' text-2xl'/>    <h3 className='font-bold text-lg mb-2'>{ed.ed}</h3></span> 
                    <div className='space-y-2 font-playfair '>
                        <p className='text-xl'>
                            <span className='font-semibold'>School/College:</span> {ed.clg}
                        </p>
                        <p className='text-xl'>
                            <span className='font-semibold'>Passing Year:</span> {ed.year}
                        </p>
                        {ed.marks && (
                            <p className='text-xl'>
                                <span className='font-semibold'>Marks:</span> {ed.marks}%
                            </p>
                        )}
                        {ed.trend && (
                            <p className='text-xl'>
                                <span className='font-semibold'>Major:</span> {ed.trend}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Education