function reverseString(text) {
    let reverseText = "";
    for (let i = text.length-1; i >= 0; i--) {
        reverseText += text[i]
    }
    return reverseText
 };
 
 let result1 = reverseString("hello");
 console.log(result1); // "olleh"
 
 let result2 = reverseString("TechUp");
 console.log(result2); // "pUhceT"