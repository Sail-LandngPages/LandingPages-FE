import icon1 from "../../../assets/gamedev-assets/greenIcon.svg";
import icon2 from "../../../assets/gamedev-assets/orangeIcon.svg";
import "@fontsource/orbitron";
import styled from "styled-components"

const Unlock = () => {
  const cards = [
    {
      id: 1,
      image: icon2,
      heading: "Hands-On Learning",
      text: "Create real games from scratch and build a portfolio that showcases your skills.",
      borderColor: "#fbad04",
    },
    {
      id: 2,
      image: icon1,
      heading: "Industry Mentors",
      text: "Learn directly from expert game designers and developers who've shipped real titles.",
      borderColor: "#61b8a8",
    },
    {
      id: 3,
      image: icon1,
      heading: "No Experience Needed",
      text: "We teach from beginner to pro with a curriculum designed for all skill levels.",
      borderColor: "#61b8a8",
    },
    {
      id: 4,
      image: icon1,
      heading: "Fully Funded",
      text: "100% scholarships available for qualified applicants. Limited slots available!",
      borderColor: "#fbad04",
    },
  ];

  return (
    <UnlockContainer>
      <ContentSection>
        <Subheading>GAME PERKS</Subheading>
        <Heading>UNLOCK YOUR POTENTIAL</Heading>
        <YellowBar />
        <Description>
          Level up your game development skills with our comprehensive program designed for creators like you
        </Description>
        <CardGrid>
          {cards.map((card) => (
            <Card key={card.id} borderColor={card.borderColor}>
              <CardHeader>
                <CardIcon src={card.image} alt={card.heading} />
                <CardTitle>{card.heading}</CardTitle>
              </CardHeader>
              <CardTextSection>
                <CardText>{card.text}</CardText>
              </CardTextSection>
            </Card>
          ))}
        </CardGrid>
      </ContentSection>
    </UnlockContainer>
  );
};

export default Unlock;

const UnlockContainer = styled.div`
  width: 100%;
  padding: 50px;
  background-color: #111827;

  @media (max-width: 1440px) {
    padding: 40px; 
  }
  @media (max-width: 1024px) {
    padding: 32px;
  }
  @media (max-width: 768px) {
    padding: 24px; 
  }
  @media (max-width: 390px) {
    padding: 20px; 
  }
  @media (max-width: 375px) {
    padding: 16px;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px; 
`;

const Subheading = styled.h1`
  color: #fbad04;
  font-family: "Orbitron", sans-serif;
  font-size: 15px;

  @media (max-width: 1440px) {
    font-size: 14px;
  }
  @media (max-width: 1024px) {
    font-size: 13px;
  }
  @media (max-width: 768px) {
    font-size: 12px; 
  }
  @media (max-width: 390px) {
    font-size: 11px;
  }
  @media (max-width: 375px) {
    font-size: 10px;
  }
`;

const Heading = styled.h1` 
  font-family: "Orbitron", sans-serif;
  color: white;
  font-size: 25px;
  font-weight: 700; 
  line-height: 1.5;

  @media (max-width: 1440px) {
    font-size: 22px;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 390px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 14px; 
  }
`;

const YellowBar = styled.section`
  background-color: #fbad04;
  width: 100px;
  height: 5px;

  @media (max-width: 1440px) {
    width: 80px;
  }
  @media (max-width: 1024px) {
    width: 70px; 
  }
  @media (max-width: 768px) {
    width: 60px;
  }
  @media (max-width: 390px) {
    width: 50px;
  }
  @media (max-width: 375px) {
    width: 40px; 
  }
`;

const Description = styled.p`
  color: #9ca3af;
  font-family: "Orbitron", sans-serif;
  font-size: 16px; 

  @media (max-width: 1440px) {
    font-size: 15px; 
  }
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 13px; 
    text-align: center;
  }
  @media (max-width: 390px) {
    font-size: 12px;
  }
  @media (max-width: 375px) {
    font-size: 11px; 
  }
`;

const CardGrid = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 24px; 

  @media (max-width: 1440px) {
    gap: 20px; 
    padding: 20px;
  }
  @media (max-width: 1024px) {
    gap: 16px;
    padding: 16px;
  }
  @media (max-width: 768px) {
    gap: 12px;
    padding: 12px;
  }
  @media (max-width: 650px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 12px;
  }
  @media (max-width: 390px) {
    gap: 10px; 
    padding: 10px;
  }
  @media (max-width: 375px) {
    gap: 8px;
    padding: 8px;
  }
`;

const Card = styled.div`
  width: 300px;
  padding: 16px;
  background-color: #1f2937;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  border-radius: 8px;
  border: 3px solid ${(props) => props.borderColor || "#fbad04"};

  @media (max-width: 1440px) {
    width: 280px; 
  }
  @media (max-width: 1024px) {
    width: 260px;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 240px;
    padding: 12px;
  }
  @media (max-width: 390px) {
    max-width: 320px;
    padding: 10px;
  }
  @media (max-width: 375px) {
    max-width: 300px;
    padding: 8px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 12px; 
  }
  @media (max-width: 390px) {
    gap: 10px; 
  }
  @media (max-width: 375px) {
    gap: 8px; 
  }
`;

const CardIcon = styled.img`
  width: 20px;

  @media (max-width: 1440px) {
    width: 18px;
  }
  @media (max-width: 1024px) {
    width: 16px; 
  }
  @media (max-width: 768px) {
    width: 14px; 
  }
  @media (max-width: 390px) {
    width: 12px; 
  }
  @media (max-width: 375px) {
    width: 10px;
  }
`;

const CardTitle = styled.h2`
  color: white;
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  font-size: 16px; 
  margin-bottom: 8px;

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

const CardTextSection = styled.div`
  border-left: 2px solid #7a8684;
  padding-left: 8px; 
  margin-top: 16px; 

  @media (max-width: 768px) {
    padding-left: 6px;
    margin-top: 12px;
  }
  @media (max-width: 390px) {
    padding-left: 4px; 
    margin-top: 10px;
  }
  @media (max-width: 375px) {
    padding-left: 4px; 
    margin-top: 8px;
  }
`;

const CardText = styled.p`
  color: #9ca3af; 
  font-family: "Orbitron", sans-serif;
  font-size: 14px; 

  @media (max-width: 1440px) {
    font-size: 13px;
  }
  @media (max-width: 1024px) {
    font-size: 12px; 
  }
  @media (max-width: 768px) {
    font-size: 11px; 
  }
  @media (max-width: 390px) {
    font-size: 10px; 
  }
  @media (max-width: 375px) {
    font-size: 9px;
  }
`;

