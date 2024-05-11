import styles from './CartPage.module.scss';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import cartStore from '../../../shared/model/cartStore';
import { Total } from '../../../entities/Total';
import { EmptyContainer } from '../../../entities/EmptyContainer';
import { CartItemsList } from '../../../widgets/CartItemsList';

const CartPage = observer(() => {
    useEffect(() => {
        const data = localStorage.getItem('cart');

        if (data) {
            const cartItems = JSON.parse(data);

            cartItems.forEach((item) => cartStore.addToCart(item));
        }
    }, []);

    return cartStore.cartItems.length ? (
        <div className={styles.page}>
            <h2 className={styles.title}>Корзина товаров</h2>
            <div className={styles.container}>
                <CartItemsList />
                <Total />
            </div>
        </div>
    ) : (
        <div className={styles.page}>
            <EmptyContainer
                title="Корзина пустая"
                url="/"
                btnText="Посмотреть товары"
            />
        </div>
    );
});

export { CartPage };
