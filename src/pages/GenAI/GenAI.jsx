import Curriculum from "./GenComps/Curriculum";
import Design from "./GenComps/Design";
import Engine from "./GenComps/Engine";
import Experience from "./GenComps/Experience";
import Expert from "./GenComps/Expert";
import GenHero from "./GenComps/GenHero";
import Shape from "./GenComps/Shape";

const GenAI = () => {
    return ( <div>
        <GenHero/>
        <Engine/>
        <Shape/>
        <Design/>
        <Curriculum/>
        <Experience/>
        <Expert/>

    </div> );
}
 
export default GenAI;