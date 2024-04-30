import styles from './LikeIcon.module.scss';

function LikeIcon({ onAddFavorite }) {
    return (
        <span className={styles.icon} onClick={onAddFavorite}>
            ♥
        </span>
    );
}

export { LikeIcon };
