import { Card } from '@/entities';
import s from './product.module.scss';

export default function Product() {
    return (
        <div className={s.content}>
            <div className={s.header}>

            </div>
            <div className={s.main}>
                    <Card/>
                    <Card/>
                    <Card/>
            </div>
            <div className={s.footer}>

            </div>
        </div>

    )

}