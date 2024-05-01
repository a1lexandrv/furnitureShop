import styles from './EmptyContainer.module.scss';

import { useNavigate } from 'react-router-dom';
import { MainButton } from '../../../shared/ui/MainButton';

function EmptyContainer({ title, url, btnText }) {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            {title && <h2>{title}</h2>}
            <MainButton text={btnText} onClick={() => navigate(url)} />
        </div>
    );
}

export { EmptyContainer };
