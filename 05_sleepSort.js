const numbers = [900, 310, 1006, 0, 2, 3630, 1, 52, 603, 59, 81, -500, -50];

//Loop through this array.
//Console log each number, in order

for (const number of numbers) {
    setTimeout(()=> console.log(number), number)
}
