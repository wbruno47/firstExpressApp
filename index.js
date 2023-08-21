const express = require("express");
const app = express();
const port = 3000;

/* app.use((req, res) => {
    console.log("New request");
    res.send("Hello, we got the request and here is my response!");
})
 */
/* ROUTES */
// .get expects path

app.get('/', (req, res) => {
    res.send("This is the home page BRO!!");
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit<h1>`)
});

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing the ${postId} on the ${subreddit} subreddit<h1>`)
});

app.post('/cats', (req, res) => {

})

app.get('/cats', (req, res) => {
    console.log("Cat Request");
    res.send("MEOW");
})

app.get('/dogs', (req, res) => {
    console.log("Dog Request");
    res.send("BARK");
})

app.get('/search', (req, res) => {
    console.log(req.query);
    res.send("Search");
})

app.listen(port, () => {
    console.log("listening");
})