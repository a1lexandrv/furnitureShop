import styles from './DislikeIcon.module.scss';

function DislikeIcon({ onRemove }) {
    return (
        <span className={styles.active} onClick={onRemove}>
            ♥
        </span>
    );
}

export { DislikeIcon };
