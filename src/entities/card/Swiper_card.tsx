import { Link } from "@remix-run/react";
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import s from "./Swiper_card.module.scss";

export function Swip() {
  const [thumbsSwiper] = useState<SwiperClass>();
  return (
    <>
      <div className={s.title}>
        <p>Season collection</p>
      </div>
      <section className={s.tranding}>
        <div className={s.container}>
          <Swiper
            spaceBetween={0}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            thumbs={{ swiper: thumbsSwiper }}
            slidesPerView={5}
            modules={[FreeMode, Navigation, Thumbs]}
            /*coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}*/
            navigation={{
              nextEl: s.swiper_button_next,
              prevEl: s.swiper_button_prev,
            }}
            className={s.tranding_slider}
          >
            <SwiperSlide className={s.tranding_slide}>
              <Link to={""} className={s.tranding_slide_img}>
                <img src={"/dress.png"} alt={""} />
              </Link>
              <Link to={""} className={s.button}>
                <div>Buy</div>
              </Link>
              <div className={s.tranding_slide_content}>
                <h1 className={s.food_price}>$20</h1>
                <div className={s.tranding_slide_content_bottom}>
                  <h2 className={s.food_name}>Special Pizza</h2>
                  <h3 className={s.food_rating}>
                    <span>4.5</span>
                    <div className={s.rating}>
                      <CiStar className={s.ioc_icon} />
                      <CiStar className={s.ioc_icon} />
                      <CiStar className={s.ioc_icon} />
                      <CiStar className={s.ioc_icon} />
                      <CiStar className={s.ioc_icon} />
                    </div>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.tranding_slide}>
              <Link to={""} className={s.tranding_slide_img}>
                <img src={"/dress2.png"} alt={""} />
              </Link>
              <Link to={""} className={s.button}>
                <div>Buy</div>
              </Link>
              <div className={s.tranding_slide_content}>
                <h1 className={s.food_price}>$20</h1>
                <div className={s.tranding_slide_content_bottom}>
                  <h2 className={s.food_name}>Meat Ball</h2>
                  <h3 className={s.food_rating}>
                    <span>4.5</span>
                    <div className={s.rating}>
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                    </div>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.tranding_slide}>
              <Link to={""} className={s.tranding_slide_img}>
                <img src={"/dress-3.jpg"} alt={""} />
              </Link>
              <Link to={""} className={s.button}>
                <div>Buy</div>
              </Link>
              <div className={s.tranding_slide_content}>
                <h1 className={s.food_price}>$40</h1>
                <div className={s.tranding_slide_content_bottom}>
                  <h2 className={s.food_name}>Burger</h2>
                  <h3 className={s.food_rating}>
                    <span>4.5</span>
                    <div className={s.rating}>
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                    </div>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.tranding_slide}>
              <Link to={""} className={s.tranding_slide_img}>
                <img src={"/dress-4.jpg"} alt={""} />
              </Link>
              <Link to={""} className={s.button}>
                <div>Buy</div>
              </Link>
              <div className={s.tranding_slide_content}>
                <h1 className={s.food_price}>$15</h1>
                <div className={s.tranding_slide_content_bottom}>
                  <h2 className={s.food_name}>Frish Curry</h2>
                  <h3 className={s.food_rating}>
                    <span>4.5</span>
                    <div className={s.rating}>
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                    </div>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.tranding_slide}>
              <Link to={""} className={s.tranding_slide_img}>
                <img src={"/dress-5.jpg"} alt={""} />
              </Link>
              <Link to={""} className={s.button}>
                <div>Buy</div>
              </Link>
              <div className={s.tranding_slide_content}>
                <h1 className={s.food_price}>$15</h1>
                <div className={s.tranding_slide_content_bottom}>
                  <h2 className={s.food_name}>Pane Cake</h2>
                  <h3 className={s.food_rating}>
                    <span>4.5</span>
                    <div className={s.rating}>
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                    </div>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.tranding_slide}>
              <Link to={""} className={s.tranding_slide_img}>
                <img src={"/dress-6.jpg"} alt={""} />
              </Link>
              <Link to={""} className={s.button}>
                <div>Buy</div>
              </Link>
              <div className={s.tranding_slide_content}>
                <h1 className={s.food_price}>$20</h1>
                <div className={s.tranding_slide_content_bottom}>
                  <h2 className={s.food_name}>Vanilla cake</h2>
                  <h3 className={s.food_rating}>
                    <span>4.5</span>
                    <div className={s.rating}>
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                    </div>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.tranding_slide}>
              <Link to={""} className={s.tranding_slide_img}>
                <img src={"/dress-7.jpg"} alt={""} />
              </Link>
              <Link to={""} className={s.button}>
                <div>Buy</div>
              </Link>
              <div className={s.tranding_slide_content}>
                <h1 className={s.food_price}>$8</h1>
                <div className={s.tranding_slide_content_bottom}>
                  <h2 className={s.food_name}>Straw Cake</h2>
                  <h3 className={s.food_rating}>
                    <span>4.5</span>
                    <div className={s.rating}>
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                    </div>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/*<Swiper
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
              <div className={s.swiper_slide}></div>
            </SwiperSlide>
            <SwiperSlide className={s.thumbs_container}>
              <div className={s.swiper_slide}></div>
            </SwiperSlide>
            <SwiperSlide className={s.thumbs_container}>
              <div className={s.swiper_slide}></div>
            </SwiperSlide>
            <SwiperSlide className={s.thumbs_container}>
              <div className={s.swiper_slide}></div>
            </SwiperSlide>
            <SwiperSlide className={s.thumbs_container}>
              <div className={s.swiper_slide}></div>
            </SwiperSlide>
            <SwiperSlide className={s.thumbs_container}>
              <div className={s.swiper_slide}></div>
            </SwiperSlide>
            <SwiperSlide className={s.thumbs_container}>
              <div className={s.swiper_slide}></div>
            </SwiperSlide>
          </Swiper>*/}
        </div>
      </section>
    </>
  );
}
