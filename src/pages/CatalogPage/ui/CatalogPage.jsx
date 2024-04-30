import React from "react";
import styles from "./CatalogPage.module.scss";
import { CatalogItemsList } from "../../../widgets/CatalogItemsList/ui/CatalogItemsList";

function CatalogPage() {
  return (
    <div className={styles.page}>
      <CatalogItemsList />
    </div>
  );
}

export { CatalogPage };
