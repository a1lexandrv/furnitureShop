import styles from './FavouritesList.module.scss';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import store from '../model/favouriteStore';
import { ProductCard } from '../../ProductCard';
import { EmptyContainer } from '../../../entities/EmptyContainer';

const FavouritesList = observer(() => {
    useEffect(() => {
        const data = localStorage.getItem('favourite');

        if (data) {
            const favouritesItems = JSON.parse(data);

            favouritesItems.forEach((item) => store.addToFavourite(item));
        }
    }, []);

    return store.favouritesItems.length ? (
        <div className={styles.container}>
            <h2>Избранное</h2>
            <div className={styles.favouriteItems}>
                {store.favouritesItems.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    ) : (
        <div className={styles.container}>
            <EmptyContainer
                title="Избранное"
                url="/"
                btnText=" Дообавить товар"
            />
        </div>
    );
});

export { FavouritesList };
