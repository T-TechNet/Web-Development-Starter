function orderMealWith(drink){
    if(drink === undefined){
        drink = 'no drink';
    }
    console.log("Meal with " + drink);
}

orderMealWith("Cola");
orderMealWith();