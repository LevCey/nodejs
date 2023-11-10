const express = require("express");
const app = express();

app.use("/products/:id", function(req, res){
    res.send("product details " + req.params.id );
});

app.use("/products", function(req, res){
    res.send("products");
});

app.use("/", function(req, res){
    res.send("anasayfa");
});



app.listen(3000, () => {
    console.log("listening port 3000");
})