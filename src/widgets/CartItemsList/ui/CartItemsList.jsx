import styles from "./CartItemsList.module.scss";

import { observer } from "mobx-react-lite";
import store from "../../../pages/CartPage/model/store";
import { BigProductCard } from "../../../entities/BigProductCard";

const CartItemsList = observer(() => {
  return (
    <div className={styles.container}>
      {store.cartItems.map((item) => (
        <BigProductCard key={item.id} item={item} />
      ))}
    </div>
  );
});

export { CartItemsList };
