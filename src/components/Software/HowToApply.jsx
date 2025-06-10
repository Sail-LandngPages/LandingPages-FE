import React from 'react'
import HowtoApplyCard from './HowtoApplyCard'

const HowToApply = () => {
  return (
    <div className='bg-[#4f6da5] pt-10 pb-10 mb-10'>
        <div className='text-center'>
            <h4 className='text-white font-bold text-[30px]'>How to <span className='text-[#fbb404]'> Apply</span></h4>
            <p className='text-[#eef1f6]'>Ready to start your journey? The application process is simple.
                Follow <br/> to apply for the SAIL software Development Program.
            </p>
        </div>


        <div className=' lg:flex lg:gap-15 py-5 px-10 mt-5  '>

            <div className=' bg-[#617caf] p-2 mt-15 mb-10 rounded-[12px] h-[500px]  lg:w-[500px]'>
                <HowtoApplyCard
                    bgColor="#fbb404"
                    DescIcon="1"
                    DescTitle="Complete Application Form"
                    DescText="Fill out our online application form with your basic
                                information and background"

                />
                <HowtoApplyCard
                    bgColor="#fbb404"
                    DescIcon="2"
                    DescTitle="Aplitude Assessment"
                    DescText="Take a basic aplitude test that helps us understand your
                    problem-solving skills"

                />
                <HowtoApplyCard
                    bgColor="#fbb404"
                    DescIcon="3"
                    DescTitle="Brief Interview"
                    DescText="Selected Candidates will be invited for 
                    a brief interview to discuss their goals."

                />
                <HowtoApplyCard
                    bgColor="#fbb404"
                    DescIcon="4"
                    DescTitle="Confirmation & Enrollment"
                    DescText="Receive your acceptance letter and complete the
                    enrollment process."

                />

            </div>

            <div className='bg-white rounded-[12px]  py-10 px-5 h-[600px] lg:w-[500px]'>


                    <div className="text-center">
                       
                        <h4 className='text-[#2e59ca] text-[20px] font-bold'>Start Your Application</h4>
                        <p className='bg-[#fbb404] mx-auto  w-[50px] h-0.5'></p>
            
                    </div>

                    <div className="body">
                        <form action="">

                            <div className="flex  gap-5 lg:justify-between mt-8">
                            <div>
                                
                                <label className='' htmlFor="">First Name</label> <br/>
                                <input className='border-1 pl-2 rounded-[5px] w-[120px] lg:w-[160px] text-[#9aa5b3] border-[#9aa5b3]' type="text" placeholder='Your first name' />
                            </div>

                            <div>
                                
                                <label htmlFor="">Last Name</label> <br/>
                                <input className='border-1 rounded-[5px] w-[120px] lg:w-[160px] pl-2 text-[#9aa5b3] border-[#9aa5b3]' type="text" placeholder='Your last name' />
                            </div>
                            </div>

                            <div className=' mb-5 mt-5 flex flex-col'>
                                
                                <label htmlFor="">Email Address</label>
                                <input className='border-1 rounded-[5px] w-[259px] lg:w-[459px] pl-2 text-[#9aa5b3] border-[#9aa5b3]' type="text" placeholder='Your.email@example.com' />
                            </div>

                            <div className=' mb-5 flex flex-col'>
                                
                                <label htmlFor="">Phone Number</label>
                                <input className='border-1 rounded-[5px] w-[259px] lg:w-[459px]pl-2 text-[#9aa5b3] border-[#9aa5b3]' type="text" placeholder='Your Phone number' />
                            </div>

                            <div className=' mb-5 flex flex-col'>
                                
                                <label htmlFor="">Highest Education Level</label>
                                <input className='border-1 rounded-[5px] w-[259px] lg:w-[459px] pl-2 text-[#9aa5b3] border-[#9aa5b3]' type="text" placeholder='Select your education level' />
                            </div>

                            <div>
                                
                                <label htmlFor="">Why do you want to join this program?</label>
                                <input className='border-1 rounded-[5px] text-[13px] w-[259px] lg:w-[459px] h-[80px] pl-2 text-[#9aa5b3] border-[#9aa5b3]' type="text" placeholder='Tell us about your motivation to  join the program' />
                            </div>


                            <button className='bg-[#fbb404] text-white text-[20px] rounded-[12px] mt-5 w-[259px] lg:w-[459px] h-[40px]'>Submit Application</button>
                        </form>
                    </div>
            </div>

        </div>
    </div>

    
  )
}

export default HowToApply