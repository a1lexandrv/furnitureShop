import styles from './FavouritesList.module.scss';
import { observer } from 'mobx-react-lite';

import store from '../model/store';
import { ProductCard } from '../../../entities/ProductCard';

const FavouritesList = observer(() => {
    return (
        <div className={styles.container}>
            <h2>Избранное</h2>
            <div className={styles.favouriteItems}>
                {store.favouritesItems.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
});

export { FavouritesList };
