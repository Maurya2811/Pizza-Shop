
import Product from "../models/product.js";
import makeNetworkCall from "./api-client.js";

const productOperations = {
    products: [],// key-value
    search(pizzaId) {
        const product = this.products.find(currProduct => currProduct.id == pizzaId);
        console.log('Product found', product);
        product.isAddedInCart = true;
        console.log('Products are', this.products);
    },
    getProductsInCart() {

        const cartProducts = this.products.filter(curr => curr.isAddedInCart);
        const sum = cartProducts.reduce((acc, curr) => acc = acc + parseFloat(curr.price),0.0);
        console.log('Products added in cart', cartProducts, sum);
        return [cartProducts,sum];
    },
    async loadProducts() {
        const pizzas = await makeNetworkCall();
        const pizzaArray = pizzas['Vegetarian'];
        const productsArray = pizzaArray.map(pizza => {
            const currentPizza = new Product(pizza.id, pizza.name, pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url);
            return currentPizza;
        })
        console.log('Product Array', productsArray);
        this.products = productsArray;
        return productsArray;
    },
    sortProducts() {

    },
    searchProducts() {

    },


}
export default productOperations;