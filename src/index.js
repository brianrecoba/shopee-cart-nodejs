import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";

 
const myCart = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("Hotweels Ferrari", "20.99", 1);
const item2 = await createItem("Hotweels lamborghini", "39.99", 3);

await cartService.addItem(myCart, item1),
await cartService.addItem(myCart, item2),

await cartService.removeItem(myCart, item1);

await cartService.displayCart(myCart)

//await cartService.deleteItem(myCart, item1.name);


await cartService.calculateTotal(myCart);

