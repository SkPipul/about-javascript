var shopingCart = {
    mobile: 1, 
    computer: 2,
    cover: 4,
    sunglass: 5,
    charger: 2,
    burger: 5
}
var properties = Object.keys(shopingCart);
console.log(properties);
var propertyValues = Object.values(shopingCart);
console.log(propertyValues);

for(var i = 0; i < properties.length; i++){
    var propertyName = properties[i];
    var propertyValue = shopingCart[propertyName];
    // console.log(propertyName, propertyValue);
}
for(var propertyName in shopingCart){
    const value = shopingCart[propertyName];
    console.log(propertyName, value);
}