import styles from './Total.module.scss';
import { observer } from 'mobx-react-lite';

import cartStore from '../../../shared/model/cartStore';
import { calcSum } from '../lib/calcSum';

const Total = observer(() => {
    const sum = calcSum(cartStore.cartItems);

    return (
        <div className={styles.total}>
            <h2>Итого:</h2>
            <h2>{sum} $</h2>
        </div>
    );
});

export { Total };
