import { makeAutoObservable } from 'mobx';

class CartStore {
    cartItems = [];
    cartCounter = 0;

    constructor() {
        makeAutoObservable(this);
    }

    addToCart(item) {
        if (this.cartItems.some((product) => product.id === item.id)) {
            return;
        } else {
            this.cartItems.push(item);
            this.cartCounter = this.cartItems.length;

            const data = JSON.stringify(this.cartItems);
            localStorage.setItem('cart', data);
        }
    }

    removeFromCart(id) {
        this.cartItems = this.cartItems.filter((item) => item.id !== id);
        this.cartCounter = this.cartItems.length;

        const data = JSON.stringify(this.cartItems);
        localStorage.setItem('cart', data);

        if (!this.cartItems.length) {
            localStorage.removeItem('cart');
        }
    }
}

export default new CartStore();
