import styles from './CatalogPage.module.scss';
import { CatalogItemsList } from '../../../widgets/CatalogItemsList';
import { Filters } from '../../../features/Filters';

function CatalogPage() {
    return (
        <div className={styles.page}>
            <Filters />
            <CatalogItemsList />
        </div>
    );
}

export { CatalogPage };
