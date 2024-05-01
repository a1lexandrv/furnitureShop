import styles from './EmptyContainer.module.scss';

import { useNavigate } from 'react-router-dom';
import { MainButton } from '../../../shared/ui/MainButton';

function EmptyContainer({ title, url, btnText }) {
    const navigate = useNavigate();

    return (
        <>
            <h2 className={styles.title}>
                {title ? title : 'Страница пустая'}
            </h2>
            <MainButton text={btnText} onClick={() => navigate(url)} />
        </>
    );
}

export { EmptyContainer };
