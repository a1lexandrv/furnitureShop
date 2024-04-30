import { makeAutoObservable } from "mobx";

class FavouritesStore {
  favouritesItems = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToFavourite(item) {
    if (this.favouritesItems.some((product) => product.id === item.id)) {
      return;
    } else {
      this.favouritesItems.push(item);
    }
  }

  removeFromFavourite(id) {
    this.favouritesItems = this.favouritesItems.filter(
      (item) => item.id !== id
    );
  }
}

export default new FavouritesStore();
