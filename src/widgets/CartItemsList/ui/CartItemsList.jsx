import styles from './CartItemsList.module.scss';
import { observer } from 'mobx-react-lite';

import cartStore from '../../../shared/model/cartStore';
import { BigProductCard } from '../../BigProductCard/ui/BigProductCard';

const CartItemsList = observer(() => {
    return (
        <div className={styles.container}>
            {cartStore.cartItems.map((item) => (
                <BigProductCard key={item.id} item={item} />
            ))}
        </div>
    );
});

export { CartItemsList };
