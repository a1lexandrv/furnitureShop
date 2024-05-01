import { useEffect, useState } from 'react';
import styles from './ProductPage.module.scss';
import { useParams } from 'react-router';

import { items } from '../../../app/api/items-data';
import { EmptyContainer } from '../../../entities/EmptyContainer';

function ProductPage() {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        const item = items.filter((item) => item.id == id);

        setItem(item);
    }, [id]);

    return item.length ? (
        <div className={styles.page}>
            <img
                className={styles.image}
                src={`/images/items-pics/${item[0].img}`}
                alt={item[0].title}
            />
            <div className={styles.infoContainer}>
                <h3>{item[0].category}</h3>
                <h1>{item[0].title}</h1>
                <p>{item[0].desc}</p>
                <h2>{item[0].price}</h2>
            </div>
        </div>
    ) : (
        <EmptyContainer
            title="Товар распродан"
            url="/catalog"
            btnText="Посмотреть другие товары"
        />
    );
}

export { ProductPage };
