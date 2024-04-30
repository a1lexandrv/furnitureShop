import React from "react";
import styles from "./CatalogItemsList.module.scss";
import { ProductCard } from "../../../entities/ProductCard";

import { items } from "../../../app/api/items-data";

function CatalogItemsList() {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export { CatalogItemsList };
