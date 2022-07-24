//EX.7
function upperCaseString(text) {
    if (text.length > 10) {
        return text.toUpperCase(); 
    }
    return text; 
}
console.log(upperCaseString('hello world')); 
console.log(upperCaseString('hello')); 