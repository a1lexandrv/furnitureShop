import styles from "./FavouritesList.module.scss";
import { observer } from "mobx-react-lite";

import store from "../model/store";
import { ProductCard } from "../../../entities/ProductCard";
import { EmptyContainer } from "../../../entities/EmptyContainer";

const FavouritesList = observer(() => {
  return (
    <div className={styles.container}>
      <h2>Избранное</h2>
      {store.favouritesItems.length ? (
        <div className={styles.favouriteItems}>
          {store.favouritesItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyContainer}>
          <EmptyContainer
            title="Добавьте товар в избранное"
            url="/catalog"
            btnText=" Дообавить товар"
          />
        </div>
      )}
    </div>
  );
});

export { FavouritesList };
