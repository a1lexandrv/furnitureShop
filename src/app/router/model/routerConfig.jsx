import { ProfilePage } from '../../../pages/ProfilePage';
import { CartPage } from '../../../pages/CartPage';
import { CatalogPage } from '../../../pages/CatalogPage';
import { ProductPage } from '../../../pages/ProductPage';
import { NotFoundPage } from '../../../pages/NotFoundPage';
import { LoginPage } from '../../../pages/LoginPage';

console.log('Привет!');

const config = [
    {
        id: 2,
        name: 'Каталог',
        path: '/catalog',
        element: <CatalogPage />,
    },
    // Передаем динамический уникальный параметр, чтобы
    // роутер понял на страницу какого именно товара нас перевести
    {
        id: 3,
        name: 'Страница товара',
        path: '/catalog/:id',
        element: <ProductPage />,
    },
    {
        id: 4,
        name: 'Корзина',
        path: '/cart',
        element: <CartPage />,
    },
    {
        id: 5,
        name: 'Профиль',
        path: '/profile',
        element: <ProfilePage />,
    },
    {
        id: 6,
        name: '404',
        path: '*',
        element: <NotFoundPage />,
    },
    {
        id: 7,
        name: 'Вход',
        path: '/login',
        element: <LoginPage />,
    },
];

export { config };
