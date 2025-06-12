import styled from "styled-components";
import backgroundimage from "./../../../assets/gamedev-assets/gamedevBackgroundImage.svg";
import gamer from "./../../../assets/gamedev-assets/gamer.svg";
import star from "./../../../assets/gamedev-assets/star.svg";
import "@fontsource/orbitron";


const GameHero = () => {
  return (
    <HeroContainer>
      <InnerContainer>
        <TextSection>
          <Heading1>LEVEL UP YOUR SKILLS</Heading1>
          <Heading3>
            THINK YOU CAN OUTBUILD <br />
            <span>COD?</span>
          </Heading3>
          <DescriptionContainer>
            <Description>
              Want to design your own video games, bring characters to life, and create experiences that millions can play? The SAIL Game Development Learning Track is your shortcut to becoming a game dev pro!
            </Description>
          </DescriptionContainer>
          <ButtonContainer>
            <PrimaryButton>START YOUR QUEST</PrimaryButton>
            <SecondaryButton>VIEW SKILL TREE</SecondaryButton>
          </ButtonContainer>
        </TextSection>
        <ImageSection>
          <GamerImage src={gamer} alt="Gamer" />
          <ScholarshipBox>
            <ScholarshipFlex>
              <img src={star} alt="Star" style={{ width: '24px', height: '24px' }} />
              <ScholarshipText>
                100% <br />
                SCHOLARSHIPS
              </ScholarshipText>
            </ScholarshipFlex>
            <ScholarshipDescription>
              Limited slots available! Apply now to secure your spot in the next cohort
            </ScholarshipDescription>
          </ScholarshipBox>
        </ImageSection>
      </InnerContainer>
    </HeroContainer>
  );
};

export default GameHero;

const HeroContainer = styled.div`
  width: 100%;
  padding: 130px;
  background-color: #111827;
  background-image: url(${backgroundimage});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1440px) {
    padding: 50px;
  }
  @media (max-width: 1024px) {
    padding: 0px;
  }
  @media (max-width: 768px) {
    padding-top: 400px;
    padding-bottom: 400px;
  }
  @media (max-width: 425px) {
    padding: 14px;
  }
  @media (max-width: 390px) {
    padding: 14px;
  }
  @media (max-width: 375px) {
    padding: 16px; 
  }
`;

const InnerContainer = styled.div`
  width: 1400px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1440px) {
    width: 90%;
    height: 500px;
  }
  @media (max-width: 1024px) {
    width: 95%;
    height: 450px;
  }
  @media (max-width: 768px) {
    height: auto; 
  }
  @media (max-width:500px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 24px;
  }
  @media (max-width:425px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 24px;
  }
  @media (max-width: 390px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 24px;
  }
  @media (max-width: 375px) {
    gap: 16px;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const Heading1 = styled.h1`
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #fbad04;
  margin-bottom: 20px;

  @media (max-width: 1440px) {
    font-size: 16px; 
  }
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 10px; 
  }
  @media (max-width: 425px) {
    font-size: 10px;
    text-align: left;
  }
  @media (max-width: 390px) {
    font-size: 10px;
    text-align: left;
  }
  @media (max-width: 375px) {
    font-size: 10px;
  }
`;

const Heading3 = styled.h3`
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: white;
  margin-bottom: 60px;
  text-align: center;

  & span {
    color: #fbad04;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
  @media (max-width: 1440px) {
    font-size: 36px;
    margin-bottom: 48px;
  }
  @media (max-width: 1024px) {
    font-size: 20px; 
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    font-size: 13px; 
    margin-bottom: 12px;
  }
  @media (max-width: 425px) {
    font-size: 24px; 
    text-align: left;
  }
  @media (max-width: 390px) {
    font-size: 24px; 
    text-align: left;
  }
  @media (max-width: 375px) {
    font-size: 20px; 
  }
`;

const DescriptionContainer = styled.div`
  width: 600px;
  height: 150px;
  border-left: 4px solid #61b8a8;
  padding-left: 20px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1440px) {
    width: 500px;
    height: 130px;
  }
  @media (max-width: 1024px) {
    height: 120px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 10px;
    margin-bottom: 14px;
  }
  @media (max-width: 425px) {
    padding: 12px;
  }
  @media (max-width: 390px) {
    padding: 12px;
  }
  @media (max-width: 375px) {
    padding: 10px; 
  }
`;

const Description = styled.p`
  color: #9ca3af;
  font-size: 20px;
  font-weight: 450;
  text-align: left;

  @media (max-width: 1440px) {
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    font-size: 16px; 
  }
  @media (max-width: 768px) {
    font-size: 10px;
    text-align: left;
  }
    @media (max-width: 425px) {
    font-size: 12px; 
    text-align: left;
  }
  @media (max-width: 390px) {
    font-size: 12px; 
    text-align: left;
  }
  @media (max-width: 375px) {
    font-size: 11px; 
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;

  @media (max-width: 768px) {
    gap: 16px;
  }
  @media (max-width: 425px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  @media (max-width: 390px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  @media (max-width: 375px) {
    gap: 10px; 
  }
`;

const PrimaryButton = styled.button`
  width: 250px;
  height: 45px;
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: black;
  background-color: #fbad04;
  border-radius: 8px;
  border-bottom: 4px solid #926b18;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #61b8a8;
    border-bottom-color: #61b8a8;
  }

  @media (max-width: 1440px) {
    width: 220px;
    height: 40px;
    font-size: 14px;
  }
  @media (max-width: 1024px) {
    width: 150px;
    height: 45px;
    font-size: 13px;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 80px;
    height: 65px;
    font-size: 12px;
  }
  @media (max-width: 425px) {
    max-width: 360px;
    height: 34px;
    font-size: 11px;
  }
  @media (max-width: 390px) {
    max-width: 360px;
    height: 34px;
    font-size: 11px;
  }
  @media (max-width: 375px) {
    max-width: 150px; 
    height: 32px;
    font-size: 10px;
  }
`;

const SecondaryButton = styled.button`
  width: 250px;
  height: 45px;
  font-family: "Orbitron", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: white;
  border: 3px solid #61b8a8;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #61b8a8;
  }

  @media (max-width: 1440px) {
    width: 220px; 
    height: 40px;
    font-size: 14px;
  }
  @media (max-width: 1024px) {
    width: 150px;
    height: 45px;
    font-size: 13px;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 80px;
    height: 65px;
    font-size: 12px;
  }
  @media (max-width: 425px) {
    max-width: 360px;
    height: 34px;
    font-size: 11px;
  }
  @media (max-width: 390px) {
    max-width: 360px;
    height: 34px;
    font-size: 11px;
  }
  @media (max-width: 375px) {
    max-width: 150px; 
    height: 32px;
    font-size: 10px;
  }
`;

const ImageSection = styled.div`
  position: relative;
`;

const GamerImage = styled.img`
  width: 700px;
  height: 650px;

  @media (max-width: 1440px) {
    width: 600px;
    height: 550px;
  }
  @media (max-width: 1024px) {
    width: 500px;
    height: 450px;
  }
  @media (max-width: 768px) {
    width: 100%;
    width: 350px;
    max-width: 800px;
    height: auto;
  }
  @media (max-width: 425px) {
    max-width: 500px;
  }
  @media (max-width: 390px) {
    max-width: 500px;
  }
  @media (max-width: 375px) {
    max-width: 280px; 
  }
`;

const ScholarshipBox = styled.div`
  border: 2px solid #fbad04;
  padding: 10px;
  border-radius: 8px;
  width: 250px;
  background-color: #111827;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  top: 380px;
  left: 450px;

  @media (max-width: 1440px) {
    width: 220px;
    top: 320px;
    left: 330px;
  }
  @media (max-width: 1155px) {
    width: 200px;
    top: 250px;
    left: 220px;
  }
  @media (max-width: 1024px) {
    width: 200px;
    top: 250px;
    left: 220px;
  }
  @media (max-width: 945px) {
    position: absolute; 
    max-width: 200px;
    padding: 8px;
    top: 180px;
    left: 40px;
  }
  @media (max-width: 769px) {
    position: absolute; 
    max-width: 200px;
    padding: 8px;
    top: 180px;
    left: 40px;
  }

  @media (max-width: 768px) {
    position: absolute; 
    max-width: 300px;
    padding: 8px;
    top: 180px;
    left: 70px;
  }
  @media (max-width: 425px) {
    max-width: 280px;
    padding: 6px;
    top: 200px;
  }
  @media (max-width: 390px) {
    max-width: 280px;
    padding: 6px;
    top: 200px;
  }
  @media (max-width: 375px) {
    max-width: 260px;
    padding: 6px;
  }
`;

const ScholarshipText = styled.p`
  font-family: "Orbitron", sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #fbad04;

  @media (max-width: 1440px) {
    font-size: 16px;
  }
  @media (max-width: 1024px) {
    font-size: 15px; 
  }
  @media (max-width: 769px) {
    font-size: 12px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 390px) {
    font-size: 12px;
  }
  @media (max-width: 375px) {
    font-size: 11px; 
  }
`;

const ScholarshipDescription = styled.p`
  color: white;
  font-size: 16px; 

  @media (max-width: 1440px) {
    font-size: 15px;
  }
  @media (max-width: 1024px) {
    font-size: 14px; 
  }
  @media (max-width: 768px) {
    font-size: 13px; 
  }
  @media (max-width: 390px) {
    font-size: 12px; 
  }
  @media (max-width: 375px) {
    font-size: 11px;
  }
`;

const ScholarshipFlex = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;