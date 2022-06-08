import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { getCoruselImageRequest } from '../../api/service';
import styled from 'styled-components';
import './MainCarosel.css';

const StyledContainer = styled.div`
  padding-bottom: 11px;

  // @media screen and (max-width: 360px) {
  //   height: 300px;
  // }
`;

SwiperCore.use([Autoplay]);

export default function MainCarosel() {
  const [coruselImg, setCoruselImg] = useState([]);

  useEffect(() => {
    const getCoruselImage = async () => {
      try {
        const coruselResponse = await getCoruselImageRequest();
        setCoruselImg(coruselResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCoruselImage();
  }, []);

  return (
    <StyledContainer>
      <Swiper
        // style={{ background: 'black' }}
        modules={[Pagination]}
        style={{ height: 'auto' }}
        slidesPerView={1}
        grabCursor={true}
        pagination={{ clickable: true }}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
      >
        {coruselImg.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              style={{ height: '488px' }}
              src={item.image}
              alt="coruselImg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledContainer>
  );
}
