import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { mathPercent } from '../utils';
import { ReactComponent as DiscounSvg } from '../assets/icons/discount.svg';
import { ReactComponent as Heart } from '../assets/icons/heart1.svg';
import { ReactComponent as Hearted } from '../assets/icons/heart2.svg';
import { onAddToFavorite, onRemoveFromFavorite } from '../store/favoriteSlice';

const StyledContainer = styled.div`
  width: 226px;
  height: 420px;
  background: white;
  margin: 16px 3px 64px 0;
  text-align: start;
  border: 1px solid #f1f1f1;
  position: relative;
`;

const StyledDivColor = styled.div`
  width: 8px;
  height: 8px;
  border: solid 0.2px;
  border-radius: 4px;
  margin-right: 12px;
  margin-top: 6px;
  opacity: 47%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 320px;
`;

const StyledTitle = styled.p`
  margin-top: 5px;
  font-size: 14px;
  line-height: 17px;
  color: #393939;
`;

const StyledPricetitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #393939;
`;

const StyledColordiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px auto;
`;

const StyledSizetitle = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #7c7c7c;
  margin-top: 6px;
`;

const StyledSpan = styled.span`
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  transform: matrix(0.71, -0.7, 0.71, 0.71, 0, 0);
  position: absolute;
  top: 8px;
  left: 5px;
`;

const InterestedProducts = ({ item }) => {
  const params = useParams();
  const collectionId = params.collectionList;
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);
  const filteredFev = favoriteItems.find((el) => el.id === item.id);

  const dispatch = useDispatch();

  const onAddFavorite = (item) => {
    dispatch(onAddToFavorite(item));
  };

  const onRemoveFavorite = (item) => {
    dispatch(onRemoveFromFavorite(item));
  };

  return (
    <StyledContainer>
      <div>
        <div style={{ position: 'absolute' }}>
          {!!item.discount && (
            <StyledSpan>
              {`${mathPercent(item.previousPrice, item.discount)}`}%
            </StyledSpan>
          )}
          {!!item.discount && <DiscounSvg />}
        </div>
        <div
          style={{
            position: 'absolute',
            cursor: 'pointer',
            top: 10,
            right: 10,
          }}
        >
          {!filteredFev && (
            <Hearted role="presentation" onClick={() => onAddFavorite(item)} />
          )}
          {!!filteredFev && <Heart onClick={() => onRemoveFavorite(item)} />}
        </div>
      </div>
      <Link to={`/${collectionId}/${item.id}`}>
        <StyledImage
          src={item.productImages.map((el) => {
            return el.image;
          })}
        />

        <div style={{ margin: '8px' }}>
          <StyledPricetitle style={{ marginTop: '5px' }}>
            <span>
              {item.discount ? (
                <>
                  <span>{item.discount} p </span>
                  <span className="previousPrice">{item.previousPrice} p</span>
                </>
              ) : (
                <span>{item.previousPrice} p</span>
              )}
            </span>
          </StyledPricetitle>
          <StyledTitle>{item.title}</StyledTitle>
          <StyledSizetitle>Размер: {item.sizeRage}</StyledSizetitle>
          <StyledColordiv>
            {item.colors.map((color) => (
              <StyledDivColor
                key={color.id}
                style={{ backgroundColor: `${color.color}` }}
              ></StyledDivColor>
            ))}
          </StyledColordiv>
        </div>
      </Link>
    </StyledContainer>
  );
};

export default InterestedProducts;
