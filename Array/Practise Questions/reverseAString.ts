// Reverse a string
function reverseString( myStr: String): string{
    let myStrArr = [...myStr]
    let reverseStr: string[] = [];
    for (let i = myStr.length-1; i > 0; i--){
        console.log(i)
        console.log(myStrArr[i])
        reverseStr.push(myStrArr[i])
    }
    return reverseStr.join("");
}

console.log(reverseString("Hi I am Prakhar"))
