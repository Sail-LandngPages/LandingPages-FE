import GameHero from "./Components/gameHero";
import HelpCenter from "./Components/HelpCenter";
import Join from "./Components/Join";
import MissionBriefing from "./Components/MissionBriefing";
import PlayerReviews from "./Components/PlayerReviews";
import SkillTree from "./Components/SkillTree";
import Unlock from "./Components/Unlock";

const GameDev = () => {

    return(
        <>
            <GameHero/>
            <Unlock/>
            <SkillTree/>
            <MissionBriefing/>
            <PlayerReviews/>
            <HelpCenter/>
            <Join/>
        </>
    )
}

export default GameDev;