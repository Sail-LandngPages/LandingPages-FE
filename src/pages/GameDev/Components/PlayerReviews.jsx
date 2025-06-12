import styled from 'styled-components';
import person from '../../../assets/gamedev-assets/person.svg';
import sticker from '../../../assets/gamedev-assets/sticker.svg';

const PlayerReviews = () => {
  const testimonials = [
    {
      id: 1,
      image: sticker,
      comment: "SAIL's Game Dev Track changed my life. I built my first game, got a job offer, and now I'm creating my dream RPG!",
      profilePic: person,
      name: "Jane Doe",
      role: "Game Developer",
      rating: "⭐⭐⭐",
    },
    {
      id: 2,
      image: sticker,
      comment: "I always loved gaming but never thought I could MAKE a game. Now I can—and it's incredible! SAIL gave me the skills and confidence I needed.",
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

  return (
    <Container>
      <HeaderSection>
        <HeaderBadge>
          <BadgeText>PLAYER REVIEWS</BadgeText>
        </HeaderBadge>
        <Title>WHAT OUR GRADUATES SAY</Title>
        <AccentBar />
        <Description>Hear from the game developers who transformed their passion through our program.</Description>
      </HeaderSection>

      <TestimonialsGrid>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <StickerImage src={testimonial.image} alt="Feature" />
            
            <CommentBox>
              {testimonial.comment}
            </CommentBox>
            
            <ProfileSection>
              <ProfileImage src={testimonial.profilePic} alt={testimonial.name} />
              <ProfileInfo>
                <ProfileName>{testimonial.name}</ProfileName>
                <ProfileRole>{testimonial.role}</ProfileRole>
              </ProfileInfo>
              <Rating>{testimonial.rating}</Rating>
            </ProfileSection>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </Container>
  );
};

export default PlayerReviews;

const Container = styled.div`
  width: 100%;
  background-color: #EDEEF0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 1.5rem;
`;

const HeaderSection = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 1.75rem;
`;

const HeaderBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  border-radius: 0.5rem;
  background-color: white;
`;

const BadgeText = styled.p`
  font-family: 'orbitron', sans-serif;
  font-size: 15px;
`;

const Title = styled.h6`
  font-family: 'orbitron', sans-serif;
  text-align: center;
  font-weight: bold;
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-top: 1rem;
`;

const AccentBar = styled.section`
  background-color: #FBAD04;
  width: 100px;
  height: 5px;
  margin: 0.5rem auto 0;
`;

const Description = styled.p`
  color: #61656b;
  text-align: center;
  margin-top: 1rem;
`;

const TestimonialsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 1.5rem;
`;

const TestimonialCard = styled.div`
  width: 100%;
  max-width: 420px;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 640px) {
    max-width: 390px;
  }

  @media (max-width: 768px) {
    max-width: 375px;
  }
`;

const StickerImage = styled.img`
  position: absolute;
  bottom: 7rem;
  left: 19.75rem;
  width: 60px;
  height: 60px;
  z-index: 0;

  @media (max-width: 2560px) {
    left: 360px;
    top: -1px;
  }
  @media (max-width: 1440px) {
    left: 360px;
    top: -1px;
  }
  @media (max-width: 768px) {
    left: 315px;
    top: -1px;
  }
  @media (max-width: 426px) {
    left: 270px;
    top: -1px;
  }
  @media (max-width: 425px) {
    left: 269px;
    top: -1px;
  }
    @media (max-width: 412px) {
    left: 260px;
    top: -1px;
  }
  @media (max-width: 393px) {
    left: 235px;
    top: -1px;
  }
  @media (max-width: 390px) {
    left: 235px;
    top: -1px;
  }
    @media (max-width: 384px) {
    left: 229px;
    top: -1px;
  }
  @media (max-width: 375px) {
    left: 219px;
    top: -1px;
  }
  @media (max-width: 330px) {
    left: 166px;
    top: -1px;
  }

  @media (max-width: 320px) {
    left: 165px;
    top: -1px;
  }
`;

const CommentBox = styled.div`
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  border: 2px solid #FBAD04;
  padding: 0.75rem;
  color: #374151;
  font-size: 0.875rem;
  line-height: 1.25rem;
  z-index: 10;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;

  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileName = styled.h4`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: bold;
  font-family: 'orbitron', sans-serif;
`;

const ProfileRole = styled.p`
  font-size: 12px;
  font-family: 'orbitron', sans-serif;
  color: #61B8A8;
`;

const Rating = styled.p`
  font-size: 12px;
  color: #eab308;
`;