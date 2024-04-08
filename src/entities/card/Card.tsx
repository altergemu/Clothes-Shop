import { Link } from "@remix-run/react";
import s from "./Card.module.scss";

export function Card() {
  return (
    <div className={s.card}>
      <Link to="/">
        <div className={s.container}>
          <img className={s.img} src={"/dress.png"} alt={""} />
        </div>
      </Link>
      <div className={s.heading}>Something</div>
      <div className={s.price}>18.99$</div>
      <div className={s.size}>xs x s</div>
      <div className={s.button}>
        <Link to={""}>В корзину</Link>
      </div>
    </div>
  );
}
