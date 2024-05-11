import React from 'react';
import styles from './CatalogItemsList.module.scss';

import { ProductCard } from '../../ProductCard';
import { observer } from 'mobx-react-lite';
import catalog from '../../../pages/CatalogPage/model/catalog';

const CatalogItemsList = observer(() => {
    return (
        <div className={styles.container}>
            {catalog.catalogItems.map((item) => (
                <ProductCard key={item.id} item={item} />
            ))}
        </div>
    );
});

export { CatalogItemsList };
