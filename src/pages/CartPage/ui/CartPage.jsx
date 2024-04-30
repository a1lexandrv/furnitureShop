import styles from "./CartPage.module.scss";

import store from "../model/store";
import { observer } from "mobx-react-lite";
import { Total } from "../../../entities/Total";
import { EmptyPage } from "../../../entities/EmptyPage/ui/EmptyPage";
import { CartItemsList } from "../../../widgets/CartItemsList";

const CartPage = observer(() => {
  return store.cartItems.length ? (
    <div className={styles.page}>
      <h2 className={styles.title}>Корзина товаров</h2>
      <div className={styles.container}>
        <CartItemsList />
        <Total />
      </div>
    </div>
  ) : (
    <div className={styles.page}>
      <EmptyPage
        title="Корзина пустая"
        url="/catalog"
        btnText="Посмотреть товары"
      />
    </div>
  );
});

export { CartPage };
