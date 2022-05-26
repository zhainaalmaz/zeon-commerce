import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 286px;
  height: 522px;
  background: white;
`;

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledDivColor = styled.div`
  width: 8px;
  height: 8px;
  border: 1px;
  border-radius: 5px;
  margin-right: 5px;
`;
const BestSeller = () => {
  const products = useSelector((state) => state.products.data);
  const filteredItem = products.filter((item) => item.bestseller === true);

  return (
    <div>
      <p
        style={{
          fontWeight: '500',
          fontSize: '24px',
          lineHeight: '29px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'right',
          color: '#393939',
          marginBottom: '18px',
          marginLeft: '43%',
        }}
      >
        Хит продаж
      </p>
      <StyledContent>
        {filteredItem.map((item) => (
          <div key={item.id}>
            <StyledContainer>
              {item.productImages.map((el) => (
                <img style={{ width: '280px' }} src={el.image} alt="img" />
              ))}
              <div>
                <p
                  style={{
                    marginTop: '5px',
                    fontSize: '14px',
                    lineHeight: '17px',
                    textAlign: 'justify',
                    color: '#393939',
                  }}
                >
                  {item.title}
                </p>
                <h5 style={{ marginTop: '5px' }}>{item.currentPrice} p.</h5>
                <p
                  style={{
                    marginTop: '5px',
                    fontSize: '13px',
                    lineHeight: '16px',
                    textAlign: 'justify',
                    color: '#7C7C7C',
                  }}
                >
                  Размер:{item.sizeRage}
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '5px',
                  }}
                >
                  {item.colors.map((color) => (
                    <StyledDivColor
                      style={{ backgroundColor: `${color.color}` }}
                    ></StyledDivColor>
                  ))}
                </div>
              </div>
            </StyledContainer>
          </div>
        ))}
      </StyledContent>
    </div>
  );
};

export default BestSeller;
