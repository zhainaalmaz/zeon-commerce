import React, { useEffect, useState } from 'react';
import { getInfoAboutUsRequest } from '../api/service';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-align: start;
`;

const StyledSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const StyledText = styled.div`
  width: 39.5%;
  background: white;
  box-sizing: border-box;
  padding: 15px 25px;
`;

const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 24px;
  color: #393939;
`;

const StyledP = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 160%;
  color: #979797;
`;

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState({});

  useEffect(() => {
    const getInfoAboutUs = async () => {
      try {
        const aboutResponse = await getInfoAboutUsRequest();
        console.log(aboutResponse.data);
        setAboutUs(aboutResponse.data.aboutUs);
      } catch (error) {
        console.log(error);
      }
    };
    getInfoAboutUs();
  }, []);

  return (
    <div style={{ background: '#ECECEC' }}>
      <div className="container">
        <StyledContainer>
          <StyledSection>
            <StyledDiv>
              <img width={327} src={aboutUs.image1} alt="aboutUsImg1" />
              <img width={327} src={aboutUs.image2} alt="aboutUsImg2" />
            </StyledDiv>
          </StyledSection>
          <div>
            <img width={327} src={aboutUs.image3} alt="aboutUsImg3" />
          </div>
          <StyledText>
            <StyledSpan>{aboutUs.title}</StyledSpan>
            <StyledP>{aboutUs.text}</StyledP>
          </StyledText>
        </StyledContainer>
      </div>
    </div>
  );
};

export default AboutUs;
