import { Link } from "@remix-run/react";
import { useState } from "react";
import { FaArrowRight, FaTelegram, FaWhatsappSquare } from "react-icons/fa";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import s from "./SliderNew.module.scss";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

  return (
    <section className={s.home}>
      <div className={s.media_icons}>
        <Link to={""} className={s.icons_link}>
          <FaWhatsappSquare />
        </Link>
        <Link to={""} className={s.icons_link}>
          <FaTelegram />
        </Link>
      </div>

      <Swiper
        loop={true}
        spaceBetween={0}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={s.bg_slider}
      >
        <SwiperSlide className={s.swiper_slide + ` ` + s.dark_layer}>
          <img className={s.img} src={"/bg-1.jpg"} alt={""} />
          <div className={s.text_content}>
            <h2 className={s.title}>
              Autumn <span>Season</span>
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              deleniti ex nulla qui non aperiam eius delectus. Sint qui
              obcaecati culpa, ipsa enim eaque, ad repellendus eum,
              necessitatibus voluptatibus possimus?
            </p>
            <button className={s.read_btn}>
              Read More <FaArrowRight className={s.arrow} />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.swiper_slide + ` ` + s.dark_layer}>
          <img className={s.img} src={"/bg-2.jpg"} alt={""} />
          <div className={s.text_content}>
            <h2 className={s.title}>
              Winter <span>Season</span>
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              deleniti ex nulla qui non aperiam eius delectus. Sint qui
              obcaecati culpa, ipsa enim eaque, ad repellendus eum,
              necessitatibus voluptatibus possimus?
            </p>
            <button className={s.read_btn}>
              Read More <FaArrowRight className={s.arrow} />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.swiper_slide + ` ` + s.dark_layer}>
          <img className={s.img} src={"/bg-3.jpg"} alt={""} />
          <div className={s.text_content}>
            <h2 className={s.title}>
              Spring <span>Season</span>
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              deleniti ex nulla qui non aperiam eius delectus. Sint qui
              obcaecati culpa, ipsa enim eaque, ad repellendus eum,
              necessitatibus voluptatibus possimus?
            </p>
            <button className={s.read_btn}>
              Read More <FaArrowRight className={s.arrow} />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.swiper_slide + ` ` + s.dark_layer}>
          <img className={s.img} src={"/bg-4.jpg"} alt={""} />
          <div className={s.text_content}>
            <h2 className={s.title}>
              Summer <span>Season</span>
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              deleniti ex nulla qui non aperiam eius delectus. Sint qui
              obcaecati culpa, ipsa enim eaque, ad repellendus eum,
              necessitatibus voluptatibus possimus?
            </p>
            <button className={s.read_btn}>
              Read More <FaArrowRight className={s.arrow} />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        modules={[FreeMode, Navigation, Thumbs]}
        watchSlidesProgress={true}
        className={s.bg_slider_thumbs}
      >
        <SwiperSlide className={s.thumbs_container}>
          <img className={s.swiper_slide} src={"/bg-1.jpg"} alt={""} />
        </SwiperSlide>
        <SwiperSlide className={s.thumbs_container}>
          <img className={s.swiper_slide} src={"/bg-2.jpg"} alt={""} />
        </SwiperSlide>
        <SwiperSlide className={s.thumbs_container}>
          <img className={s.swiper_slide} src={"/bg-3.jpg"} alt={""} />
        </SwiperSlide>
        <SwiperSlide className={s.thumbs_container}>
          <img className={s.swiper_slide} src={"/bg-4.jpg"} alt={""} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
