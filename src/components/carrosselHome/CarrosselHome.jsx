import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import images
import logoJesusKing from '../../assets/JIK-LOGO.png';
import logoPibvm from '../../assets/PIBVM-LOGO.png';
import logoOnu from '../../assets/ONU-LOGO.jpg';
import controleEstoque from '../../assets/controle-estoque.png';

// import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

export default function App({ onSlideChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;
    setActiveIndex(newIndex);
    if (onSlideChange) {
      onSlideChange(newIndex);
    }
  };

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        spaceBetween={50}
        loop={true}
        // pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={ handleSlideChange }
        // slideActiveClass="active-slide"
      >
        <SwiperSlide>
          <img src={logoJesusKing} alt="Jesus King logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logoPibvm} alt="PIBVM logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={controleEstoque} alt="Controle Estoque image" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}