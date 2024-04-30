import styles from './LoginPage.module.scss';
import { LoginForm } from '../../../features/LoginForm/ui/LoginForm';

function LoginPage() {
    return (
        <div className={styles.page}>
            <LoginForm />
        </div>
    );
}

export { LoginPage };
