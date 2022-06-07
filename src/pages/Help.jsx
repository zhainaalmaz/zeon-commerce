import React from 'react';
import HelpCard from '../components/help/HelpCard';
import { useSelector } from 'react-redux';
import helpImage from '../assets/images/help.png';
import styled from 'styled-components';

const StyledC = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 11px;
`;

const StyledDiv = styled.div`
  width: 644px;
  text-align: start;
`;

const StyledTitle = styled.h6`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #393939;
  padding-bottom: 15px;
`;

const Help = () => {
  const helpData = useSelector((state) => state.commerce.data.help);

  return (
    <div className="container">
      <StyledC>
        <div style={{ paddingBottom: 144 }}>
          <img width={500} src={helpImage} alt="/" />
        </div>
        <StyledDiv>
          <StyledTitle>Помощь</StyledTitle>
          {helpData?.map((item) => (
            <HelpCard item={item} key={item.id} />
          ))}
        </StyledDiv>
      </StyledC>
    </div>
  );
};

export default Help;
