import express from "express";
import bodyParser from "body-parser";


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/add", (req, res) => {
    res.render("addBlog.ejs");
})

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/submit", (req, res) => {
    let postHead = req.body['NewTitle'];
    let postCont = req.body['NewContent'];
    console.log(req.body['NewTitle']);
    let blogLen = Object.keys(newCon).length + 1
    newCon[blogLen] = postCont
    newHead[blogLen] = postHead
    res.redirect('blog');
})

app.get("/blogs/:id", (req, res) => {
    console.log("Logs..",req.params)
    const id = req.params.id;
    console.log("Log.......",id)
    const SelectedTitle = newHead[id]
    
    // console.log(newHead[id])
    const SelectedCon = newCon[id]
    // console.log(SelectedCon1)
    res.render("BlogDetails.ejs",{SelectedTitle,SelectedCon})
})

app.get("/blog", (req, res) => {
    // var fiftyHead = newCon[0].substring(0,50)
    // let shortCon =[];
    // for(var i=0;i<newCon.length;i++){
    //     console.log("Here..."+i);
    //     shortCon.push(fiftyCon(newCon[i]));
    // }
    // console.log("Heere " + fiftyHead);
    let Blog = newCon
    let BlogTitle = newHead
    res.render("blogview.ejs", { Blog, BlogTitle })
})

app.listen(3000, () => {
    console.log("Server is Running in port 3000")
})

// let newCon = ["In the annals of technological history, few companies have made as profound an impact as Apple Inc. From its humble beginnings in a California garage to its status as one of the world’s most valuable and influential tech giants, Apple’s rise is a story of innovation, design excellence, and unwavering determination. In this blog, we’ll trace the remarkable journey of Apple, examining key milestones, visionary leaders, and the products that forever changed the way we live, work, and connect.The Genesis: A Garage in Cupertino Apple’s origin story is a legendary tale in the tech world. It all began in the garage of Steve Jobs’ parents’ home in Cupertino, California, in 1976. Steve Jobs, Steve Wozniak, and Ronald Wayne founded the company, initially named Apple Computer, Inc. Their mission was to bring personal computing to the masses.In 1977, Apple introduced its first product, the Apple II. It was a game-changer, featuring color graphics and a keyboard — a far cry from the monochrome text-based computers of the era. The Apple II quickly became a success in homes and schools, paving the way for the company’s future innovations.","two based computers of the era. The Apple II quickly  initially "];
// let newHead = ["The Rise of Apple: A Journey from Garage to Global Domination","Heading2"]

let newCon = new Object();
let newHead = new Object();

newCon[1] = "In the annals of technological history, few companies have made as profound an impact as Apple Inc. From its humble beginnings in a California garage to its status as one of the world’s most valuable and influential tech giants, Apple’s rise is a story of innovation, design excellence, and unwavering determination. In this blog, we’ll trace the remarkable journey of Apple, examining key milestones, visionary leaders, and the products that forever changed the way we live, work, and connect.The Genesis: A Garage in Cupertino Apple’s origin story is a legendary tale in the tech world. It all began in the garage of Steve Jobs’ parents’ home in Cupertino, California, in 1976. Steve Jobs, Steve Wozniak, and Ronald Wayne founded the company, initially named Apple Computer, Inc. Their mission was to bring personal computing to the masses.In 1977, Apple introduced its first product, the Apple II. It was a game-changer, featuring color graphics and a keyboard — a far cry from the monochrome text-based computers of the era. The Apple II quickly became a success in homes and schools, paving the way for the company’s future innovations.", "two based computers of the era. The Apple II quickly  initially "

newHead[1] = "The Rise of Apple: A Journey from Garage to Global Domination"

function fiftyCon(lst) {
    return lst.substring(0, 100);
}

