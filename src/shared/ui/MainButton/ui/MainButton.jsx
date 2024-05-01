import styles from "./MainButton.module.scss";

function MainButton({ text, type, onClick }) {
  return (
    <button className={styles.mainBtn} onClick={onClick} type={type | "button"}>
      {text ? text : "Кнопка"}
    </button>
  );
}

export { MainButton };
