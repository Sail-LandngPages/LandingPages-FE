import red from '../../../assets/gamedev-assets/red.svg'
import orange from '../../../assets/gamedev-assets/orange.svg'
import green from '../../../assets/gamedev-assets/green.svg'
import q1 from '../../../assets/gamedev-assets/q1.svg'
import q2 from '../../../assets/gamedev-assets/q2.svg'
import q3 from '../../../assets/gamedev-assets/q3.svg'
import q4 from '../../../assets/gamedev-assets/q4.svg'
import q5 from '../../../assets/gamedev-assets/q5.svg'
import { useState } from 'react'

const HelpCenter = () => {
  const faqData = [
  { id: 1, image: q1, question: "Is this a program paid for?", answer: "Our program is fully funded, and selected participants will receive full scholarships covering all training expenses. This is a golden opportunity to advance your career in tech without financial barriers!" },
  { id: 2, image: q2, question: "Who can Apply for our Programs?", answer: "Our programs are designed to be beginner-friendly, well-structured, and comprehensive. Whether you're starting fresh or looking to upskill, we’ve got something for everyone. Upon successful completion, you’ll also receive a certificate to showcase your new skills!" },
  { id: 3, image: q3, question: "What is the learning duration?", answer: "Our program duration ranges between 3 to 6 months, depending on the course. All programs are thoughtfully structured to ensure you gain deep, hands-on experience while balancing flexibility." },
  { id: 4, image: q4, question: "How Will the Training Be Delivered?", answer: "The delivery method depends on the program you apply for. Our programs are designed to offer flexibility and are delivered through in-person, online, or hybrid approaches, ensuring you receive the best learning experience based on the program's format." },
  { id: 5, image: q5, question: "What Are the Prerequisites?", answer: "No prior experience in tech is required! All you need is a university degree (OND, HND, or BSc) and a strong desire to learn and grow. We're here to help you develop the skills you need for success!" },
];

const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

    return (
        <div className="flex justify-center items-center w-full p-[60px] bg-[#111827]">
            <div className="flex flex-col items-center justify-center text-center gap-4">
                <p className="font-[orbitron] text-[#FBAD04] text-[12px]">GAME MANUAL</p>
                <h1 className="font-[orbitron] font-bold text-white text-[25px]">HELP CENTER</h1>
                <section className='bg-[#FBAD04] w-[100px] h-[5px]'></section>
                <p className="text-gray-400">Get answers to the most common questions about our game development programme.</p>

                <div className="bg-[#1F2937] rounded-lg shadow-md w-full max-w-3xl">
                    <div className='flex items-center p-2 gap-[160px]'>
                        <div className='flex items-center gap-3'>
                            <img src={red} alt="red circle" />
                            <img src={orange} alt="orange circle" />
                            <img src={green} alt="green circle" />
                        </div>
                        <p className="text-gray-400 font-[orbitron] text-[15px]">FAQ DATABASE.exe</p>
                    </div>
                    <div className='border-1 border-gray-400 rounded-lg'>
                        {faqData.map((faq) => (
                        <div key={faq.id} className="w-full p-2 cursor-pointer" onClick={() => toggleFAQ(faq.id)}>
                            <div className="flex items-center gap-4 rounded-lg bg-[#111827] p-3">
                                <img src={faq.image} alt="Icon" className="w-[20px] h-[20px]" />
                                <h2 className="text-[#FBAD04] font-[orbitron] text-[12px]">{faq.question}</h2>
                            </div>

                            {openFAQ === faq.id && (
                            <p className="text-gray-300 font-[orbitron] text-[10px] mt-2">{faq.answer}</p>
                            )}
                        </div>
                      ))}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default HelpCenter;