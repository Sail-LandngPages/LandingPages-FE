import icon1 from '../../../assets/gamedev-assets/greenIcon.svg'
import icon2 from '../../../assets/gamedev-assets/orangeIcon.svg'

const Unlock = () => {
    const cards = [
    {
      id: 1,
      image: icon2, // Replace with actual image URL
      heading: "Hands-On Learning",
      text: "Create real games from scratch and build a portfolio that showcases your skills.",
      borderColor: "border-[#FBAD04]",
    },
    {
      id: 2,
      image: icon1,
      heading: "Industry Mentors",
      text: "Learn directly from expert game designers and developers who've shipped real titles.",
      borderColor: "border-[#61B8A8]",
    },
    {
      id: 3,
      image: icon1,
      heading: "No Experience Needed",
      text: "We teach from beginner to pro with a curriculum designed for all skill levels.",
      borderColor: "border-[#61B8A8]",
    },
    {
      id: 4,
      image: icon1,
      heading: "Fully Funded",
      text: "100% scholarships available for qualified applicants. Limited slots available!",
      borderColor: "border-[#FBAD04]",
    },
  ];

  return (
    <div className=' w-full p-[50px] bg-[#111827] '>
        <div className='flex flex-col items-center justify-center gap-4'>
            <h1 className='text-[#FBAD04] font-[orbitron] text-[15px]'>GAME PERKS</h1>
            <h5 className='font-[orbitron] text-white text-[25px] text-bold leading-loose'>UNLOCK YOUR POTENTIAL</h5>
            <section className='bg-[#FBAD04] w-[100px] h-[5px]'></section>
            <p className='text-gray-400'>Level up your game development skills with our comprehensive program designed for creators like you</p>

            <div className="w-full flex flex-wrap justify-center gap-6 p-6">
                {cards.map((card) => (
                <div key={card.id} className={`w-[300px] p-4 bg-[#1F2937] shadow-md rounded-lg border-3 ${card.borderColor}`}>
                    <div className='flex gap-4 items-center'>
                        <img src={card.image} alt={card.heading} className="w-[20px]" />
                        <h2 className=" text-white font-[orbitron] font-bold mb-2">{card.heading}</h2>
                    </div>
                    <div className='border-l-2 border-[#7a8684] pl-2 mt-4'>
                        <p className="text-gray-400">{card.text}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Unlock;
