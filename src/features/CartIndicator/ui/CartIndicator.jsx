import { observer } from 'mobx-react-lite';
import cartStore from '../../../shared/model/cartStore';

const CartIndicator = observer(() => {
    return cartStore.cartCounter > 0 && <span>x{cartStore.cartCounter}</span>;
});

export { CartIndicator };
