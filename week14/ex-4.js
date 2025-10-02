function isPalindrome(word) {
    if (reverseString(word) === word) {
        return true
    } else {
        return false
    }
 };

 function reverseString(text) {
    let reverseText = "";
    for (let i = text.length-1; i >= 0; i--) {
        reverseText += text[i]
    }
    return reverseText
 };
 
 let result1 = isPalindrome("madam");
 console.log(result1); // true
 
 let result2 = isPalindrome("hello");
 console.log(result2); // false
 