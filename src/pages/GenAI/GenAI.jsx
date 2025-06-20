import Build from "./GenComps/Build";
import Curriculum from "./GenComps/Curriculum";
import Design from "./GenComps/Design";
import Engine from "./GenComps/Engine";
import Experience from "./GenComps/Experience";
import Expert from "./GenComps/Expert";
import GenFoot from "./GenComps/GenFoot";
import GenHero from "./GenComps/GenHero";
import Shape from "./GenComps/Shape";
import WhyLearn from "./GenComps/WhyLearn";

const GenAI = () => {
    return ( <div>
        <GenHero/>
        <Engine/>
        <Shape/>
        <Design/>
        <Curriculum/>
        <Experience/>
        <Expert/>
        <Build/>
        <WhyLearn/>
        <GenFoot/>

    </div> );
}
 
export default GenAI;