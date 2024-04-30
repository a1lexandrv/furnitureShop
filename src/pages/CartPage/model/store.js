import { makeAutoObservable } from 'mobx';

class CartStore {
    cartItems = [];

    constructor() {
        makeAutoObservable(this);
    }

    addToCart(item) {
        if (this.cartItems.some((product) => product.id === item.id)) {
            return;
        } else {
            this.cartItems.push(item);
        }
    }

    removeFromCart(id) {
        this.cartItems = this.cartItems.filter((item) => item.id !== id);
    }
}

export default new CartStore();
