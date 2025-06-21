// import missionImg from '../../../assets/gamedev-assets/missionImg.svg';
// import c1 from '../../../assets/gamedev-assets/c1.svg';
// import c2 from '../../../assets/gamedev-assets/c2.svg';
// import c3 from '../../../assets/gamedev-assets/c3.svg';
// import c4 from '../../../assets/gamedev-assets/c4.svg';
// import c5 from '../../../assets/gamedev-assets/c5.svg';
// import c6 from '../../../assets/gamedev-assets/c6.svg';

// const MissionBriefing = () => {
    
// const cards = [
//   { id: 1, image: c1, title: "START DATE", text: "To be communicated." },
//   { id: 2, image: c2, title: "DURATION", text: "3 Months" },
//   { id: 3, image: c3, title: "LOCATION", text: "In-Person" },
//   { id: 4, image: c6, title: "COST", text: "Fully Funded (Limited Slots)" },
// ];
//   return (
//     <div className='bg-[#141A28] w-full flex justify-center p-[60px] items-center'>
//         <div className='border-3 p-[20px] w-[1280px] border-[#FBAD04] flex flex-col justify-center items-center rounded-lg'>
//             <div className='border-b-1 border-[#374151] w-full flex justify-between items-center p-[10px]'>
//                 <div className='flex justify-center items-center gap-[10px]'>
//                     <img src={missionImg} alt="Mission Briefing" className='w-[10px]'/>
//                     <h1 className='text-white font-[orbitron] font-bold'>MISSION <span className='text-[#FBAD04]'>BRIEFING</span></h1>
//                 </div>
//                 <div className='rounded-lg bg-[#374151] text-[12px] w-[160px] h-[25px] flex justify-center items-center'>
//                     <p className='text-[#FBAD04] font-[orbitron]'>MISSION ID: GO 2025</p>
//                 </div>
//             </div>

//             <div className='w-full flex items-start justify-between p-[20px]'>
//                 <div className='flex flex-col justify-center items-start'>
//                     <p className='text-[#61B8A8] text-[12px] font-[orbitron] ml-6'>EVERYTHING YOU NEED TOO KNOW ABOUT YOUR GAME DEV JOURNEY</p>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
//                         {cards.map((card) => (
//                         <div key={card.id} className="w-[350px] bg-[#2A3443] shadow-md rounded-lg border-l-4 border-[#FBAD04] flex items-center p-4">
//                         <img src={card.image} alt={card.title} className="w-[11px] h-[30px]" />

//                         <div className="ml-4">
//                             <h2 className="font-[orbitron] text-[#FBAD04] text-[13px]">{card.title}</h2>
//                             <p className="text-white text-[12px]">{card.text}</p>
//                         </div>
//                     </div>
//                     ))}
//                     </div>
//                     </div>
//                     <div>

//                 </div>
//                 <div className='border-2 border-[#61B8A8] rounded-lg w-[300px] p-5'>
//                     <div className='flex justify-between items-center mb-[10px]'>
//                         <img src={c4} alt="" />
//                         <h3 className='font-[orbitron] text-white'>START YOUR <span className='text-[#FBAD04]'>QUEST</span></h3>
//                     </div>
//                     <div className='p-[10px] border-l-1 border-[#374151]'>
//                         <p className='text-gray-400 text-[11px]'>Don't just play games-create them! Apply now and start your journey in Game Development & interractive Media.</p>
//                     </div>
//                     <div className='flex justify-center items-center w-full bg-[#FBAD04] h-[40px] rounded-lg mt-[20px] cursor-pointer hover:bg-[#61B8A8] transition-all duration-300 border-b-4 border-[#926b18] hover:border-[#FBAD04]'>
//                         <p className='font-[orbitron] text-[12px]'>JOIN THE GUILD🎮</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
      
//     </div>
//   )
// }

// export default MissionBriefing

import missionImg from '../../../assets/gamedev-assets/missionImg.svg';
import c1 from '../../../assets/gamedev-assets/c1.svg';
import c2 from '../../../assets/gamedev-assets/c2.svg';
import c3 from '../../../assets/gamedev-assets/c3.svg';
import c4 from '../../../assets/gamedev-assets/c4.svg';
import c6 from '../../../assets/gamedev-assets/c6.svg';

const cards = [
  { id: 1, image: c1, title: "START DATE", text: "To be communicated." },
  { id: 2, image: c2, title: "DURATION", text: "3 Months" },
  { id: 3, image: c3, title: "LOCATION", text: "In-Person" },
  { id: 4, image: c6, title: "COST", text: "Fully Funded (Limited Slots)" },
];

const InfoCard = ({ image, title, text }) => (
  <div className="w-full max-w-[350px] bg-[#2A3443] shadow-md rounded-lg border-l-4 border-[#FBAD04] flex items-center p-4">
    <img src={image} alt={title} loading="lazy" className="w-5 h-8 md:w-6 md:h-10 flex-shrink-0" />
    <div className="ml-4 flex-1 min-w-0">
      <h2 className="font-[orbitron] text-[#FBAD04] text-sm md:text-base">{title}</h2>
      <p className="text-white text-xs md:text-sm">{text}</p>
    </div>
  </div>
);

const MissionBriefing = () => {
  return (
    <div className='bg-[#141A28] w-full flex justify-center p-6 sm:p-4'>
      <div className='border p-6 w-full max-w-[1280px] border-[#FBAD04] flex flex-col items-center rounded-lg'>

        
        <div className='border-b border-[#374151] w-full flex flex-wrap justify-between items-center gap-4 p-4'>
          <div className='flex items-center gap-3'>
            <img src={missionImg} alt="Mission" className='w-4 md:w-5' />
            <h1 className='text-white font-[orbitron] font-bold text-sm md:text-base'>
              MISSION <span className='text-[#FBAD04]'>BRIEFING</span>
            </h1>
          </div>
          <div className='rounded-lg bg-[#374151] text-xs md:text-sm w-fit px-4 py-1'>
            <p className='text-[#FBAD04] font-[orbitron]'>MISSION ID: GO 2025</p>
          </div>
        </div>

        
        <div className='w-full flex flex-col md:flex-row justify-between items-start gap-6 p-6'>

        
          <div className='flex flex-col flex-1'>
            <p className='text-[#61B8A8] text-left text-xs md:text-sm font-[orbitron] mb-4 ml-0 sm:ml-4'>
              EVERYTHING YOU NEED TO KNOW ABOUT YOUR GAME DEV JOURNEY
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cards.map(card => (
                <InfoCard key={card.id} {...card} />
              ))}
            </div>
          </div>

          
          <div className='border-2 border-[#61B8A8] rounded-lg w-full max-w-[350px] p-4 mt-6 md:mt-0 flex-shrink-0'>
            <div className='flex items-center justify-between mb-4 gap-2'>
              <img src={c4} alt="Quest Icon" className='w-5 md:w-6' />
              <h3 className='font-[orbitron] text-white text-sm md:text-base text-right'>
                START YOUR <span className='text-[#FBAD04]'>QUEST</span>
              </h3>
            </div>

            <div className='p-2 border-l border-[#374151]'>
              <p className='text-gray-400 text-xs md:text-sm'>
                Don't just play games—create them! Apply now and start your journey in Game Development & Interactive Media.
              </p>
            </div>

            <div className='flex justify-center items-center w-full bg-[#FBAD04] h-10 md:h-12 rounded-lg mt-5 cursor-pointer hover:bg-[#61B8A8] transition-all duration-300 border-b-4 border-[#926b18] hover:border-[#FBAD04]'>
              <p className='font-[orbitron] text-xs md:text-sm'>JOIN THE GUILD 🎮</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionBriefing;

// import styled from "styled-components";
// import missionImg from "../../../assets/gamedev-assets/missionImg.svg";
// import c1 from "../../../assets/gamedev-assets/c1.svg";
// import c2 from "../../../assets/gamedev-assets/c2.svg";
// import c3 from "../../../assets/gamedev-assets/c3.svg";
// import c4 from "../../../assets/gamedev-assets/c4.svg";
// import c6 from "../../../assets/gamedev-assets/c6.svg";
// import "@fontsource/orbitron";

// const MissionBriefing = () => {
//   const cards = [
//     { id: 1, image: c1, title: "START DATE", text: "To be communicated." },
//     { id: 2, image: c2, title: "DURATION", text: "3 Months" },
//     { id: 3, image: c3, title: "LOCATION", text: "In-Person" },
//     { id: 4, image: c6, title: "COST", text: "Fully Funded (Limited Slots)" },
//   ];

//   return (
//     <MissionContainer>
//       <InnerContainer>
//         <HeaderSection>
//           <HeaderLeft>
//             <MissionIcon src={missionImg} alt="Mission Briefing" />
//             <Heading>
//               MISSION <span>BRIEFING</span>
//             </Heading>
//           </HeaderLeft>
//           <MissionIDBox>
//             <MissionIDText>MISSION ID: GO 2025</MissionIDText>
//           </MissionIDBox>
//         </HeaderSection>
//         <ContentSection>
//           <LeftContent>
//             <Subheading>EVERYTHING YOU NEED TO KNOW ABOUT YOUR GAME DEV JOURNEY</Subheading>
//             <CardGrid>
//               {cards.map((card) => (
//                 <Card key={card.id}>
//                   <CardIcon src={card.image} alt={card.title} />
//                   <CardContent>
//                     <CardTitle>{card.title}</CardTitle>
//                     <CardText>{card.text}</CardText>
//                   </CardContent>
//                 </Card>
//               ))}
//             </CardGrid>
//           </LeftContent>
//           <RightContent>
//             <QuestHeader>
//               <QuestIcon src={c4} alt="Quest Icon" />
//               <QuestTitle>
//                 START YOUR <span>QUEST</span>
//               </QuestTitle>
//             </QuestHeader>
//             <QuestDescription>
//               <QuestText>
//                 Don't just play games-create them! Apply now and start your journey in Game Development & Interactive Media.
//               </QuestText>
//             </QuestDescription>
//             <JoinButton>
//               <ButtonText>JOIN THE GUILD🎮</ButtonText>
//             </JoinButton>
//           </RightContent>
//         </ContentSection>
//       </InnerContainer>
//     </MissionContainer>
//   );
// };

// export default MissionBriefing;

// const MissionContainer = styled.div`
//   background-color: #141a28;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   padding: 60px;
//   align-items: center;

//   @media (max-width: 1440px) {
//     padding: 48px; 
//   }
//   @media (max-width: 1024px) {
//     padding: 40px;
//   }
//   @media (max-width: 768px) {
//     padding: 32px;
//   }
//   @media (max-width: 390px) {
//     padding: 24px; 
//   }
//   @media (max-width: 375px) {
//     padding: 16px; 
//   }
// `;

// const InnerContainer = styled.div`
//   border: 3px solid #fbad04; 
//   padding: 20px;
//   width: 1280px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 8px;

//   @media (max-width: 1440px) {
//     width: 90%;
//   }
//   @media (max-width: 1024px) {
//     width: 80%;
//     padding: 16px;
//   }
//   @media (max-width: 768px) {
//     width: 80%;
//     padding: 12px;
//   }
//   @media (max-width: 390px) {
//     padding: 10px;
//   }
//   @media (max-width: 375px) {
//     padding: 8px;
//   }
// `;

// const HeaderSection = styled.div`
//   border-bottom: 1px solid #374151;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;

//   @media (max-width: 768px) {
//     gap: 12px;
//     padding: 8px;
//   }
//   @media (max-width: 390px) {
//     gap: 10px; 
//     padding: 6px;
//   }
//   @media (max-width: 375px) {
//     gap: 8px;
//     padding: 6px;
//   }
// `;

// const HeaderLeft = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
// `;

// const MissionIcon = styled.img`
//   width: 10px;

//   @media (max-width: 768px) {
//     width: 9px; 
//   }
//   @media (max-width: 390px) {
//     width: 8px; 
//   }
//   @media (max-width: 375px) {
//     width: 7px;
//   }
// `;

// const Heading = styled.h1`
//   font-family: "Orbitron", sans-serif;
//   font-weight: 700;
//   color: white;
//   font-size: 16px;

//   & span {
//     color: #fbad04;
//   }

//   @media (max-width: 1440px) {
//     font-size: 15px; 
//   }
//   @media (max-width: 1024px) {
//     font-size: 14px; 
//   }
//   @media (max-width: 768px) {
//     font-size: 13px; 
//   }
//   @media (max-width: 390px) {
//     font-size: 12px; 
//   }
//   @media (max-width: 375px) {
//     font-size: 11px;
//   }
// `;

// const MissionIDBox = styled.div`
//   border-radius: 8px;
//   background-color: #374151;
//   width: 160px;
//   height: 25px;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 1440px) {
//     width: 140px; 
//     height: 22px;
//   }
//   @media (max-width: 1024px) {
//     width: 120px; 
//     height: 20px;
//   }
//   @media (max-width: 768px) {
//     height: 18px;
//   }
//   @media (max-width: 390px) {
//     width: 90px; 
//   }
//   @media (max-width: 375px) {
//     width: 80px; 
//   }
// `;

// const MissionIDText = styled.p`
//   color: #fbad04;
//   font-family: "Orbitron", sans-serif;
//   font-size: 12px;

//   @media (max-width: 1440px) {
//     font-size: 11px;
//   }
//   @media (max-width: 1024px) {
//     font-size: 10px; 
//   }
//   @media (max-width: 768px) {
//     font-size: 9px; 
//   }
//   @media (max-width: 390px) {
//     font-size: 8px; 
//   }
//   @media (max-width: 375px) {
//     font-size: 8px;
//   }
// `;

// const ContentSection = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
//   padding: 20px;

//   @media (max-width: 1024px) {
//     gap: 24px;
//     padding: 16px;
//   }
//   @media (max-width: 768px) {
//     padding: 12px;
//     gap: 20px;
//   }
//   @media (max-width: 390px) {
//     padding: 10px;
//     gap: 16px;
//   }
//   @media (max-width: 375px) {
//     padding: 8px; 
//     gap: 12px;
//   }
// `;

// const LeftContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
// `;

// const Subheading = styled.p`
//   color: #61b8a8;
//   font-family: "Orbitron", sans-serif;
//   font-size: 12px;
//   margin-left: 24px;

//   @media (max-width: 1440px) {
//     font-size: 11px; 
//     margin-left: 20px;
//   }
//   @media (max-width: 1024px) {
//     font-size: 10px; 
//     margin-left: 16px;
//   }
//   @media (max-width: 768px) {
//     font-size: 9px; 
//     margin-left: 12px;
//   }
//   @media (max-width: 390px) {
//     font-size: 8px;
//     margin-left: 10px;
//   }
//   @media (max-width: 375px) {
//     font-size: 8px; 
//     margin-left: 8px;
//   }
// `;

// const CardGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 24px; 
//   padding: 24px; 

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, 1fr); 
//   }
//   @media (max-width: 1440px) {
//     gap: 20px;
//     padding: 20px;
//   }
//   @media (max-width: 1024px) {
//     gap: 16px; 
//     padding: 16px;
//   }
//   @media (max-width: 768px) {
//     gap: 12px; 
//     padding: 12px;
//   }
//   @media (max-width: 390px) {
//     gap: 10px; 
//     padding: 10px;
//   }
//   @media (max-width: 375px) {
//     gap: 8px;
//     padding: 8px;
//   }
// `;

// const Card = styled.div`
//   width: 350px;
//   background-color: #2a3443;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
//   border-radius: 8px;
//   border-left: 4px solid #fbad04;
//   display: flex;
//   align-items: center;
//   padding: 16px; 

//   @media (max-width: 1440px) {
//     width: 300px; 
//   }
//   @media (max-width: 1024px) {
//     width: 100%;
//     max-width: 280px; 
//   }
//   @media (max-width: 768px) {
//     max-width: 100%;
//     padding: 12px;
//   }
//   @media (max-width: 390px) {
//     padding: 10px;
//   }
//   @media (max-width: 375px) {
//     padding: 8px;
//   }
// `;

// const CardIcon = styled.img`
//   width: 11px;
//   height: 30px;

//   @media (max-width: 1440px) {
//     width: 10px; /* Adjust based on Figma */
//     height: 28px;
//   }
//   @media (max-width: 1024px) {
//     width: 9px; /* Adjust based on Figma */
//     height: 26px;
//   }
//   @media (max-width: 768px) {
//     width: 8px; /* Adjust based on Figma */
//     height: 24px;
//   }
//   @media (max-width: 390px) {
//     width: 7px; /* sm-mobile */
//     height: 22px;
//   }
//   @media (max-width: 375px) {
//     width: 7px; /* xs */
//     height: 20px;
//   }
// `;

// const CardContent = styled.div`
//   margin-left: 16px; /* ml-4 */

//   @media (max-width: 768px) {
//     margin-left: 12px;
//   }
//   @media (max-width: 390px) {
//     margin-left: 10px; /* sm-mobile */
//   }
//   @media (max-width: 375px) {
//     margin-left: 8px; /* xs */
//   }
// `;

// const CardTitle = styled.h2`
//   font-family: "Orbitron", sans-serif;
//   color: #fbad04;
//   font-size: 13px;

//   @media (max-width: 1440px) {
//     font-size: 12px; /* Adjust based on Figma */
//   }
//   @media (max-width: 1024px) {
//     font-size: 11px; /* Adjust based on Figma */
//   }
//   @media (max-width: 768px) {
//     font-size: 10px; /* Adjust based on Figma */
//   }
//   @media (max-width: 390px) {
//     font-size: 9px; /* sm-mobile */
//   }
//   @media (max-width: 375px) {
//     font-size: 8px; /* xs */
//   }
// `;

// const CardText = styled.p`
//   color: white;
//   font-size: 12px;

//   @media (max-width: 1440px) {
//     font-size: 11px; /* Adjust based on Figma */
//   }
//   @media (max-width: 1024px) {
//     font-size: 10px; /* Adjust based on Figma */
//   }
//   @media (max-width: 768px) {
//     font-size: 9px; /* Adjust based on Figma */
//   }
//   @media (max-width: 390px) {
//     font-size: 8px; /* sm-mobile */
//   }
//   @media (max-width: 375px) {
//     font-size: 8px; /* xs */
//   }
// `;

// const RightContent = styled.div`
//   border: 2px solid #61b8a8;
//   border-radius: 8px;
//   width: 300px;
//   padding: 20px; 

//   @media (max-width: 1440px) {
//     width: 260px; 
//     padding: 16px;
//   }
//   @media (max-width: 1024px) {
//     width: 100%;
//     max-width: 220px;
//     padding: 12px;
//     height: 180px;
//   }
//   @media (max-width: 990px) {
//     width: 100%;
//     max-width: 220px;
//     padding: 12px;
//     height: 200px;
//   }
//   @media (max-width: 768px) {
//     height: 150px;
//     padding: 10px;
//   }
//   /* @media (max-width: 767px) {
//     height: 150px;
//     padding: 10px;
//   } */
//   @media (max-width: 390px) {
//     padding: 8px; /* sm-mobile */
//   }
//   @media (max-width: 375px) {
//     padding: 6px; /* xs */
//   }
// `;

// const QuestHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 10px;

//   @media (max-width: 768px) {
//     margin-bottom: 8px;
//   }
//   @media (max-width: 390px) {
//     margin-bottom: 6px; /* sm-mobile */
//   }
//   @media (max-width: 375px) {
//     margin-bottom: 6px; /* xs */
//   }
// `;

// const QuestIcon = styled.img`
//   width: 24px; /* Default, adjust based on Figma */
//   height: 24px;

//   @media (max-width: 1440px) {
//     width: 22px; /* Adjust based on Figma */
//     height: 22px;
//   }
//   @media (max-width: 1024px) {
//     width: 20px; /* Adjust based on Figma */
//     height: 20px;
//   }
//   @media (max-width: 768px) {
//     width: 18px; /* Adjust based on Figma */
//     height: 18px;
//   }
//   @media (max-width: 390px) {
//     width: 16px; /* sm-mobile */
//     height: 16px;
//   }
//   @media (max-width: 375px) {
//     width: 14px; /* xs */
//     height: 14px;
//   }
// `;

// const QuestTitle = styled.h3`
//   font-family: "Orbitron", sans-serif;
//   color: white;
//   font-size: 16px; /* Default, adjust based on Figma */

//   & span {
//     color: #fbad04;
//   }

//   @media (max-width: 1440px) {
//     font-size: 15px; /* Adjust based on Figma */
//   }
//   @media (max-width: 1024px) {
//     font-size: 14px; /* Adjust based on Figma */
//   }
//   @media (max-width: 768px) {
//     font-size: 13px; /* Adjust based on Figma */
//   }
//   @media (max-width: 390px) {
//     font-size: 12px; /* sm-mobile */
//   }
//   @media (max-width: 375px) {
//     font-size: 11px; /* xs */
//   }
// `;

// const QuestDescription = styled.div`
//   padding: 10px;
//   border-left: 1px solid #374151; /* Fixed border-l-1 */

//   @media (max-width: 768px) {
//     padding: 8px;
//   }
//   @media (max-width: 390px) {
//     padding: 6px; /* sm-mobile */
//   }
//   @media (max-width: 375px) {
//     padding: 6px; /* xs */
//   }
// `;

// const QuestText = styled.p`
//   color: #9ca3af; /* gray-400 */
//   font-size: 11px;

//   @media (max-width: 1440px) {
//     font-size: 10px; /* Adjust based on Figma */
//   }
//   @media (max-width: 1024px) {
//     font-size: 9px; /* Adjust based on Figma */
//   }
//   @media (max-width: 768px) {
//     font-size: 8px; /* Adjust based on Figma */
//   }
//   @media (max-width: 390px) {
//     font-size: 8px; /* sm-mobile */
//   }
//   @media (max-width: 375px) {
//     font-size: 7px; /* xs */
//   }
// `;

// const JoinButton = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   background-color: #fbad04;
//   height: 40px;
//   border-radius: 8px;
//   margin-top: 20px;
//   cursor: pointer;
//   border-bottom: 4px solid #926b18;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: #61b8a8;
//     border-bottom: 4px solid #fbad04;
//   }

//   @media (max-width: 1440px) {
//     height: 36px; /* Adjust based on Figma */
//     margin-top: 16px;
//   }
//   @media (max-width: 1024px) {
//     height: 32px; /* Adjust based on Figma */
//     margin-top: 12px;
//   }
//   @media (max-width: 768px) {
//     height: 30px; /* Adjust based on Figma */
//     margin-top: 10px;
//   }
//   @media (max-width: 390px) {
//     height: 28px; /* sm-mobile */
//   }
//   @media (max-width: 375px) {
//     height: 26px; /* xs */
//   }
// `;

// const ButtonText = styled.p`
//   font-family: "Orbitron", sans-serif;
//   font-size: 12px;
//   color: black; /* Default, adjust based on Figma for contrast */

//   @media (max-width: 1440px) {
//     font-size: 11px; /* Adjust based on Figma */
//   }
//   @media (max-width: 1024px) {
//     font-size: 10px; /* Adjust based on Figma */
//   }
//   @media (max-width: 768px) {
//     font-size: 9px; /* Adjust based on Figma */
//   }
//   @media (max-width: 390px) {
//     font-size: 8px; /* sm-mobile */
//   }
//   @media (max-width: 375px) {
//     font-size: 8px; /* xs */
//   }
// `;