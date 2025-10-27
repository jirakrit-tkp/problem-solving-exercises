const sumEvenNumbers = (numbers) => {
    let sum = 0 ;
    for (let number of numbers) {
        if (number%2 === 0) {
            sum += number
        }
    }
    return sum
}

let result1 = sumEvenNumbers([1, 2, 3, 4]);
console.log(result1); // 6

let result2 = sumEvenNumbers([7, 11, 20, 8]);
console.log(result2); // 28