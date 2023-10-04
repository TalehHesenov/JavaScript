let product1 = {
    car:"Chrysler",
    category:"Avtomobillər",
    price:"23 500"
}
let product2 = {
    car:"Chevrolet",
    category:"Avtomobillər",
    price:"13 300"
}
let product3 = {
    car:"Toyota Prius",
    category:"Avtomobillər",
    price:"6 543"
}
let product4 = {
    car:"BMW 318",
    category:"Avtomobillər",
    price:"4 500"
}
let product5 = {
    car:"Mercedes 190",
    category:"Avtomobillər",
    price:"5 600"
}
let product6 = {
    car:"BMW 319",
    category:"Avtomobillər",
    price:"6 700"
}

let products = [product1,product2,product3,product4,product5,product6];

let newProduct=[];

let pSearch = prompt("Search for a product");

productAdd(products);
productAll(newProduct);

function productAdd(products){
    products.forEach(function(product){

        if(product.car.toLowerCase().includes(pSearch.toLowerCase(),0))
             newProduct.push(product);
     });
}
function productAll(products){

    products.forEach(function(product){
        console.log("----------------------------------------------------");
        console.log("Car: "+product.car+"\r\n"+"Category: "+product.category+"\r\n"+"Price: "+product.price);
        console.log("----------------------------------------------------");

    });
}

