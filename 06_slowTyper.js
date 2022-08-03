//Create a function that goes through a string very slowly
const stringExample = "Hello World\n"
//Loop through this string, and console.log each letter
//Input being the string
//Output being each letter
//Letters need to appear horizontally, and we need some sort of delay
//For every letter in the string, we want to increment the delay by a certain amount
//H ->500
//e ->1000
//l ->1500
//l ->2000
//o ->2500
let delayInMs = 500;
const slowTyper = (string) => {
    for (const letter of string) {
        // console.log(letter)
        setTimeout(()=>process.stdout.write(letter), delayInMs)
        delayInMs += 500
    }
}
slowTyper(stringExample)
console.log("Hello!!!")
//setTimeout happens once after the delay
//setInterval repeats every delay
//HeHlHleHoH leHWHoleHrlHloeHdH
//lelHHWeHolHoleHHr elHHloleHWlH