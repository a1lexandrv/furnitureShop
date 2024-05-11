import styles from './BigProductCard.module.scss';

import { items } from '../../../app/api/items-data';
import { AddToCart } from '../../../features/AddToCart';
import { AddToFavourite } from '../../../features/AddToFavourite';
import { EmptyContainer } from '../../../entities/EmptyContainer';

function BigProductCard({ id }) {
    const item = items.filter((item) => item.id == id);

    return item.length ? (
        <div className={styles.itemContainer}>
            <img
                className={styles.image}
                src={`/images/items-pics/${item[0].img}`}
                alt={item[0].title}
            />
            <div className={styles.infoContainer}>
                <h3>{item[0].category}</h3>
                <div className={styles.titleContainer}>
                    <h1>{item[0].title}</h1>
                    <AddToFavourite item={item[0]} />
                </div>
                <p>{item[0].desc}</p>
                <h2>{item[0].price} $</h2>
                <AddToCart item={item[0]} />
            </div>
        </div>
    ) : (
        <div className={styles.itemContainer}>
            <EmptyContainer
                title="Товар распродан"
                url="/"
                btnText="Посмотреть другие товары"
            />
        </div>
    );
}

export { BigProductCard };
