import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true })); 

app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("index.ejs" , {
    posts : posts
    });
});

app.get("/new", (req,res)=>{
    res.render("new.ejs");
});

app.post("/create", (req,res) => {
    const {title, content} = req.body;
    const posts = [];
    const newPost = {
    title: title,
    content: content
    };
    posts.push(newPost);
    console.log(posts);
    res.render("index.ejs",{posts});
});



app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}.`);
});