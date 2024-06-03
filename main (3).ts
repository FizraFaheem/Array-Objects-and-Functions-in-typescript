interface Product {
    name : string;
    model: string;
    cost:number;
    quantity:number;
}
const inventory: Product[] = [];
const product1: Product = {
    name: "Laptop",
    model: "XYZ123",
    cost: 200,
    quantity: 5
};
const product2: Product = {
    name: "Smartphone",
    model: "ABC098",
    cost: 10000,
    quantity: 10
};
const product3: Product = {
    name: "Headphones",
    model: "MEX657",
    cost: 9900,
    quantity: 50
};
inventory.push(product1,product2,product3);
console.log("Quantity of the third product:", inventory[2].quantity);
const product4: Product = {
    name: "Tablet",
    model: "GUP309",
    cost: 700,
    quantity: 100};
inventory.push(product4);
console.log("Updated inventory:", inventory);
