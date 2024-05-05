import { makeAutoObservable } from 'mobx';

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

            const data = JSON.stringify(this.favouritesItems);
            localStorage.setItem('favourite', data);
        }
    }

    removeFromFavourite(id) {
        this.favouritesItems = this.favouritesItems.filter(
            (item) => item.id !== id
        );

        const data = JSON.stringify(this.favouritesItems);
        localStorage.setItem('favourite', data);

        if (!this.favouritesItems.length) {
            localStorage.removeItem('favourite');
        }
    }
}

export default new FavouritesStore();
