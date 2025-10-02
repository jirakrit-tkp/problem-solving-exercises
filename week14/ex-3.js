function findMax(nums) {
    let maxNumber = nums[0];
    for (let number of nums.slice(1)) {
        if (number > maxNumber) {
            maxNumber = number
        }
    }
    return maxNumber
 };
 
 let result1 = findMax([1, 9, 3, 5]);
 console.log(result1); // 9
 
 let result2 = findMax([-10, -5, -2]);
 console.log(result2); // -2