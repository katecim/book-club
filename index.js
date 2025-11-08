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

    res.render("index.ejs", {
        bookReview : bookReview, 
        bookReviewTime : bookReviewTime
    });

});

// create a post
app.post("/create", (req, res) => {

    bookReview.unshift(req.body.bookReview);
    bookReviewTime.unshift(new Date().toDateString());

    res.redirect("/");

});

// update a post
app.post("/update", (req, res) => {

    const index = req.body.postIndex;
    const reviewText = bookReview[index];

    res.render("update.ejs", {
        postIndex: index, 
        postText: reviewText
    });

});

// save updated post
app.post("/save", (req, res) => {
    
    const index = req.body.postIndex;
    const updatedText = req.body.bookReview;

    bookReview[index] = updatedText;

    res.redirect("/");

});

// delete a post
app.post("/delete", (req, res) => {

    const index = req.body.postIndex;

    if (index > -1) {
        bookReview.splice(index, 1);
        bookReviewTime.splice(index, 1);
    }

    res.redirect("/");
});


app.listen(3000, () =>{
    console.log(`The servers is running on port ${port}`);
});