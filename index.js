const express = require("express");
const app = express();

app.set("view engine", "ejs");

// routes
app.use("/products/:id", function(req, res){
    res.render("urun-details");
});

app.use("/products", function(req, res){
    res.render("urunler");
});

app.use("/", function(req, res){
    res.render("index");
});



app.listen(3000, () => {
    console.log("listening port 3000");
})