//Functions
function anonFunction(){

}
const functionExpression = function(){

}
const arrowFunctions = () => {

}
//Callbacks?

const consoleLogsSomething = function(){
    console.log("Something!")
}
consoleLogsSomething()

//Higher order functions?
const higherOrderFunction = function(callback){
    console.log("First")
    callback()
}
higherOrderFunction(consoleLogsSomething)