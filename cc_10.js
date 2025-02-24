//Initial Commit
//Task 1
class Product {
    constructor(name, id, price, stock) {
        this.name = name; //Product name
        this.id = id;     //Product ID
        this.price = price; //Product price
        this.stock = stock; //Product stock level
    }
    //Formatted product details
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
    //Update stock when an order is placed
    updateStock(quantity) {
        this.stock -= quantity; //Decrease the stock based on the quantity ordered
    }
}
//Test cases
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); //Log In Console
//Update stock 
prod1.updateStock(3);
console.log(prod1.getDetails());

//Task 2
class Product1 {
    constructor(name, id, price, stock) {
        this.name = name; //Product name
        this.id = id;     //Product ID
        this.price = price; //Product price
        this.stock = stock; //Product stock level
    }

    //Method to get formatted product details
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
    //Update stock when an order is placed
    updateStock(quantity) {
        this.stock -= quantity; //Decrease the stock based on the quantity ordered
    }
}
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId; //Order ID
        this.product = product; //Product ordered 
        this.quantity = quantity; //Quantity ordered
        //Reduce the stock of the product
        this.product.updateStock(quantity);
    }
    //Formating
    getOrderDetails() {
        const totalPrice = this.product.price * this.quantity;
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${totalPrice}`;
    }
}
const prod2 = new Product("Laptop", 101, 1200, 10); //Product
console.log(prod2.getDetails()); 
//Test order
const order1 = new Order(501, prod2, 2);
console.log(order1.getOrderDetails()); 
console.log(prod2.getDetails()); 

//Task 3

class Product3 {
    constructor(name, id, price, stock) {
        this.name = name;  //Product name
        this.id = id;      //Product ID
        this.price = price; //Product price
        this.stock = stock; //Product stock level
    }
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
    //Update stock when an order is placed
    updateStock(quantity) {
        this.stock -= quantity; //Decrease the stock based on the quantity ordered
    }
}
class Inventory {
    constructor() {
        this.products = [];  //Array 
    }
    //Add a product to the inventory
    addProduct(product) {
        this.products.push(product); //Add a new product to the products array
    }
    //List all product details in the inventory
    listProducts() {
        this.products.forEach(product => console.log(product.getDetails())); //Logs details of all products
    }
}
// Test case
const prod4 = new Product("Laptop", 101, 1200, 10); //Create a product
const prod3 = new Product("Smartphone", 102, 800, 15); //New product
const inventory = new Inventory(); //Create an inventory instance
inventory.addProduct(prod4);  //Add product 4 to the inventory
inventory.addProduct(prod3);  //Add product 3 to the inventory
inventory.listProducts(); //List all products in the inventory