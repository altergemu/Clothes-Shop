import { Link } from "@remix-run/react";
import s from "./SliderNew.module.scss";

export function Slider() {
  return (
    <section className={s.container}>
      <div className={s.slider_wrapper}>
        <div className={s.slider}>
          <img id="slide-1" className={s.img} src={"/berlin.png"} alt={""} />
          <img id="slide-2" className={s.img} src={"/moscow.png"} alt={""} />
          <img id="slide-3" className={s.img} src={"/paris.png"} alt={""} />
          <img id="slide-4" className={s.img} src={"/polska.png"} alt={""} />
        </div>

        <div className={s.slider_nav}>
          <Link className={s.link + ` ` + s.a} to="#slide-1"></Link>
          <Link className={s.link + ` ` + s.b} to="#slide-2"></Link>
          <Link className={s.link + ` ` + s.c} to="#slide-3"></Link>
          <Link className={s.link + ` ` + s.d} to="#slide-4"></Link>
        </div>
      </div>
    </section>
  );
}
