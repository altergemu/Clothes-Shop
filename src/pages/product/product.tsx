import { Card, Slider } from "@/entities";
import s from "./product.module.scss";

export default function Product() {
  return (
    <div className={s.content}>
      <div className={s.header}></div>
      <div className={s.main}>
        <Slider />
        <article className={s.card}>
          <Card />
          <Card />
          <Card />
        </article>
      </div>
      <div className={s.footer}></div>
    </div>
  );
}
