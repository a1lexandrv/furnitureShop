import styles from './CartProductCard.module.scss';

import { CustomLink } from '../../../shared/ui/CustomLink';
import { AddToFavourite } from '../../../features/AddToFavourite';
import { RemoveFromCart } from '../../../features/RemoveFromCart';

const CartProductCard = ({ item }) => {
    const { id, title, price } = item;

    return (
        <div className={styles.card}>
            <img src={`/images/items-pics/${item.img}`} alt={title} />
            <div className={styles.contaner}>
                <div className={styles.descContainer}>
                    <CustomLink url={`/product/${id}`}>
                        <h2>{title}</h2>
                    </CustomLink>
                    <h2 className={styles.price}>{price} $</h2>
                </div>
                <div className={styles.btnContainer}>
                    <AddToFavourite item={item} />
                    <RemoveFromCart id={id} />
                </div>
            </div>
        </div>
    );
};

export { CartProductCard };
