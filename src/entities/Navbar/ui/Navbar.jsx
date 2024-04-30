import styles from './Navbar.module.scss';
import { observer } from 'mobx-react-lite';

import { CustomLink } from '../../../shared/ui/CustomLink';
import store from '../../../shared/model/user';

const Navbar = observer(() => {
    return (
        <div className={styles.navbar}>
            <CustomLink url="/">Главная</CustomLink>
            <CustomLink url="/catalog">Каталог</CustomLink>
            <CustomLink url="/cart">Корзина</CustomLink>
            <CustomLink url={store.isAuth ? '/profile' : '/login'}>
                Профиль
            </CustomLink>
        </div>
    );
});

export { Navbar };
