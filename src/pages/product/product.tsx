import { Card, Navbar, Slider, Swip } from "@/entities";
import s from "./product.module.scss";

export default function Product() {
  return (
    <>
      <Navbar />
      <Slider />
      <Swip />
      <section>
        <article className={s.card}>
          <Card />
          <Card />
          <Card />
        </article>
      </section>
    </>
  );
}
