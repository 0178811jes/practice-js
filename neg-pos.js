let numbers = [45, 87, 96, 11, 63, -56, 71, 28];
//console.log(numbers);

//const partial = onlyPositive.slice(0, 5);
//console.log(partial);


function onlyPositive(num) {
    const partial = numbers.slice(0, 5);
    return partial;
}
const result = onlyPositive(numbers);
console.log(result);