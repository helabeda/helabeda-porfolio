import React, { useState } from 'react'
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { Resume } from '../../Data';
const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
        <button onClick={() => setIsOpen((prev) => !prev)}  className='relative inline-flex px-6 py-3 font-bold border border-solid
              border-gray rounded-lg text-sm active:border-Teal duration-300 active:text-Teal'>
                Get Resume 
                {!isOpen ? (
                  <AiOutlineCaretDown className='h-6 ml-2'/>
                ): (
                  <AiOutlineCaretUp className='h-6 ml-2'/>
                )}
        </button>
        {isOpen && <div className='bg-transparent border mt-1 flex flex-col items-start rounded-lg p-2'>
            {Resume.map((item, i) => (
   
                <div className="flex justify-between p-2 hover:bg-teal-500 w-full cursor-pointer rounded-r-lg border-l-transparent hover:border-l-Teal border-l-4" key={i}>
                    <a href={item.href} download={item.download}>
                    <h3 className='font-bold'>{item.name}</h3>
                    </a>
                </div>
                
             
            ))}
            </div>}         
    </div>
  )
}

export default Dropdown