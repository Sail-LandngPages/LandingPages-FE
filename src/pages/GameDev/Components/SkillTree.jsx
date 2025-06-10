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
    <div className="relative w-full bg-[#EDEEF0] mt-[70px] mb-[70px] flex flex-col justify-center items-center">
      <div className="bg-white p-[5px] w-[130px] absolute top-[-15px] left-1/2 transform -translate-x-1/2 rounded-lg flex justify-center items-center border-[2px] border-black">
        <p className="font-[orbitron] text-[15px]">SKILL TREE</p>
      </div>

      <div className="w-full max-w-[800px] flex flex-col gap-4 justify-center items-center p-[30px] rounded-lg">
        <h4 className="font-bold font-[orbitron] text-2xl">UNLOCK THESE ABILITIES</h4>
        <section className="bg-[#FBAD04] w-[100px] h-[5px]"></section>
        <p className="text-lg text-[#61656b]">Master the essential skills needed to create engaging, immersive gaming experiences.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {cardData.map((card) => (
          <div key={card.id} className="w-[350px] h-[350px] bg-white shadow-lg rounded-lg overflow-hidden" style={{ backgroundImage: `url(${unlock6})` }}>
            <img src={card.image} alt={card.title} className="w-full h-1/2 object-cover" />
            <div className="p-4 flex flex-col h-1/2">
              <div className="h-[30px] border-b-2 border-[#FBAD04] mb-0">
                <h2 className="text-[13px] font-[orbitron] font-bold">{card.title}</h2>
              </div>
              <p className="text-gray-600 text-[11px] mt-2">{card.text}</p>
              <div className="flex justify-between items-center mt-3">
                <h4 className="text-[12px] font-[orbitron]">{card.smallHeader}</h4>
                <span className="text-[12px] font-[orbitron] text-[#FBAD04]">{card.percentage}</span>
              </div>
              <div className="h-[3px] bg-[#c4c1bd] rounded-lg mt-1"></div>
            </div>
          </div>
        ))}

        {/* <div className="w-[350px] h-[300px] border-2 border-[#FBAD04] bg-[#111827] rounded-lg p-5 flex flex-col gap-2 lg:col-span-1 lg:row-start-3 lg:col-start-3 relative bottom-[325px]">
          <div className="flex gap-3">
            <img className="w-[20px]" src={Symbol1} alt="" />
            <h1 className="font-[orbitron] text-[13px] text-[white]">SELECT YOUR CLASS</h1>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-[10px]" src={Symbol2} alt="" />
            <h1 className="font-[orbitron] text-[#FBAD04] text-[11px]">Gamers who want to create, not just play</h1>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-[10px]" src={Symbol3} alt="" />
            <h1 className="font-[orbitron] text-[#FBAD04] text-[11px]">Storytellers who want to build immersive worlds</h1>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-[10px]" src={Symbol4} alt="" />
            <h1 className="font-[orbitron] text-[#FBAD04] text-[11px]">Artists who want to design characters, environments, and animations</h1>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-[10px]" src={Symbol5} alt="" />
            <h1 className="font-[orbitron] text-[#FBAD04] text-[11px]">Future tech moguls who see gaming as a billion-dollar opportunity</h1>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-[10px]" src={Symbol6} alt="" />
            <h1 className="font-[orbitron] text-[#FBAD04] text-[11px]">You. Definitely you.</h1>
          </div>
          <div className="w-full h-[50px] bg-[#FBAD04] flex justify-center items-center rounded-lg mt-4 cursor-pointer hover:bg-[#f8c34d] transition duration-300">
            <p className="font-[orbitron] text-[13px]">CREATE CHARACTER</p>
          </div>
        </div> */}
      </div>
    </div>

  )
}

export default SkillTree;
