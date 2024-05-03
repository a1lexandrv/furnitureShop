import styles from './RemoveIcon.module.scss';

function RemoveIcon({ onClick }) {
    return (
        <span className={styles.icon} onClick={onClick}>
            ⌫
        </span>
    );
}

export { RemoveIcon };
