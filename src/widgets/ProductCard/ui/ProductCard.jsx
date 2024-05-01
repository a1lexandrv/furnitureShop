import styles from './ProductCard.module.scss';

import { CustomLink } from '../../../shared/ui/CustomLink';
import { AddToFavourite } from '../../../features/AddToFavourite';
import { AddToCart } from '../../../features/AddToCart';

function ProductCard({ item }) {
    const { id, title, desc, price } = item;

    return (
        <div className={styles.card}>
            <div className={styles.titleContainer}>
                <CustomLink url={`/catalog/${id}`}>
                    <h3 className={styles.title}>{title}</h3>
                </CustomLink>
                <AddToFavourite item={item} />
            </div>
            <p className={styles.desc}>{desc}</p>
            <h3 className={styles.price}>{price} $</h3>
            <AddToCart item={item} />
        </div>
    );
}

export { ProductCard };
