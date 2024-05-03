import styles from "./Comments.module.scss";

import { Comment } from "../../../shared/ui/Comment";

function Comments({ comments }) {
  return (
    <div className={styles.comments}>
      {comments.map((comment) => (
        <Comment com={comment} key={comment.id} />
      ))}
    </div>
  );
}

export { Comments };
