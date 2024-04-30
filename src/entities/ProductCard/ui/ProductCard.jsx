import styles from './ProductCard.module.scss';
import { observer } from 'mobx-react-lite';

import store from '../../../pages/CartPage/model/store';
import { MainButton } from '../../../shared/ui/MainButton';
import { CustomLink } from '../../../shared/ui/CustomLink';
import { AddToFavourite } from '../../../features/AddToFavourite';

const ProductCard = observer(({ item }) => {
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
            <h3 className={styles.price}>{price}</h3>
            <MainButton
                text="В корзину"
                onClick={() => store.addToCart(item)}
            />
        </div>
    );
});

export { ProductCard };
