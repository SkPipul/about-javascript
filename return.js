function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 - number2;
    console.log("give me my money");
    // console.log(total);
    return 100;
    // return sum;
}
// add(55, 45);
var total = add(55, 45);
// console.log(total);

function sum(a, b, c, d, e){
        console.log(a, b, c, d, e);
        var sum = a + b + c + d + e ;
        console.log(sum);
        return sum;
    }
    // sum(11, 22, 33, 44, 55);

    function bringSingara(money){
        var singaraPrice = 6 ;
        var quantity = money / singaraPrice;
        return quantity;
    }
    var myTaka = 140;
    var singaras = bringSingara(myTaka);
    singaras.toFixed(1);
    console.log("ei nen vaia", singaras);
