import styles from './BigProductCard.module.scss';
import { observer } from 'mobx-react-lite';

import store from '../../../pages/CartPage/model/store';
import { MainButton } from '../../../shared/ui/MainButton';

const BigProductCard = observer(({ item }) => {
    const { id, title, price } = item;

    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <h2 className={styles.price}>{price}</h2>
            <MainButton
                text="Удалить"
                onClick={() => store.removeFromCart(id)}
            />
        </div>
    );
});

export { BigProductCard };
