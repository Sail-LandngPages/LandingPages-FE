import missionImg from '../../../assets/gamedev-assets/missionImg.svg';
import c1 from '../../../assets/gamedev-assets/c1.svg';
import c2 from '../../../assets/gamedev-assets/c2.svg';
import c3 from '../../../assets/gamedev-assets/c3.svg';
import c4 from '../../../assets/gamedev-assets/c4.svg';
import c5 from '../../../assets/gamedev-assets/c5.svg';
import c6 from '../../../assets/gamedev-assets/c6.svg';

const MissionBriefing = () => {
    
const cards = [
  { id: 1, image: c1, title: "START DATE", text: "To be communicated." },
  { id: 2, image: c2, title: "DURATION", text: "3 Months" },
  { id: 3, image: c3, title: "LOCATION", text: "In-Person" },
  { id: 4, image: c6, title: "COST", text: "Fully Funded (Limited Slots)" },
];
  return (
    <div className='bg-[#141A28] w-full flex justify-center p-[60px] items-center'>
        <div className='border-3 p-[20px] w-[1280px] border-[#FBAD04] flex flex-col justify-center items-center rounded-lg'>
            <div className='border-b-1 border-[#374151] w-full flex justify-between items-center p-[10px]'>
                <div className='flex justify-center items-center gap-[10px]'>
                    <img src={missionImg} alt="Mission Briefing" className='w-[10px]'/>
                    <h1 className='text-white font-[orbitron] font-bold'>MISSION <span className='text-[#FBAD04]'>BRIEFING</span></h1>
                </div>
                <div className='rounded-lg bg-[#374151] text-[12px] w-[160px] h-[25px] flex justify-center items-center'>
                    <p className='text-[#FBAD04] font-[orbitron]'>MISSION ID: GO 2025</p>
                </div>
            </div>

            <div className='w-full flex items-start justify-between p-[20px]'>
                <div className='flex flex-col justify-center items-start'>
                    <p className='text-[#61B8A8] text-[12px] font-[orbitron] ml-6'>EVERYTHING YOU NEED TOO KNOW ABOUT YOUR GAME DEV JOURNEY</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                        {cards.map((card) => (
                        <div key={card.id} className="w-[350px] bg-[#2A3443] shadow-md rounded-lg border-l-4 border-[#FBAD04] flex items-center p-4">
                        <img src={card.image} alt={card.title} className="w-[11px] h-[30px]" />

                        <div className="ml-4">
                            <h2 className="font-[orbitron] text-[#FBAD04] text-[13px]">{card.title}</h2>
                            <p className="text-white text-[12px]">{card.text}</p>
                        </div>
                    </div>
                    ))}
                    </div>
                    </div>
                    <div>

                </div>
                <div className='border-2 border-[#61B8A8] rounded-lg w-[300px] p-5'>
                    <div className='flex justify-between items-center mb-[10px]'>
                        <img src={c4} alt="" />
                        <h3 className='font-[orbitron] text-white'>START YOUR <span className='text-[#FBAD04]'>QUEST</span></h3>
                    </div>
                    <div className='p-[10px] border-l-1 border-[#374151]'>
                        <p className='text-gray-400 text-[11px]'>Don't just play games-create them! Apply now and start your journey in Game Development & interractive Media.</p>
                    </div>
                    <div className='flex justify-center items-center w-full bg-[#FBAD04] h-[40px] rounded-lg mt-[20px] cursor-pointer hover:bg-[#61B8A8] transition-all duration-300 border-b-4 border-[#926b18] hover:border-[#FBAD04]'>
                        <p className='font-[orbitron] text-[12px]'>JOIN THE GUILD🎮</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default MissionBriefing
