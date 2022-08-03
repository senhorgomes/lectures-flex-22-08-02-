//Asynchronous? setTimeout?
//A-> 5 seconds
//B-> 10 minutes
//C-> 1 minute

//Synchronous
//A->B->C

console.log("First")
setTimeout(()=> console.log("Second"), 5000)
console.log("Third")
setTimeout(()=> console.log("Fourth"), 3000)
console.log("Fifth")
//First, Second, Third, Fourth, Fifth
//First, Third, Fifth, Second, Fourth