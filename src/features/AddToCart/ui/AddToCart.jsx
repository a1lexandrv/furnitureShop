import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import cartStore from '../../../shared/model/cartStore';
import { MainButton } from '../../../shared/ui/MainButton';
import { LinkButton } from '../../../shared/ui/LinkButton';

const AddToCart = observer(({ item }) => {
    const [isInCart, setIsIncart] = useState(false);

    const handleClickCart = () => {
        cartStore.addToCart(item);
        setIsIncart(true);
    };

    const checkIsInCart = (id) => {
        return !!cartStore.cartItems.find((item) => item.id === id);
    };

    useEffect(() => {
        setIsIncart(checkIsInCart(item.id));
    }, []);

    return (
        <>
            {!isInCart ? (
                <MainButton text="В корзину" onClick={handleClickCart} />
            ) : (
                <LinkButton url="/cart">
                    <MainButton text="Перейти в корзину" />
                </LinkButton>
            )}
        </>
    );
});

export { AddToCart };
