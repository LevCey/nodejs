const express = require("express");
const app = express();

app.set("view engine", "ejs");

const data = [
    {id:1, name:"iphone14", price:3000, isActive:true},
    {id:2, name:"iphone15", price:4000, isActive:false},
    {id:3, name:"iphone16", price:5000, isActive:true},
];

// routes
app.use("/products/:id", function(req, res){
    const urun = data.find(u => u.id == req.params.id);
    res.render("product-details", urun);
});

app.use("/products", function(req, res){
    res.render("products", {
        urunler: data,
    });
});

app.use("/", function(req, res){
    res.render("index");
});



app.listen(3000, () => {
    console.log("listening port 3000");
})