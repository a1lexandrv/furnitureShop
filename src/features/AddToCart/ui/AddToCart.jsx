import { observer } from "mobx-react-lite";

import cartStore from "../../../shared/model/cartStore";
import { MainButton } from "../../../shared/ui/MainButton";
import { useState } from "react";
import { CustomLink } from "../../../shared/ui/CustomLink";

const AddToCart = observer(({ item }) => {
  const [isInCart, setIsIncart] = useState(false);

  function HandleClickCart() {
    cartStore.addToCart(item);
    setIsIncart(true);
  }
  return (
    <>
      {!isInCart ? (
        <MainButton text="В корзину" onClick={() => HandleClickCart()} />
      ) : (
        <CustomLink url={"/catalog"}>
          <MainButton text="Перейти в корзину" />
        </CustomLink>
      )}
    </>
  );
});

export { AddToCart };
