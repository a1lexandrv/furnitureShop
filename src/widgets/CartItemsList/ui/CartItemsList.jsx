import styles from './CartItemsList.module.scss';
import { observer } from 'mobx-react-lite';

import cartStore from '../../../shared/model/cartStore';
import { CartProductCard } from '../../CartProductCard/ui/CartProductCard';

const CartItemsList = observer(() => {
    return (
        <div className={styles.container}>
            {cartStore.cartItems.map((item) => (
                <CartProductCard key={item.id} item={item} />
            ))}
        </div>
    );
});

export { CartItemsList };
