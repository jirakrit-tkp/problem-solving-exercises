const countVowels = (text) => {
    let count = 0;
    for (let alp of text) {
        if ("aeiou".split("").includes(alp.toLowerCase())) {
            count += 1
        }
    }
    return count
}

let result1 = countVowels("hello");
console.log(result1); // 2

let result2 = countVowels("TECHUP");
console.log(result2); // 2