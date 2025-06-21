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

const cardData = [
  {
    id: 1,
    image: unlock1,
    title: 'GAME DESIGN & STORY TELLING',
    text: 'Learn what makes games fun and addictive! Master level design, gameplay mechanics, and narrative development.',
    smallHeader: 'SKILL POINTS',
    percentage: '+20',
  },
  {
    id: 2,
    image: unlock2,
    title: 'UNITY & UNREAL ENGINE',
    text: 'Master the powerful tools behind blockbuster games. Create stunning environments and interactive gameplay.',
    smallHeader: 'SKILL POINTS',
    percentage: '+40',
  },
  {
    id: 3,
    image: unlock3,
    title: 'CODING FOR GAMES',
    text: 'Build mechanics, physics and AI with C# and Python. Learn to write efficient scalable game code.',
    smallHeader: 'SKILL POINTS',
    percentage: '+60',
  },
  {
    id: 4,
    image: unlock4,
    title: 'GAME ART & ANIMATION',
    text: 'Bring your game world to life with 2D & 3D art creation. Design characters, environments and animations.',
    smallHeader: 'SKILL POINTS',
    percentage: '+80',
  },
  {
    id: 5,
    image: unlock5,
    title: 'MONETIZE YOUR GAME',
    text: 'Learn how to turn your skills into $$$. Explore business models, marketing strategies and publishing.',
    smallHeader: 'SKILL POINTS',
    percentage: '+100',
  },
];

const SkillTree = () => {
  return (
    <div className="relative w-full bg-[#EDEEF0] py-16 px-4 flex flex-col items-center">

      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white border-2 border-black px-4 py-1 rounded-lg text-center font-[orbitron] text-sm md:text-base">
        SKILL TREE
      </div>

      <div className="text-center max-w-3xl mb-10 px-4">
        <h2 className="font-[orbitron] font-bold text-xl md:text-2xl lg:text-3xl">UNLOCK THESE ABILITIES</h2>
        <div className="bg-[#FBAD04] w-24 h-1 my-2 mx-auto"></div>
        <p className="text-[#61656b] text-sm md:text-base">
          Master the essential skills needed to create engaging, immersive gaming experiences.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden relative flex flex-col max-w-sm mx-auto"
            style={{ backgroundImage: `url(${unlock6})`, backgroundSize: 'cover' }}
          >
            <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-[orbitron] font-bold text-xs sm:text-sm md:text-base border-b-2 border-[#FBAD04] pb-1 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm flex-grow">{card.text}</p>
              <div className="flex justify-between items-center mt-4 text-xs sm:text-sm">
                <span className="font-[orbitron]">{card.smallHeader}</span>
                <span className="font-[orbitron] text-[#FBAD04]">{card.percentage}</span>
              </div>
              <div className="h-[3px] bg-[#c4c1bd] rounded-lg mt-1"></div>
            </div>
          </div>
        ))}

      
        <div className="bg-[#111827] text-white border-2 border-[#FBAD04] rounded-lg p-4 flex flex-col justify-between max-w-sm mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <img src={Symbol1} alt="" className="w-5" />
            <h3 className="font-[orbitron] text-sm">SELECT YOUR CLASS</h3>
          </div>

          {[Symbol2, Symbol3, Symbol4, Symbol5, Symbol6].map((icon, idx) => {
            const messages = [
              'Gamers who want to create, not just play',
              'Storytellers who want to build immersive worlds',
              'Artists who want to design characters, environments, and animations',
              'Future tech moguls who see gaming as a billion-dollar opportunity',
              'You. Definitely you.',
            ];
            return (
              <div key={idx} className="flex items-start gap-2 mb-2">
                <img src={icon} alt="" className="w-3 mt-1" />
                <p className="font-[orbitron] text-xs text-[#FBAD04]">{messages[idx]}</p>
              </div>
            );
          })}

          <button className="w-full mt-4 py-2 bg-[#FBAD04] hover:bg-[#f8c34d] text-black font-[orbitron] text-sm rounded-lg transition duration-300">
            CREATE CHARACTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillTree;