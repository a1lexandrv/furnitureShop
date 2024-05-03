import styles from './ProductPage.module.scss';
import { useParams } from 'react-router-dom';

import { BigProductCard } from '../../../widgets/BigProductCard';
import { Comments } from '../../../widgets/Comments';

function ProductPage() {
    const { id } = useParams();

    return (
        <div className={styles.page}>
            <BigProductCard id={id} />
            <Comments />
        </div>
    );
}

export { ProductPage };
