import { useEffect } from 'react';
import styles from './Comments.module.scss';

import { useGetComments } from '../api/useGetComments';
import { Comment } from '../../../shared/ui/Comment';

function Comments() {
    const { comments, loading, error, getComments } = useGetComments();

    useEffect(() => {
        getComments();
    }, []);

    if (loading) {
        return <div className={styles.loading}></div>;
    }

    if (error) {
        return (
            <div className={styles.comments}>
                <h2>Comments</h2>
                <p>{error}</p>
            </div>
        );
    }

    return comments.length ? (
        <div className={styles.comments}>
            <h2>Comments</h2>
            <div className={styles.commentsList}>
                {comments.map((comment) => (
                    <Comment
                        username={comment.user.username}
                        body={comment.body}
                        key={comment.id}
                    />
                ))}
            </div>
        </div>
    ) : null;
}

export { Comments };
