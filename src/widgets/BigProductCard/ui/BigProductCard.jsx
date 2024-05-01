import styles from './BigProductCard.module.scss';

import { CustomLink } from '../../../shared/ui/CustomLink';
import { AddToFavourite } from '../../../features/AddToFavourite';
import { RemoveFromCart } from '../../../features/RemoveFromCart';

const BigProductCard = ({ item }) => {
    const { id, title, price } = item;

    return (
        <div className={styles.card}>
            <div className={styles.titleContainer}>
                <CustomLink url={`/catalog/${id}`}>
                    <h2>{title}</h2>
                </CustomLink>
                <AddToFavourite item={item} />
            </div>
            <h2 className={styles.price}>{price} $</h2>
            <RemoveFromCart id={id} />
        </div>
    );
};

export { BigProductCard };
