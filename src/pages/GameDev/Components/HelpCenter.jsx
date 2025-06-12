import styled from "styled-components";
import red from "../../../assets/gamedev-assets/red.svg";
import orange from "../../../assets/gamedev-assets/orange.svg";
import green from "../../../assets/gamedev-assets/green.svg";
import q1 from "../../../assets/gamedev-assets/q1.svg";
import q2 from "../../../assets/gamedev-assets/q2.svg";
import q3 from "../../../assets/gamedev-assets/q3.svg";
import q4 from "../../../assets/gamedev-assets/q4.svg";
import q5 from "../../../assets/gamedev-assets/q5.svg";
import { useState } from "react";
import "@fontsource/orbitron";

const HelpCenter = () => {
  const faqData = [
    {
      id: 1,
      image: q1,
      question: "Is this a program paid for?",
      answer:
        "Our program is fully funded, and selected participants will receive full scholarships covering all training expenses. This is a golden opportunity to advance your career in tech without financial barriers!",
    },
    {
      id: 2,
      image: q2,
      question: "Who can Apply for our Programs?",
      answer:
        "Our programs are designed to be beginner-friendly, well-structured, and comprehensive. Whether you're starting fresh or looking to upskill, we’ve got something for everyone. Upon successful completion, you’ll also receive a certificate to showcase your new skills!",
    },
    {
      id: 3,
      image: q3,
      question: "What is the learning duration?",
      answer:
        "Our program duration ranges between 3 to 6 months, depending on the course. All programs are thoughtfully structured to ensure you gain deep, hands-on experience while balancing flexibility.",
    },
    {
      id: 4,
      image: q4,
      question: "How Will the Training Be Delivered?",
      answer:
        "The delivery method depends on the program you apply for. Our programs are designed to offer flexibility and are delivered through in-person, online, or hybrid approaches, ensuring you receive the best learning experience based on the program's format.",
    },
    {
      id: 5,
      image: q5,
      question: "What Are the Prerequisites?",
      answer:
        "No prior experience in tech is required! All you need is a university degree (OND, HND, or BSc) and a strong desire to learn and grow. We're here to help you develop the skills you need for success!",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <HelpCenterContainer>
      <InnerContainer>
        <Subheading>GAME MANUAL</Subheading>
        <Heading>HELP CENTER</Heading>
        <YellowBar />
        <Description>
          Get answers to the most common questions about our game development programme.
        </Description>
        <FAQContainer>
          <FAQHeader>
            <IconContainer>
              <img src={red} alt="red circle" />
              <img src={orange} alt="orange circle" />
              <img src={green} alt="green circle" />
            </IconContainer>
            <FAQHeaderText>FAQ DATABASE.exe</FAQHeaderText>
          </FAQHeader>
          <FAQList>
            {faqData.map((faq) => (
              <FAQItem key={faq.id} onClick={() => toggleFAQ(faq.id)}>
                <FAQQuestion>
                  <FAQIcon src={faq.image} alt="Icon" />
                  <FAQQuestionText>{faq.question}</FAQQuestionText>
                </FAQQuestion>
                {openFAQ === faq.id && <FAQAnswer>{faq.answer}</FAQAnswer>}
              </FAQItem>
            ))}
          </FAQList>
        </FAQContainer>
      </InnerContainer>
    </HelpCenterContainer>
  );
};

export default HelpCenter;

const HelpCenterContainer = styled.div`
  width: 100%;
  padding: 60px; 
  background-color: #111827;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1440px) {
    padding: 48px; 
  }
  @media (max-width: 1024px) {
    padding: 40px; 
  }
  @media (max-width: 768px) {
    padding: 32px;
  }
  @media (max-width: 390px) {
    padding: 24px; 
  }
  @media (max-width: 375px) {
    padding: 16px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 16px; 

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

const Subheading = styled.p`
  font-family: "Orbitron", sans-serif;
  color: #fbad04;
  font-size: 12px;

  @media (max-width: 1440px) {
    font-size: 11px;
  }
  @media (max-width: 1024px) {
    font-size: 10px; 
  }
  @media (max-width: 768px) {
    font-size: 9px; 
  }
  @media (max-width: 390px) {
    font-size: 8px; 
  }
  @media (max-width: 375px) {
    font-size: 8px;
  }
`;

const Heading = styled.h1`
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  color: white;
  font-size: 25px;

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

const FAQContainer = styled.div`
  background-color: #1f2937;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  width: 100%;
  max-width: 768px;

  @media (max-width: 1440px) {
    max-width: 700px; 
  }
  @media (max-width: 1024px) {
    max-width: 600px; 
  }
  @media (max-width: 768px) {
    max-width: 90%; 
  }
  @media (max-width: 390px) {
    max-width: 100%; 
  }
  @media (max-width: 375px) {
    max-width: 100%; 
  }
`;

const FAQHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px; 
  gap: 160px;

  @media (max-width: 1440px) {
    gap: 120px; 
  }
  @media (max-width: 1024px) {
    gap: 80px; 
  }
  @media (max-width: 768px) {
    gap: 40px; 
  }
  @media (max-width: 390px) {
    gap: 20px; 
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 375px) {
    gap: 16px; 
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px; 

  @media (max-width: 768px) {
    gap: 8px; 
  }
  @media (max-width: 390px) {
    gap: 6px;
  }
  @media (max-width: 375px) {
    gap: 4px; 
  }
`;

const FAQHeaderText = styled.p`
  color: #9ca3af; 
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

const FAQList = styled.div`
  border: 1px solid #9ca3af; 
  border-radius: 8px;
`;

const FAQItem = styled.div`
  width: 100%;
  padding: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 6px; 
  }
  @media (max-width: 390px) {
    padding: 4px;
  }
  @media (max-width: 375px) {
    padding: 4px;
  }
`;

const FAQQuestion = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; 
  border-radius: 8px;
  background-color: #111827;
  padding: 12px; 

  @media (max-width: 768px) {
    gap: 12px;
    padding: 10px;
  }
  @media (max-width: 390px) {
    gap: 8px;
    padding: 8px;
  }
  @media (max-width: 375px) {
    gap: 6px;
    padding: 6px;
  }
`;

const FAQIcon = styled.img`
  width: 20px;
  height: 20px;

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
  @media (max-width: 390px) {
    width: 16px; 
    height: 16px;
  }
  @media (max-width: 375px) {
    width: 14px;
    height: 14px;
  }
`;

const FAQQuestionText = styled.h2`
  color: #fbad04;
  font-family: "Orbitron", sans-serif;
  font-size: 12px;

  @media (max-width: 1440px) {
    font-size: 11px; 
  }
  @media (max-width: 1024px) {
    font-size: 10px; 
  }
  @media (max-width: 768px) {
    font-size: 9px;
  }
  @media (max-width: 390px) {
    font-size: 8px; 
  }
  @media (max-width: 375px) {
    font-size: 8px;
  }
`;

const FAQAnswer = styled.p`
  color: #d1d5db; 
  font-family: "Orbitron", sans-serif;
  font-size: 10px;
  margin-top: 8px;
  text-align: left;

  @media (max-width: 1440px) {
    font-size: 9px; 
  }
  @media (max-width: 1024px) {
    font-size: 9px; 
  }
  @media (max-width: 768px) {
    font-size: 8px; 
  }
  @media (max-width: 390px) {
    font-size: 7px; 
  }
  @media (max-width: 375px) {
    font-size: 7px; 
  }
`;