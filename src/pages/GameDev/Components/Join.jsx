import skill from '../../../assets/gamedev-assets/skills.svg'
import guild from '../../../assets/gamedev-assets/guild.svg'
import achievement from '../../../assets/gamedev-assets/achievement.svg'
import mail from '../../../assets/gamedev-assets/mail.svg'
import tag from '../../../assets/gamedev-assets/tag.svg'
import form from '../../../assets/gamedev-assets/form.svg'
import {useState} from 'react';

const Join = () => {
  const [formData, setFormData] = useState({ firstname: "", lastname: "", emailaddress: "", contactnumber: "", educationclass: "", experiencelevel: "", characterbackstory: "" });

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!isChecked) {
      alert("Please accept the terms and conditions.");
      return;
    }
    console.log("Form submitted:", formData);
  };

    return (
        <div className="w-full bg-[#EDEEF0] p-[60px] max-[700px]:p-[40px] max-[500px]:p-[20px] max-[320px]:p-[15px] flex flex-col justify-center items-center gap-[20px]">
            <div className="flex flex-col justify-center items-center gap-[20px]">
                <p className="font-[orbitron] text-[15px] max-[500px]:text-[13px] max-[320px]:text-[12px] text-center text-gray-500">CHARACTER CREATION</p>
                <h1 className="font-[orbitron] font-bold text-center text-[25px] max-[500px]:text-[20px] max-[320px]:text-[18px] text-black">JOIN THE ADVENTURE</h1>
                <section className='bg-[#FBAD04] w-[100px] max-[500px]:w-[80px] max-[320px]:w-[60px] h-[5px]'></section>
                <p className="text-gray-500 text-center max-[500px]:text-[14px] max-[320px]:text-[12px] max-[500px]:px-4">Submit your application to join our game development guild and begin your journey <br className="max-[500px]:hidden" />toward creating amazing games.</p>
            </div>

            <div className="flex max-[700px]:flex-col border-2 border-[#FBAD04] rounded-lg max-[700px]:w-full max-[500px]:max-w-[450px] max-[400px]:max-w-[350px] max-[320px]:max-w-[290px]">
                <div className="bg-[#111827] p-[10px] relative max-[700px]:w-full">
                    <img className='absolute right-[190px] bottom-[472px] max-[700px]:right-[20px] max-[700px]:top-[10px] max-[500px]:w-[15px] max-[320px]:w-[12px]' src={tag} alt="" />
                    <div className="p-[20px] w-[250px] max-[700px]:w-full">
                        <div>
                            <h1 className="font-[orbitron] text-[#FBAD04] max-[500px]:text-[14px] max-[320px]:text-[12px]">CHARACTER STATS</h1>
                            <div className="text-gray-500 border-l-2 border-[#7a8684] pl-2 mt-4">
                                <p className="text-[12px] max-[500px]:text-[11px] max-[320px]:text-[10px]">Create your developer profile and join our elite program. Fill out the form and our team will contact you.</p>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-4'>
                            <div>
                                <img className='w-[15px] max-[500px]:w-[12px] max-[320px]:w-[10px]' src={skill} alt="skill" />
                            </div>

                            <div className='border-b-2 border-[#FBAD04] pb-2'>
                                <h2 className="text-[#FBAD04] font-[orbitron] text-[11px] max-[500px]:text-[10px] max-[320px]:text-[9px]">SKILL DEVELOPMENT</h2>
                                <p className="text-gray-500 text-[10px] max-[500px]:text-[9px] max-[320px]:text-[8px]">Comprehensive curriculum tailored for the game industry</p>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-4'>
                            <div>
                                <img className='w-[15px] max-[500px]:w-[12px] max-[320px]:w-[10px]' src={guild} alt="guild" />
                            </div>

                            <div className='border-b-2 border-[#FBAD04] pb-2'>
                                <h2 className="text-[#FBAD04] font-[orbitron] text-[11px] max-[500px]:text-[10px] max-[320px]:text-[9px]">BUILD CONNECTIONS</h2>
                                <p className="text-gray-500 text-[10px] max-[500px]:text-[9px] max-[320px]:text-[8px]">Network with top game studios and industry professionals</p>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-4 mb-10'>
                            <div>
                                <img className='w-[15px] max-[500px]:w-[12px] max-[320px]:w-[10px]' src={achievement} alt="achievement" />
                            </div>

                            <div className='border-b-2 border-[#FBAD04] pb-2'>
                                <h2 className="text-[#FBAD04] font-[orbitron] text-[11px] max-[500px]:text-[10px] max-[320px]:text-[9px]">ACHIEVEMENT UNLOCKED</h2>
                                <p className="text-gray-500 text-[10px] max-[500px]:text-[9px] max-[320px]:text-[8px]">Every industry-recognized certification upon completion</p>
                            </div>
                        </div>
                        <div className='w-full p-3 bg-[#1F2937] rounded-lg'>
                            <p className='font-[orbitron] text-gray-500 text-[10px] max-[500px]:text-[9px] max-[320px]:text-[8px]'>NEED ASSISTANCE?</p>
                            <div className='flex items-center gap-2'>
                                <img src={mail} alt="mail" className='max-[500px]:w-[12px] max-[320px]:w-[10px]' />
                                <a href='mailto:info@sailprogram.com' className='text-[#61B8A8] text-[10px] max-[500px]:text-[9px] max-[320px]:text-[8px]'>info@sailprogram.com</a>
                            </div>
                        </div>
                    </div>    
                </div>

                <div className="bg-[#1F2937] p-[20px] w-[400px] max-[700px]:w-full flex flex-col gap-5">
                    <div className='flex gap-5 items-center'>
                        <img className='w-[10px] max-[500px]:w-[8px] max-[320px]:w-[7px]' src={form} alt="" />
                        <p className='font-[orbitron] text-white font-bold text-[13px] max-[500px]:text-[12px] max-[320px]:text-[11px]'>CREATE YOUR <span className='text-[#FBAD04]'>PROFILE</span></p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className='flex gap-4 max-[500px]:flex-col max-[500px]:gap-3'>
                            <div className='w-[250px] max-[700px]:w-full flex flex-col'>
                                <label htmlFor="firstname" className="text-[#FBAD04] font-[orbitron] mb-2 text-[12px] max-[500px]:text-[11px] max-[320px]:text-[10px]">FIRST NAME</label>
                                <input className="w-full p-2 rounded-md bg-[#374151] text-white text-[13px] max-[500px]:text-[12px] max-[320px]:text-[11px] placeholder-gray-500"  type="text" name='firstname' id='firstname' placeholder='Enter your first name' value={formData.firstname} onChange={handleChange} required />
                            </div>
                            <div className='w-[250px] max-[700px]:w-full flex flex-col'>
                                <label htmlFor="lastname" className="text-[#FBAD04] font-[orbitron] mb-2 text-[12px] max-[500px]:text-[11px] max-[320px]:text-[10px]">LAST NAME</label>
                                <input className="w-full p-2 rounded-md bg-[#374151] text-white text-[13px] max-[500px]:text-[12px] max-[320px]:text-[11px] placeholder-gray-500"  type="text" name='lastname' id='lastname'  placeholder='Enter your last name' value={formData.lastname} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className='flex gap-4 max-[500px]:flex-col max-[500px]:gap-3'>
                            <div className='w-[250px] max-[700px]:w-full flex flex-col'>
                                <label htmlFor="emailaddress" className="text-[#FBAD04] font-[orbitron] mb-2 text-[12px] max-[500px]:text-[11px] max-[320px]:text-[10px]">EMAIL ADDRESS</label>
                                <input className="w-full p-2 rounded-md bg-[#374151] text-white text-[13px] max-[500px]:text-[12px] max-[320px]:text-[11px] placeholder-gray-500"  type="email" name='emailaddress' id='emailaddress' placeholder='your@email.com' value={formData.emailaddress} onChange={handleChange} required />
                            </div>
                            <div className='w-[250px] max-[700px]:w-full flex flex-col'>
                                <label htmlFor="contactnumber" className="text-[#FBAD04] font-[orbitron] mb-2 text-[12px] max-[500px]:text-[11px] max-[320px]:text-[10px]">CONTACT NUMBER</label>
                                <input className="w-full p-2 rounded-md bg-[#374151] text-white text-[13px] max-[500px]:text-[12px] max-[320px]:text-[11px] placeholder-gray-500"  type="text" name='contactnumber' id='contactnumber'  placeholder='+1234567890' value={formData.contactnumber} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className='flex gap-4 max-[500px]:flex-col max-[500px]:gap-3'>
                            <div className='w-[250px] max-[700px]:w-full flex flex-col'>
                                <label htmlFor="educationclass" className="text-[#FBAD04] font-[orbitron] mb-2 text-[12px] max-[500px]:text-[11px] max-[320px]:text-[10px]">EDUCATION CLASS</label>
                                <select name="educationclass" id="educationclass" value={formData.educationclass} onChange={handleChange} required className="w-full p-2 rounded-md bg-[#374151] text-white text-[13px] max-[500px]:text-[12px] max-[320px]:text-[11px] placeholder-gray-500">
                                    <option value="" disabled>Select class</option>
                                    <option value="productdesign">Product Design</option>
                                    <option value="gamedevelopment">Game Development</option>
                                    <option value="frontend">FrontEnd</option>
                                    <option value="backend">BackEnd</option>
                                    <option value="generativeAI">Gaenerative AI</option>
                                    <option value="blockchaindevelopment">Blockchain Development</option>
                                    <option value="datascience">Data Science</option>
                                    <option value="softwaredevelopment">Software Development</option>
                                </select>
                            </div>
                            <div className='w-[250px] max-[700px]:w-full flex flex-col'>
                                <label htmlFor="experiencelevel" className="text-[#FBAD04] font-[orbitron] mb-2 text-[12px] max-[500px]:text-[11px] max-[320px]:text-[10px]">EXPERIENCE LEVEL</label>
                                <select name="experiencelevel" id="experiencelevel" value={formData.experiencelevel} onChange={handleChange} required className="w-full p-2 rounded-md bg-[#374151] text-white text-[13px] max-[500px]:text-[12px] max-[320px]:text-[11px] placeholder-gray-500">
                                    <option value="" disabled>Select Level</option>
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="advanced">Advanced</option>
                                </select>
                            </div>
                        </div>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="characterbackstory" className="text-[#FBAD04] font-[orbitron] mb-2 text-[12px] max-[500px]:text-[11px] max-[320px]:text-[10px]">CHARACTER BACKSTORY</label>
                            <textarea name="characterbackstory" id="characterbackstory" placeholder='Tell us why you want to join this program and what you hope to achieve...' value={formData.characterbackstory} onChange={handleChange} required className='w-full p-2 rounded-md bg-[#374151] text-white text-[13px] max-[500px]:text-[12px] max-[320px]:text-[11px] placeholder-gray-500 min-h-[80px]'></textarea>
                        </div>

                        <div className="flex items-center gap-2">
                            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="w-5 h-5 max-[500px]:w-4 max-[500px]:h-4 max-[320px]:w-3 max-[320px]:h-3 rounded-full border-2 border-gray-500 bg-border-gray-500 cursor-pointer transition duration-200"style={{ backgroundColor: isChecked ? "#FBAD04" : "transparent" }}/>
                            <p className="text-white text-[12px] max-[500px]:text-[11px] max-[320px]:text-[10px]">I agree to the <span className='text-[#FBAD04]'>Terms & Conditions</span> and <span className='text-[#FBAD04]'>Privacy Policy</span>.</p>
                        </div>

                        <button type="submit" className={`w-full p-2 rounded-md text-[14px] max-[500px]:text-[13px] max-[320px]:text-[12px] border-b-4 border-[#926b18] font-[orbitron] text-black ${ isChecked ? "bg-[#FBAD04] text-black" : "bg-gray-500 text-gray-300 cursor-not-allowed"}`} disabled={!isChecked}>
                        BEGIN YOUR JOURNEY
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Join;