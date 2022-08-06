var shopingCart = {
    mobile: 1, 
    computer: 2,
    cover: 4,
    sunglass: 5,
    charger: 2,
    burger: 5
}
// console.log(shopingCart);
var properties = Object.keys(shopingCart);
var propertyValues = Object.values(shopingCart);
// console.log(properties);
// console.log(propertyValues);

// var propertyName = "burger";
var propertyName = "mobile";
var propertyValue = shopingCart[propertyName];
// console.log(propertyValue);

// console.log(shopingCart.cover);

var burgerValue = shopingCart.burger;
// console.log(burgerValue);

var computerValue = shopingCart["computer"];
// console.log(computerValue);

console.log(shopingCart);

shopingCart.burger = 10;
shopingCart["charger"] = 5;
shopingCart[propertyName] = 10;
console.log(shopingCart);