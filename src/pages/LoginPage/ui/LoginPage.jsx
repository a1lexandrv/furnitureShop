import styles from './LoginPage.module.scss';
import { Navigate } from 'react-router-dom';

import userStore from '../../../shared/model/userStore';
import { LoginForm } from '../../../features/LoginForm/ui/LoginForm';

function LoginPage() {
    return (
        <div className={styles.page}>
            {!userStore.isAuth ? <LoginForm /> : <Navigate to={'/profile'} />}
        </div>
    );
}

export { LoginPage };
