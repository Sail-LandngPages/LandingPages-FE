import React from 'react'
import HeroSoftdev from '../../components/Software/HeroSoftdev'
import Sectiontwo from '../../components/Software/Sectiontwo'
import SectionThree from '../../components/Software/SectionThree'
import SectionFour from '../../components/Software/SectionFour'
import ProgramDetails from '../../components/Software/ProgramDetails'
import SucessStories from '../../components/Software/SucessStories'
import Faqs from '../../components/Software/Faqs'
import HowToApply from '../../components/Software/HowToApply'

const Softwaredev = () => {
  return (
    <div className=''>
        
        <HeroSoftdev/>
        <Sectiontwo/>
        <SectionThree/>
        <SectionFour/>
        <ProgramDetails/>
        <SucessStories/>
        <Faqs/>
        <HowToApply/>

    </div>
  )
}

export default Softwaredev