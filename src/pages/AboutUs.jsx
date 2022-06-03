import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-align: start;
  padding: 12px 0 72px 0;
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
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #979797;
  margin-top: 8px;
`;

const AboutUs = () => {
  const aboutUs = useSelector((state) => state.commerce.data.aboutUs);

  return (
    <div style={{ backgroundColor: '#f8f8f8' }}>
      <div className="container">
        <StyledContainer>
          <StyledSection>
            <StyledDiv>
              <img width={327} src={aboutUs?.image1} alt="aboutUsImg1" />
              <img width={327} src={aboutUs?.image2} alt="aboutUsImg2" />
            </StyledDiv>
          </StyledSection>
          <div>
            <img width={327} src={aboutUs?.image3} alt="aboutUsImg3" />
          </div>
          <StyledText>
            <StyledSpan>{aboutUs?.title}</StyledSpan>
            <StyledP>{aboutUs?.text}</StyledP>
          </StyledText>
        </StyledContainer>
      </div>
    </div>
  );
};

export default AboutUs;
