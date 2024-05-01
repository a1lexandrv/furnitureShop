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

            const data = JSON.stringify(this.cartItems);
            localStorage.setItem('cart', data);
        }
    }

    removeFromCart(id) {
        this.cartItems = this.cartItems.filter((item) => item.id !== id);

        const data = JSON.stringify(this.cartItems);
        localStorage.setItem('cart', data);

        if (!this.cartItems.length) {
            localStorage.removeItem('cart');
        }
    }
}

export default new CartStore();
