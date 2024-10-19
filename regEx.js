const text = "Hello WORLD! Today is the 5th of June 2024 21th century. I've 15 apples, 123 oranges, and 4567 grapes.";

// 1. 
function numberLength2Or3(text) {
    const regex = /\b\d{2,3}\b/g;
    return text.match(regex) || [];
}

// 2. 
function startsWithEven(text) {
    const regex = /\b[02468]\d*\b/g;
    return text.match(regex) || [];
}

// 3. 
function startsWithNumber(text) {
    const regex = /\b\d+\w*[a-zA-Z]+\b/g;
    return text.match(regex) || [];
}

// 4. 
function capitalized(text) {
    const regex = /\b[A-Z]+\b/g;
    return text.match(regex) || [];
}

// 5. 
function capitalizedLengthMin3(text) {
    const regex = /\b[A-Z][a-zA-Z]{2,}\b/g;
    return text.match(regex) || [];
}

// 6. 
function startsWithVowel(text) {
    const regex = /\b[AEIOUaeiou][a-zA-Z]*\b/g;
    return text.match(regex) || [];
}

console.log("numberLength2Or3:", numberLength2Or3(text)); 
console.log("startsWithEven:", startsWithEven(text)); 
console.log("startsWithNumber:", startsWithNumber(text)); 
console.log("capitalized:", capitalized(text)); 
console.log("capitalizedLengthMin3:", capitalizedLengthMin3(text)); 
console.log("startsWithVowel:", startsWithVowel(text)); 
