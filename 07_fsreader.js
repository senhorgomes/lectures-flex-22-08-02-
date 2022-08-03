//fs? Filesystem?
//A node module that allows us to interact with the file system
const fs = require('fs')
//Read all three text files, and add them up
//How can I add these files together?
//run three readfiles? and add a console.log at the end?
//Can we add some sort of delay to the console.log? Maybe a setTimeout?
let totalSum = 0;
fs.readFile('./data1.txt', 'utf8', (error1, data1)=>{
    if(error1){
        console.log(error1)
    } else {
        // console.log(data)
        totalSum += Number(data1);
        fs.readFile('./data2.txt', 'utf8', (error2, data2)=>{
            if(error2){
                console.log(error2)
            } else {
                // console.log(data)
                totalSum += Number(data2);
                fs.readFile('./data3.txt', 'utf8', (error3, data3)=>{
                    if(error3){
                        console.log(error3)
                    } else {
                        // console.log(data)
                        //converting data to a number
                        totalSum += Number(data3);
                        console.log(totalSum)
                    }
                })
            }
        })
    }
})


// setTimeout(()=>console.log(totalSum),3000)