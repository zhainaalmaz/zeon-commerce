import React, { useState } from 'react';
import { ReactComponent as NextSvg } from '../../assets/icons/next .svg';
import { ReactComponent as PrevSvg } from '../../assets/icons/prev.svg';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: white;
  margin-bottom: 12px;
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledP = styled.p`
  padding: 0px 16px 16px 16px;
  margin: 0;
  color: #354455;
  font-weight: 300;
  font-size: 14px;
  line-height: 160%;
`;

const StyledTitle = styled.h4`
  padding: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const HelpCard = ({ item }) => {
  const [text, setText] = useState(false);
  return (
    <StyledDiv onClick={() => setText((item) => !item)} key={item.id}>
      <StyledContent>
        <StyledTitle>{item.title}</StyledTitle>
        <div style={{ paddingRight: '16px' }}>
          {text ? <PrevSvg /> : <NextSvg />}
        </div>
      </StyledContent>
      {text && <StyledP>{item.text} </StyledP>}
    </StyledDiv>
  );
};

export default HelpCard;
