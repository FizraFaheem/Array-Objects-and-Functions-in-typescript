var inventory = [];
var product1 = {
    name: "Laptop",
    model: "XYZ123",
    cost: 200,
    quantity: 5
};
var product2 = {
    name: "Smartphone",
    model: "ABC098",
    cost: 10000,
    quantity: 10
};
var product3 = {
    name: "Headphones",
    model: "MEX657",
    cost: 9900,
    quantity: 50
};
inventory.push(product1, product2, product3);
console.log("Quantity of the third product:", inventory[2].quantity);
var product4 = {
    name: "Tablet",
    model: "GUP309",
    cost: 700,
    quantity: 100
};
inventory.push(product4);
console.log("Updated inventory:", inventory);
