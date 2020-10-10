function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // // this is just JS error, but don't need if using TS
    // if (typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error ("incorrect silly panties")
    // }
    const result = n1 + n2;
   if (showResult) {
       console.log(phrase + result)
   } else {
    return result;
   }
   
}


const number1 = 5; // 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: "


add(number1, number2, printResult, resultPhrase);
