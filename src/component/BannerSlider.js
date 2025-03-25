import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "react-bootstrap";

const BannerSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: "images/banner3.jpg",
      title: "Allah Help Those Who Help Themselves",
      description: "Al-Infaaq Trust 2016 ஆம் ஆண்டில் தொடங்கப்பட்டது. ஆரம்பத்தில் ஒரே ஒரு குடும்பத்துக்கு உதவியாக இருந்தோம், ஆனால் இன்று 60 குடும்பங்களுக்கு ஆதரவளித்துள்ளோம், தற்பொழுது 30 குடும்பங்களுக்கு உதவியளிக்கிறோம். அத்தியாவசிய உதவி, திறன் மேம்பாட்டு பயிற்சி மற்றும் IT கல்வியை வழங்குவதன் மூலம் சமூகங்களை உயர்த்துவதில் நாங்கள் ஈடுபட்டுள்ளோம்.",
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
                height: "500px",
              }}
            >
              {/* Black Overlay */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              ></div>
              {/* Text Content */}
              <div
                className={`p-4 rounded w-75 mx-auto position-relative ${activeSlide === index ? "animate__animated animate__fadeInLeft" : ""
                  }`}
              >
                <h3 className="fw-bold">{slide.title}</h3>
                <p className="slide-txt">{slide.description}</p>
                <div className="banner-btn">
                  <button className="donate-btn">Donate Now</button>
                  <button className="servicess-btn">Our Services</button>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default BannerSlider;