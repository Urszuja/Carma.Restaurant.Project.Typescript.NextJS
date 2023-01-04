import React from "react";
import { StyledCarousel } from "../styles/Carousel.styled";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import MiniMenuItem from "../MenuItem/MiniMenuItem";

function Carousel({ menu }) {
  return (
    <StyledCarousel>
      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        {menu.map((menuItem) => (
          <SwiperSlide>
            <MiniMenuItem
              name={menuItem.name}
              id={menuItem.id}
              prices={menuItem.prices}
              image={menuItem.image}
              description={menuItem.description}
              isSpicy={menuItem.isSpicy}
              isVegan={menuItem.isVegan}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledCarousel>
  );
}

export default Carousel;
