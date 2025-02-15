import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BannerSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: "images/banner3.jpg",
      title: "Quran 2:272",
      description: "(நபியே!) அவர்களை நேர்வழியில் நடத்துவது உம் கடமையல்ல; ஆனால், தான் நாடியவர்களை அல்லாஹ் நேர்வழியில் செலுத்துகின்றான்; இன்னும், நல்லதில் நீங்கள் எதைச் செலவிடினும், அது உங்களுக்கே நன்மை பயப்பதாகும்; அல்லாஹ்வின் திருமுகத்தை நாடியே அல்லாது (வீண் பெருமைக்காகச்) செலவு செய்யாதீர்கள்; நல்லவற்றிலிருந்து நீங்கள் எதைச் செலவு செய்தாலும், அதற்குரிய நற்பலன் உங்களுக்குப் பூரணமாகத் திருப்பிக் கொடுக்கப்படும்; நீங்கள் அநியாயம் செய்யப் -படமாட்டீர்கள்.",
    },
    {
        image: "images/banner2.jpg",
        title: "Master  Recitation and Tajweed!",
        description: "Expand Your Knowledge with Our Diverse Islamic Courses.",
      },
      {
        image: "images/banner.jpg",
        title: "Master Quranic Recitation and Tajweed!",
        description: "Expand Your Knowledge with Our Diverse Islamic Courses.",
      },
  ];

  return (
    <div className="">
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Banner Image with Overlay */}
            <div
              className="slider-bg d-flex justify-content-center align-items-center position-relative text-white text-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "700px",
              }}
            >
             {/* Black Overlay */}
<div 
  className="position-absolute top-0 start-0 w-100 h-100"
  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
></div>
              {/* Text Content */}
              <div
                className={`p-4 rounded w-75 mx-auto position-relative ${
                  activeSlide === index ? "animate__animated animate__fadeInLeft" : ""
                }`}
              >
                <h3 className="fw-bold">{slide.title}</h3>
                <p className="slide-txt">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
  )}
  export default BannerSlider;