import styles from "./Comment.module.scss";

function Comment({ com }) {
  return (
    <div className={styles.comment}>
      <h3>{com.user.username}</h3>
      <p>{com.body}</p>
    </div>
  );
}

export { Comment };
