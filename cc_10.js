//Initial Commit
//Task 1
class Product {
    constructor(name, id, price, stock) {
        this.name = name; // Product name
        this.id = id;     // Product ID
        this.price = price; // Product price
        this.stock = stock; // Product stock level
    }
    // Formatted product details
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
    //Update stock when an order is placed
    updateStock(quantity) {
        this.stock -= quantity; // Decrease the stock based on the quantity ordered
    }
}
//Test cases
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); //Log In Console
// Update stock 
prod1.updateStock(3);
console.log(prod1.getDetails());
