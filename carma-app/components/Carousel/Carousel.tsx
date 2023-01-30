import React from "react";
import { StyledCarousel } from "./Carousel.styled";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import MiniMenuItem from "../MenuItem/MiniMenuItem";
import { IMenuItem, IMenuItems } from "../../model/MenuItem";

interface ICarousel {
  menuItems: IMenuItem[];
  displayNumber: number;
}

function Carousel({ menuItems, displayNumber }: ICarousel) {
  return (
    <StyledCarousel>
      <Swiper
        slidesPerView={displayNumber}
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
        {menuItems.map((menuItem: IMenuItem) => (
          <SwiperSlide key={menuItem.id}>
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
