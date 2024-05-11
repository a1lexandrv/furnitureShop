import styles from './Select.module.scss';

function Select({ name, onChange, selects = [] }) {
    return (
        <select
            name={name || ''}
            onChange={(event) => onChange(event.target.value)}
            className={styles.filterSelect}
        >
            {selects.map((select) => (
                <option key={select.name} value={select.value}>
                    {select.name}
                </option>
            ))}
        </select>
    );
}

export { Select };
