import unlock1 from '../../../assets/gamedev-assets/Game Design & Storytelling.png'
import unlock2 from '../../../assets/gamedev-assets/Unity & Unreal Engine.png'
import unlock3 from '../../../assets/gamedev-assets/Coding For Games.png'
import unlock4 from '../../../assets/gamedev-assets/Game Art & Animation.png'
import unlock5 from '../../../assets/gamedev-assets/Monetizing Your Game.png'
import unlock6 from '../../../assets/gamedev-assets/unlock1.svg'
import Symbol1 from '../../../assets/gamedev-assets/Symbol1.svg'
import Symbol2 from '../../../assets/gamedev-assets/Symbol2.svg'
import Symbol3 from '../../../assets/gamedev-assets/Symbol3.svg'
import Symbol4 from '../../../assets/gamedev-assets/Symbol4.svg'
import Symbol5 from '../../../assets/gamedev-assets/Symbol5.svg'
import Symbol6 from '../../../assets/gamedev-assets/Symbol6.svg'

const SkillTree = () => {
    const cardData = [
    { id: 1, image: unlock1, title: "GAME DESIGN & STORY TELLING", text: "Learn what makes games fun and addictive! Master level design, gameplay mechanics, and narrative development.", smallHeader: "SKILL POINTS", percentage: "+20" },
    { id: 2, image: unlock2, title: "UNITY & UNREAL ENGINE", text: "Master the powerful tools behind blockbuster games. Create stunning environments and interactive gameplay.", smallHeader: "SKILL POINTS", percentage: "+40" },
    { id: 3, image: unlock3, title: "CODING FOR GAMES", text: "Build mechanics, physics and AI with C# and Python. Learn to write efficient scallable game code.", smallHeader: "SKILL POINTS", percentage: "+60" },
    { id: 4, image: unlock4, title: "GAME ART & ANIMATION", text: "Bring your game world to life with 2D & 3D art creation. Design characters, environments and animations.", smallHeader: "SKILL POINTS", percentage: "+80" },
    { id: 5, image: unlock5, title: "MONETIZE YOUR GAME", text: "Learn how to turn your skills into $$$. Explore business models, marketing strategies and publishing.", smallHeader: "SKILL POINTS", percentage: "+100" },
  ];

    return (
    <div className="relative w-full bg-[#EDEEF0] mt-[70px] mb-[70px] flex flex-col justify-center items-center 2xl:mt-[70px] 2xl:mb-[70px] xl:mt-[60px] xl:mb-[60px] lg:mt-[50px] lg:mb-[50px] md:mt-[40px] md:mb-[40px] sm:mt-[35px] sm:mb-[35px]">
      <div className="bg-white p-[5px] w-[130px] absolute top-[-15px] left-1/2 transform -translate-x-1/2 rounded-lg flex justify-center items-center border-[2px] border-black 2xl:w-[130px] xl:w-[120px] lg:w-[110px] md:w-[100px] sm:w-[90px]">
        <p className="font-[orbitron] text-[15px] 2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px]">SKILL TREE</p>
      </div>

      <div className="w-full max-w-[800px] flex flex-col gap-4 justify-center items-center p-[30px] rounded-lg 2xl:max-w-[800px] 2xl:p-[30px] xl:max-w-[700px] xl:p-[25px] lg:max-w-[600px] lg:p-[20px] md:max-w-[500px] md:p-[18px] sm:max-w-[350px] sm:p-[15px]">
        <h4 className="font-bold font-[orbitron] text-2xl text-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm">UNLOCK THESE ABILITIES</h4>
        <section className="bg-[#FBAD04] w-[100px] h-[5px] 2xl:w-[100px] xl:w-[80px] lg:w-[70px] md:w-[60px] sm:w-[50px]"></section>
        <p className="text-lg text-[#61656b] text-center 2xl:text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs">Master the essential skills needed to create engaging, immersive gaming experiences.</p>
      </div>

      <div className="w-full flex flex-wrap justify-center items-start gap-6 p-6 relative 2xl:gap-6 2xl:p-6 xl:gap-5 xl:p-5 lg:gap-4 lg:p-4 md:gap-3 md:p-3 sm:gap-2 sm:p-2">
        
        {cardData.map((card) => (
          <div key={card.id} className="w-[350px] h-[350px] bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0 2xl:w-[350px] 2xl:h-[350px] xl:w-[320px] xl:h-[320px] lg:w-[280px] lg:h-[280px] md:w-[250px] md:h-[250px] sm:w-[300px] sm:h-[300px]" style={{ backgroundImage: `url(${unlock6})` }}>
            <div className="w-full h-full flex flex-col">
              <img src={card.image} alt={card.title} className="w-full h-1/2 object-cover" />
              <div className="p-4 flex flex-col h-1/2 2xl:p-4 xl:p-3 lg:p-3 md:p-2 sm:p-3">
                <div className="h-[30px] border-b-2 border-[#FBAD04] mb-0 2xl:h-[30px] xl:h-[25px] lg:h-[22px] md:h-[20px] sm:h-[25px]">
                  <h2 className="text-[13px] font-[orbitron] font-bold 2xl:text-[13px] xl:text-[12px] lg:text-[11px] md:text-[10px] sm:text-[11px]">{card.title}</h2>
                </div>
                <p className="text-gray-600 text-[11px] mt-2 2xl:text-[11px] xl:text-[10px] lg:text-[9px] md:text-[8px] sm:text-[9px]">{card.text}</p>
                <div className="flex justify-between items-center mt-3 2xl:mt-3 xl:mt-2 lg:mt-2 md:mt-1 sm:mt-2">
                  <h4 className="text-[12px] font-[orbitron] 2xl:text-[12px] xl:text-[11px] lg:text-[10px] md:text-[9px] sm:text-[10px]">{card.smallHeader}</h4>
                  <span className="text-[12px] font-[orbitron] text-[#FBAD04] 2xl:text-[12px] xl:text-[11px] lg:text-[10px] md:text-[9px] sm:text-[10px]">{card.percentage}</span>
                </div>
                <div className="h-[3px] bg-[#c4c1bd] rounded-lg mt-1 2xl:h-[3px] xl:h-[2px] lg:h-[2px] md:h-[2px] sm:h-[2px]"></div>
              </div>
            </div>
          </div>
        ))}

        <div className="w-[350px] h-[350px] border-2 border-[#FBAD04] bg-[#111827] rounded-lg p-5 flex flex-col gap-2 flex-shrink-0 2xl:w-[350px] 2xl:h-[300px] 2xl:p-5 xl:w-[320px] xl:h-[280px] xl:p-4 lg:w-[280px] lg:h-[250px] lg:p-4 md:w-[250px] md:h-[220px] md:p-3 sm:w-[300px] sm:h-[260px] sm:p-4">
          
          <div className="flex gap-3 items-center 2xl:gap-3 xl:gap-2 lg:gap-2 md:gap-2 sm:gap-2">
            <img className="w-[20px] 2xl:w-[20px] xl:w-[18px] lg:w-[16px] md:w-[14px] sm:w-[16px]" src={Symbol1} alt="" />
            <h1 className="font-[orbitron] text-[13px] text-[white] 2xl:text-[13px] xl:text-[12px] lg:text-[11px] md:text-[10px] sm:text-[11px]">SELECT YOUR CLASS</h1>
          </div>
          
          <div className="flex gap-3 items-center 2xl:gap-3 xl:gap-2 lg:gap-2 md:gap-2 sm:gap-2">
            <img className="w-[10px] 2xl:w-[10px] xl:w-[9px] lg:w-[8px] md:w-[7px] sm:w-[8px]" src={Symbol2} alt="" />
            <h1 className="font-[orbitron] text-[#FBAD04] text-[11px] 2xl:text-[11px] xl:text-[10px] lg:text-[9px] md:text-[8px] sm:text-[9px]">Gamers who want to create, not just play</h1>
          </div>
          
          <div className="flex gap-3 items-center 2xl:gap-3 xl:gap-2 lg:gap-2 md:gap-2 sm:gap-2">
            <img className="w-[10px] 2xl:w-[10px] xl:w-[9px] lg:w-[8px] md:w-[7px] sm:w-[8px]" src={Symbol3} alt="" />
            <h1 className="font-[orbitron] text-[#FBAD04] text-[11px] 2xl:text-[11px] xl:text-[10px] lg:text-[9px] md:text-[8px] sm:text-[9px]">Storytellers who want to build immersive worlds</h1>
          </div>
          
          <div className="flex gap-3 items-center 2xl:gap-3 xl:gap-2 lg:gap-2 md:gap-2 sm:gap-2">
            <img className="w-[10px] 2xl:w-[10px] xl:w-[9px] lg:w-[8px] md:w-[7px] sm:w-[8px]" src={Symbol4} alt="" />
            <h1 className="font-[orbitron] text-[#FBAD04] text-[11px] 2xl:text-[11px] xl:text-[10px] lg:text-[9px] md:text-[8px] sm:text-[9px]">Artists who want to design characters, environments, and animations</h1>
          </div>
          
          <div className="flex gap-3 items-center 2xl:gap-3 xl:gap-2 lg:gap-2 md:gap-2 sm:gap-2">
            <img className="w-[10px] 2xl:w-[10px] xl:w-[9px] lg:w-[8px] md:w-[7px] sm:w-[8px]" src={Symbol5} alt="" />
            <h1 className="font-[orbitron] text-[#FBAD04] text-[11px] 2xl:text-[11px] xl:text-[10px] lg:text-[9px] md:text-[8px] sm:text-[9px]">Future tech moguls who see gaming as a billion-dollar opportunity</h1>
          </div>
          
          <div className="flex gap-3 items-center 2xl:gap-3 xl:gap-2 lg:gap-2 md:gap-2 sm:gap-2">
            <img className="w-[10px] 2xl:w-[10px] xl:w-[9px] lg:w-[8px] md:w-[7px] sm:w-[8px]" src={Symbol6} alt="" />
            <h1 className="font-[orbitron] text-[#FBAD04] text-[11px] 2xl:text-[11px] xl:text-[10px] lg:text-[9px] md:text-[8px] sm:text-[9px]">You. Definitely you.</h1>
          </div>
          
          <div className="w-full h-[50px] bg-[#FBAD04] flex justify-center items-center rounded-lg mt-4 cursor-pointer hover:bg-[#f8c34d] transition duration-300 2xl:h-[50px] 2xl:mt-4 xl:h-[45px] xl:mt-3 lg:h-[40px] lg:mt-3 md:h-[35px] md:mt-2 sm:h-[40px] sm:mt-3">
            <p className="font-[orbitron] text-[13px] 2xl:text-[13px] xl:text-[12px] lg:text-[11px] md:text-[10px] sm:text-[11px]">CREATE CHARACTER</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillTree;