import { React, useState } from 'react';
import styled from 'styled-components';
import { removeFromCart } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import { ReactComponent as RemoveItemSvg } from '../../assets/icons/delete.svg';
const StyledContent = styled.div`
  width: 768px;
  height: 166px;
  display: flex;
  margin-top: 11px;
  background: #ffffff;
  padding: 12px;
`;
const StyledImage = styled.img`
  width: 112px;
  height: 142px;
`;

const StyledTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #393939;
  padding-bottom: 7px;
`;

const StyledPricetitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #393939;
`;

const StyledSizetitle = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #7c7c7c;
`;

const StyledDivColor = styled.div`
  width: 8px;
  height: 8px;
  border: 1px;
  border-radius: 5px;
  opacity: 47%;
  margin-right: 5px;
  margin-top: 6px;
`;

const StyledColordiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px auto;
`;

const StyledButton = styled.button`
  width: 32px;
  height: 32px;
  background: #f8f8f8;
  border: 1px solid #efefef;
  border-radius: 6px;
`;

const StyledCountButtons = styled.div`
  width: 120px;
  height: 32px;
`;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const removeFromCArtHandler = () => {
    dispatch(removeFromCart(item));
  };

  return (
    <StyledContent>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex' }}>
          <StyledImage
            src={item.productImages.map((el) => {
              return el.image;
            })}
          />

          <div style={{ margin: '0 8px' }}>
            <StyledTitle>{item.title}</StyledTitle>
            <div style={{ marginTop: 8, textAlign: 'start', gap: '6px' }}>
              <StyledSizetitle>Размер:{item.sizeRage}</StyledSizetitle>
              <StyledColordiv>
                <StyledDivColor
                  style={{ backgroundColor: `${item.colors}` }}
                ></StyledDivColor>
              </StyledColordiv>
              <StyledPricetitle style={{ marginTop: '5px' }}>
                <span>
                  {item.discount ? (
                    <>
                      <span>{item.discount}p. </span>
                      <span className="previousPrice">
                        {item.previousPrice}p.
                      </span>
                    </>
                  ) : (
                    <span>{item.previousPrice}p.</span>
                  )}
                </span>
              </StyledPricetitle>
            </div>
            <StyledCountButtons>
              <StyledButton onClick={() => setQuantity(quantity - 1)}>
                -
              </StyledButton>
              <span>{quantity}</span>
              <StyledButton onClick={() => setQuantity(quantity + 1)}>
                +
              </StyledButton>
            </StyledCountButtons>
          </div>
        </div>
        <div>
          <RemoveItemSvg onClick={removeFromCArtHandler} />
        </div>
      </div>
    </StyledContent>
  );
};

export default CartItem;
