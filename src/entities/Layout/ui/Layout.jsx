import styles from './Layout.module.scss';

import { Header } from '../../../widgets/Header';
import { Outlet } from 'react-router';

function Layout() {
    return (
        <div className={styles.layout}>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export { Layout };
