const findMode = (arr) => {
    const countNumber = {};
    let i = 0;
    for (let item of arr) {
        if (Object.keys(countNumber).includes(item.toString())) {
            countNumber[item.toString()].count += 1
        } else {
            countNumber[item.toString()] = {'number':item,'count':1, 'order':i}
            i += 1
        }
    }
    
    let mode = undefined;
    let maxCount = Infinity*-1;
    let lowestOrder = Infinity;
    for (let number in countNumber) {
        if (countNumber[number].count > maxCount || (countNumber[number].count === maxCount && countNumber[number].order < lowestOrder)) {
            mode = countNumber[number].number
            maxCount = countNumber[number].count
            lowestOrder = countNumber[number].order
        }
    }
    return mode
 };
 
 let result1 = findMode([1, 2, 2, 3, 3, 3, 4]);
 console.log(result1); // 3
 
 let result2 = findMode([7, 7, 1, 1, 7]);
 console.log(result2); // 7
 
 let result3 = findMode([7, 7, 1, 1, 7, 1]);
 console.log(result3); // 7