import styles from './FavouritesList.module.scss';
import { observer } from 'mobx-react-lite';

import store from '../model/store';
import { ProductCard } from '../../ProductCard';
import { EmptyContainer } from '../../../entities/EmptyContainer';

const FavouritesList = observer(() => {
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
                url="/catalog"
                btnText=" Дообавить товар"
            />
        </div>
    );
});

export { FavouritesList };
