import styles from "./BigProductCard.module.scss";
import { observer } from "mobx-react-lite";

import store from "../../../pages/CartPage/model/store";
import { MainButton } from "../../../shared/ui/MainButton";
import { CustomLink } from "../../../shared/ui/CustomLink";
import { AddToFavourite } from "../../../features/AddToFavourite";

const BigProductCard = observer(({ item }) => {
  const { id, title, price } = item;

  return (
    <div className={styles.card}>
      <div className={styles.titleContainer}>
        <CustomLink url={`/catalog/${id}`}>
          <h2>{title}</h2>
        </CustomLink>
        <AddToFavourite item={item} />
      </div>
      <h2 className={styles.price}>{price} $</h2>
      <MainButton text="Удалить" onClick={() => store.removeFromCart(id)} />
    </div>
  );
});

export { BigProductCard };
