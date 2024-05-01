import styles from "./ProductPage.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import store from "../../../pages/CartPage/model/store";
import { items } from "../../../app/api/items-data";
import { EmptyContainer } from "../../../entities/EmptyContainer";
import { AddToFavourite } from "../../../features/AddToFavourite";
import { observer } from "mobx-react-lite";
import { MainButton } from "../../../shared/ui/MainButton";

const ProductPage = observer(() => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const item = items.filter((item) => item.id == id);

    setItem(item);
  }, [id]);

  return item.length ? (
    <div className={styles.page}>
      <img
        className={styles.image}
        src={`/images/items-pics/${item[0].img}`}
        alt={item[0].title}
      />
      <div className={styles.infoContainer}>
        <h3>{item[0].category}</h3>
        <div className={styles.titleContainer}>
          <h1>{item[0].title}</h1>
          <AddToFavourite item={item[0]} />
        </div>
        <p>{item[0].desc}</p>
        <h2>{item[0].price} $</h2>
        <MainButton
          text={"В корзину"}
          type="button"
          onClick={() => store.addToCart(item[0])}
        />
      </div>
    </div>
  ) : (
    <EmptyContainer
      title="Товар распродан"
      url="/catalog"
      btnText="Посмотреть другие товары"
    />
  );
});

export { ProductPage };
