import React, { useEffect, useState } from 'react';
import styles from './ProductPage.module.scss';
import { useParams } from 'react-router';

import { items } from '../../../app/api/items-data';

function ProductPage() {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        const item = items.filter((item) => item.id == id);

        setItem(item);
    }, [id]);

    return item.length ? (
        <div className={styles.page}>
            <h1>{item[0].title}</h1>
            <p>{item[0].category}</p>
            <p>{item[0].desc}</p>
            <h2>{item[0].price}</h2>
        </div>
    ) : (
        <h1>Товар не найден</h1>
    );
}

export { ProductPage };
