import styles from './Navbar.module.scss';

import { CustomLink } from '../../../shared/ui/CustomLink';
import { CartIndicator } from '../../../features/CartIndicator';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <CustomLink url="/">Каталог</CustomLink>
            <CustomLink url="/cart">
                Корзина <CartIndicator />
            </CustomLink>
            <CustomLink url="/profile">Профиль</CustomLink>
        </div>
    );
}

export { Navbar };
