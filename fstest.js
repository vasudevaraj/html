//import fs module
const fs=require("fs")

//read data from out
function readingDataOfFile(){
fs.readFile("./data.txt",(err,data)=>{
    if(err){
        console.log("error is",err)
    }
    else{
        console.log("data is",data.toString())
    }
})
}
//console.log("hiii")

function writeDataToFile(newData){

    fs.writeFile("./data.txt",newData,(err)=>{

        if(err){
            console.log("err in writing",err)
        }
        else{
            console.log("write is success")
        }
    })
}


writeDataToFile("good morning to all")
readingDataOfFile()