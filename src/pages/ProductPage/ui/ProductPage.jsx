import styles from './ProductPage.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { items } from '../../../app/api/items-data';
import { EmptyContainer } from '../../../entities/EmptyContainer';
import { AddToFavourite } from '../../../features/AddToFavourite';
import { AddToCart } from '../../../features/AddToCart';

function ProductPage() {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const item = items.filter((item) => item.id == id);

        setItem(item);
    }, [id]);

    useEffect(() => {
        try {
            fetch('https://dummyjson.com/comments?limit=6')
                .then((response) => response.json())
                .then((data) => setComments(data.comments));
        } catch (error) {
            console.log('ERROR ==>', error);
        }
    }, []);

    if (item.length) {
        return (
            <div className={styles.page}>
                <div className={styles.itemContainer}>
                    <img
                        className={styles.image}
                        src={`/images/items-pics/${item[0].img}`}
                        alt={item[0].title}
                    />
                    <div className={styles.infoContainer}>
                        <h3>{item[0].category}</h3>
                        <div className={styles.titleContainer}>
                            <h1>{item[0].title}</h1>
                            <AddToFavourite item={item[0]} />
                        </div>
                        <p>{item[0].desc}</p>
                        <h2>{item[0].price} $</h2>
                        <AddToCart item={item[0]} />
                    </div>
                </div>
                {comments.length ? (
                    <div className={styles.comments}>
                        {comments.map((comment) => (
                            <div className={styles.comment} key={comment.id}>
                                <h3>{comment.user.username}</h3>
                                <p>{comment.body}</p>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <EmptyContainer
                title="Товар распродан"
                url="/catalog"
                btnText="Посмотреть другие товары"
            />
        </div>
    );
}

export { ProductPage };
