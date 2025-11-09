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
        bookReviewTime : bookReviewTime,
        bookOfTheMonth : bookOfTheMonth,
        reviews : reviews
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


const bookOfTheMonth = {
    title : "The Forty Rules of Love",
    author : "Elif Shafak",
    published : 2009,
    genre : "Historical Fiction",
    description: "Elif Shafak's novel weaves together two parallel stories: the modern-day life of Ella Rubenstein, an unhappy housewife and mother who is transformed after reading a manuscript, and the historical 13th-century tale within that manuscript. This embedded narrative details the life-altering spiritual bond between the renowned poet Rumi and the enigmatic wandering dervish, Shams of Tabriz, whose philosophy is distilled into forty powerful rules of love."
}

const reviews = {
    review1 : "This novel masterfully interweaves Ella's modern-day marital discontent with the 13th-century spiritual awakening of the poet Rumi, guided by the enigmatic dervish Shams of Tabriz. It's not just historical fiction; it's a profound, layered examination of what it means to truly seek and embrace unconditional love, making it a life-altering and deeply affecting read.",
    review2 : "Prepare to have your perspective fundamentally shifted by the legendary Shams of Tabriz. His forty rules are a challenging, exhilarating philosophy on life, faith, and the nature of God, and the book's sheer passion for Rumi’s radical transformation is palpable. This is a truly mesmerizing and deeply emotional journey that stays with you long after the final page.",
    review3 : "Shafak expertly utilizes a dual narrative structure, alternating between a contemporary reader in America and the dramatic, historical lives of Rumi and Shams in 13th-century Turkey. While the modern story provides an accessible entry point, the true power lies in the ancient tale of the revolutionary forty rules."
}