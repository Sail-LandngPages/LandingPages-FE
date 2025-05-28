import backgroundimage from "./../../../assets/gamedev-assets/gamedevBackgroundImage.svg"
import gamer from "./../../../assets/gamedev-assets/gamer.svg"
import star from "./../../../assets/gamedev-assets/star.svg"
import "@fontsource/orbitron";

const GameHero = () => {
    return(
        <>
        <div className="w-full h-[92vh] bg-[#111827] bg-cover bg-center relative flex justify-center items-center" style={{ backgroundImage: `url(${backgroundimage})` }}>
            <div className="w-[1400px] h-[600px] flex  items-center justify-around">
                <div>
                    <h1 className="font-Orbitron font-bold text-[18px] text-[#FBAD04] mb-[20px]">LEVEL UP YOUR SKILLS</h1>
                    <h3 className="font-Orbitron font-bold text-[40px] text-white mb-[60px]">THINK YOU CAN OUTBUILD <br /> <span className="font-orbitron font-bold text-[40px] text-[#FBAD04]">COD?</span></h3>
                    <div className="w-[600px] h-[150px] border-l-[4px] border-[#61B8A8] pl-[20px] mb-[40px] flex justify-center items-center">
                        <p className="text-white text-[20px] font-[450]">Want to design your own video games, bring characters to life, and create experiences that millions can play? The SAIL Game Development Learning Track is your shortcut to becoming a game dev pro!</p>
                    </div>
                    <div className="flex justify-center items-center gap-7">
                        <button className="w-[250px] h-[45px] font-medium text-black text-[17px] bg-[#FBAD04] rounded-lg shadow-bottom">START YOUR QUEST HERE</button>
                        <button className="w-[250px] h-[45px] font-medium text-white text-[17px] border-[#61B8A8] border-[3px] rounded-lg shadow-bottom">VIEW SKILL TREE</button>
                    </div>
                </div>
                <div className="relative">
                    <img src={gamer} alt="Gamer" className="w-[700px] h-[650px]" />
                    <div className="border-[2px] border-[#FBAD04] p-[10px] rounded-lg w-[250px] bg-[#111827] gap-2] absolute top-[380px] left-[450px]">
                        <div className="flex gap-2">
                            <img src={star} alt="Star" className="" />
                            <p className="font-orbitron font-medium text-[#FBAD04] text-[20px]">100% <br />SCHOLARSHIPS</p>
                        </div>

                        <div>
                            <p className="text-[white]">Limited slots available! Apply now to secure your spot in the next cohort</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default GameHero;