import styles from './Navbar.module.scss';

import { CustomLink } from '../../../shared/ui/CustomLink';
import { CartIndicator } from '../../../features/CartIndicator';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <CustomLink url="/">Главная</CustomLink>
            <CustomLink url="/catalog">Каталог</CustomLink>
            <CustomLink url="/cart">
                Корзина <CartIndicator />
            </CustomLink>
            <CustomLink url="/profile">Профиль</CustomLink>
        </div>
    );
};

export { Navbar };
