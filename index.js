import express from "express";
import bodyParser from "body-parser";

let newCon = ["one","two"];
let newHead = ["Heading1","Heading2"]

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/submit",(req,res)=>{
    let postHead = req.body['NewTitle'];
    let postCont = req.body['NewContent'];
    console.log(req.body['NewTitle']);
    newCon.push(postCont)
    newHead.push(postHead)
    res.render("index.ejs",{
        Blog:newCon,BlogTitle:newHead
    });
})

app.listen(3000,()=>{
    console.log("Server is Running in port 3000")
})
