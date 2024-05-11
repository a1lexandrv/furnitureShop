import { makeAutoObservable } from 'mobx';
import { items } from '../../../app/api/items-data';

class CatalogStore {
    catalogItems = [...items];

    constructor() {
        makeAutoObservable(this);
    }

    categoryFilter(param) {
        if (param === 'all') {
            this.catalogItems = [...items];
        } else {
            this.catalogItems = items.filter((item) => item.category === param);
        }
    }
}

export default new CatalogStore();
