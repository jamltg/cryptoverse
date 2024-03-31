import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import "../index.css";
import faqs from "../data/faqs.json";

export default function FAQAccordion() {
  
  function Accordion({data}){

    const [openIndexes, setOpenIndexes] = useState(Array(data.length).fill(false));

    const handleClick = (index) => {
      setOpenIndexes(prevOpenIndexes => {
        const newOpenIndexes = prevOpenIndexes.map((isOpen, i) => i === index ? !isOpen : false);
        return newOpenIndexes;
      });
    };

    const formatDescription = (description) => {
    // Replace newline characters with HTML line breaks
    return description.replace(/\n/g, '<br>');
    };

  return(
    data.map((item, index)=>(
      <AccordionItem 
        key={index} 
        title={item.title} 
        description={item.description}
        isOpen={openIndexes[index]}
        onClick={() => handleClick(index)}
        formatDescription={formatDescription}
      />
    ))
  );
}

  function AccordionItem({title, description, isOpen, onClick, formatDescription}) {
  return(
    <div className='py-2'>
      <div onClick={onClick} className='flex justify-between py-2 border-b-2 border-white cursor-pointer'>
        <h1 className='text-white text-xl font-medium'>{title}</h1>
        <FaChevronDown color="white" className={isOpen ? 'rotate' : ''}/>
      </div>
      {isOpen && 
      <div className='py-4'>
        <p className='text-white' dangerouslySetInnerHTML={{ __html: formatDescription(description) }} />
      </div>
      }
    </div>
  );
}

  return (
    <div className='bg-black py-8'>
      <div className='max-w-[1240px] mx-auto px-8'>
        <h1 className='text-white text-5xl font-bold text-center pb-6'>FAQ</h1>
        <Accordion data={faqs}/>
      </div>
    </div>
  );
}