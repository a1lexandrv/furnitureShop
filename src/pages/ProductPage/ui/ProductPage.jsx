import styles from "./ProductPage.module.scss";

import { SaveItemLocal } from "../../../features/SaveItemLocal";
import { FetchComments } from "../../../features/FetchComments/ui/FetchComments";
import { BigProductCard } from "../../../entities/BigProductCard/ui/BigProductCard";
import { Comments } from "../../../entities/Comments";
import { EmptyContainer } from "../../../entities/EmptyContainer";

function ProductPage() {
  const comments = FetchComments();
  const item = SaveItemLocal();

  if (item.length) {
    return (
      <div className={styles.page}>
        <BigProductCard item={item} />
        {comments.length ? <Comments comments={comments}></Comments> : null}
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
