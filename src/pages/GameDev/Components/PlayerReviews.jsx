import person from '../../../assets/gamedev-assets/person.svg'
import sticker from '../../../assets/gamedev-assets/sticker.svg'

const PlayerReviews = () => {
    const testimonials = [
  {
    id: 1,
    image: sticker,
    comment: "SAIL's Game Dev Track changed my lif. I built my first game, got a job offer, and now I'm creating my dream RPG!",
    profilePic: person,
    name: "Jane Doe",
    role: "Game Developer",
    rating: "⭐⭐⭐",
  },
  {
    id: 2,
    image: sticker,
    comment: "I always loved gaming but never thought I could MAKE a game. Now I can-and it's incredible! SAIL gave me the skills and confidence I needed.",
    profilePic: person,
    name: "John Smith",
    role: "Indie Game Creator",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    image: sticker,
    comment: "The mentors at SAIL are industry veterans who gave practical advice that no tutorial could. They helped me land my dream job at a game studio!",
    profilePic: person,
    name: "Alex Taylor",
    role: "3D Artist",
    rating: "⭐⭐⭐⭐⭐",
  },
];

    return(
        <div className="w-full bg-[#EDEEF0] flex flex-col items-center gap-[20px]">
            <div className=' w-full flex flex-col items-center gap-[20px] mb-7'>
                <div className="flex justify-center items-center w-[200px] rounded-lg bg-white">
                    <p className="font-[orbitron] text-[15px]">PLAYER REVIEWS</p>
                </div>
                <h6 className="font-[orbitron] font-bold text-3xl">WHAT OUR GRADUATES SAY</h6>
                <section className="bg-[#FBAD04] w-[100px] h-[5px]"></section>
                <p className='text-[#61656b]'>Hear from the game developers who transformed their passion through our program.</p>

                <div className="flex flex-wrap justify-center gap-6 p-6">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="w-[420px] h-[200px] bg-white shadow-lg rounded-lg p-4 relative flex flex-col justify-between items-start">
                            <img src={testimonial.image} alt="Feature" className="absolute bottom-35 left-90 w-[60px] h-[60px] z-0"/>

                            <div className="bg-gray-100 rounded-lg border-[#FBAD04] border-2 p-3 text-gray-700 text-sm z-10">
                                {testimonial.comment}
                            </div>
                            <div className="flex items-center gap-4">
                                <img src={testimonial.profilePic} alt={testimonial.name} className="w-[50px] h-[50px]" />
                                <div>
                                <h4 className="text-md font-bold font-[orbitron]">{testimonial.name}</h4>
                                <p className="text-[12px] font-[orbitron] text-[#61B8A8]">{testimonial.role}</p>
                            </div>
                            <p className="text-[12px] text-yellow-500">{testimonial.rating}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PlayerReviews;