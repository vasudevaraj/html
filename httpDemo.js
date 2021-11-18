//import http module
const http=require("http")

//create server
const server=http.createServer((req,res)=>{
    if(req.method=="GET"){
        res.end("This response from GET req handler")
    }

    if(req.method=="POST"){
        res.end("This response from POST req handler")
    }

    if(req.method=="PUT"){
        res.end("This response from PUT req handler")
    }

    if(req.method=="DELETE"){
        res.end("This response from DELETE req handler")
    }
    

}) 



server.listen(3000,()=>{console.log("server listening on port 3000")});
