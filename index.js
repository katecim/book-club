import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const bookReview = [];
const bookReviewTime = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// home page
app.get("/", (req, res) => {
    res.render("index.ejs");
});

// create a post
app.post("/create", (req, res) => {

    bookReview.push(req.body.bookReview);
    bookReviewTime.push(new Date());
    console.log(bookReviewTime);

    res.render("index.ejs", { bookReview : bookReview, bookReviewTime : bookReviewTime });
});

// update a post
app.patch("/update", (req, res) => {
    res.render("index.ejs");
});

// delete a post
app.delete("/delete", (req, res) => {
    res.render("index.ejs");
});


app.listen(3000, () =>{
    console.log(`The servers is running on port ${port}`);
});