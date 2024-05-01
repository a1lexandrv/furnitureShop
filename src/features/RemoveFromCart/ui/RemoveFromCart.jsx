import { observer } from 'mobx-react-lite';
import styles from './RemoveFromCart.module.scss';

import cartStore from '../../../shared/model/cartStore';

const RemoveFromCart = observer(({ id }) => {
    return (
        <span
            className={styles.icon}
            onClick={() => cartStore.removeFromCart(id)}
        >
            ⌫  <span className={styles.text}>УДАЛИТЬ</span>
        </span>
    );
});

export { RemoveFromCart };
