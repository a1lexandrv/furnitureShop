import { CatalogPage } from '../../../pages/CatalogPage';
import { ProductPage } from '../../../pages/ProductPage';
import { CartPage } from '../../../pages/CartPage';
import { ProfilePage } from '../../../pages/ProfilePage';
import { LoginPage } from '../../../pages/LoginPage';
import { NotFoundPage } from '../../../pages/NotFoundPage';

const publicRoutes = [
    {
        name: 'Каталог',
        path: '/',
        component: <CatalogPage />,
        exact: true,
    },
    {
        name: 'Страница товара',
        path: '/product/:id',
        component: <ProductPage />,
    },
    {
        name: 'Корзина',
        path: '/cart',
        component: <CartPage />,
        exact: true,
    },
    {
        name: 'Вход',
        path: '/login',
        component: <LoginPage />,
        exact: true,
    },
    {
        name: 'Страница не найдена',
        path: '/404',
        component: <NotFoundPage />,
    },
];

const privateRoutes = [
    {
        name: 'Профиль',
        path: '/profile',
        component: <ProfilePage />,
        exact: true,
    },
];

export { publicRoutes, privateRoutes };
