import { Route, Routes } from 'react-router';

import { publicRoutes, privateRoutes } from '../model/routerConfig';
import { Layout } from '../../../entities/Layout';
import { PrivateRouter } from './PrivateRouter';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {publicRoutes.map((route) => (
                    <Route
                        path={route.path}
                        element={route.component}
                        index={route.index}
                        exact={route.exact}
                        key={route.path}
                    />
                ))}
                {/* Дальше приватные роуты */}
                <Route element={<PrivateRouter />}>
                    {privateRoutes.map((route) => (
                        <Route
                            path={route.path}
                            element={route.component}
                            key={route.path}
                            exact={route.exact}
                        />
                    ))}
                </Route>
            </Route>
        </Routes>
    );
}

export { Router };
