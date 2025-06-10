import React from 'react'
import FaqsCard from './FaqsCard'
import { MdKeyboardArrowDown } from "react-icons/md";

const Faqs = () => {
  return (
    <div className='bg-[#f9fafb] p-5'>

        <div className="top text-center">
            <h1 className='text-[#133c8a] mb-2 font-bold text-[20px]'>Frequently Asked <span className='text-[#fbb404]'> Questions </span> </h1>
            <p className='text-gray-600'>Find answers to common questions about our software development program. if
                <br/> you have other questions. feel free to reach out!
            </p>
        </div>


        <div className="cards place-items-center ">
            <FaqsCard

                text="Is this a program paid for?"
                Icon={MdKeyboardArrowDown}

            />
            <FaqsCard

                text="Who Can Apply for our Programs?"
                Icon={MdKeyboardArrowDown}

            />
            <FaqsCard

                text="What is the learning duration?"
                Icon={MdKeyboardArrowDown}

            />
            <FaqsCard

                text="How Will the Traning be Delivered?"
                Icon={MdKeyboardArrowDown}

            />
            <FaqsCard

                text="What Are the Prerequisites?"
                Icon={MdKeyboardArrowDown}

            />
        </div>


    </div>
  )
}

export default Faqs