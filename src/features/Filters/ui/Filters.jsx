import styles from './Filters.module.scss';
import { Select } from '../../../shared/ui/Select/ui/Select';

import catalog from '../../../pages/CatalogPage/model/catalog';
import { config } from '../lib/filterConfig';

function Filters() {
    const filterCategory = (param) => {
        catalog.categoryFilter(param);
    };

    return config.length ? (
        <div className={styles.filterContainer}>
            {config.map((filter) => (
                <Select
                    key={filter.name}
                    name={filter.name}
                    onChange={filterCategory}
                    selects={filter.selects}
                />
            ))}
        </div>
    ) : null;
}

export { Filters };
