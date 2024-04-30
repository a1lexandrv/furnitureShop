import React from 'react';
import { Route, Routes } from 'react-router';

import { config } from '../model/routerConfig';
import { Layout } from '../../../entities/Layout';
import { MainPage } from '../../../pages/MainPage/';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index path="/" element={<MainPage />} />
                {config.map((page) => (
                    <Route
                        key={page.id}
                        path={page.path}
                        element={page.element}
                    />
                ))}
            </Route>
        </Routes>
    );
}

export { Router };
