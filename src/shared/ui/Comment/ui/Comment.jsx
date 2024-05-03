import styles from './Comment.module.scss';

function Comment({ username, body }) {
    return (
        <div className={styles.comment}>
            <h3>{username}</h3>
            <p>{body}</p>
        </div>
    );
}

export { Comment };
