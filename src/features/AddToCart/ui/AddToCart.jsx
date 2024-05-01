import { observer } from 'mobx-react-lite';

import cartStore from '../../../shared/model/cartStore';
import { MainButton } from '../../../shared/ui/MainButton';

const AddToCart = observer(({ item }) => {
    return (
        <MainButton
            text="В корзину"
            onClick={() => cartStore.addToCart(item)}
        />
    );
});

export { AddToCart };
