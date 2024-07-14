const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.get("/", (request, response) => {
    response.send("Success")
});
app.post("/contact", (request, response) => {
    console.log(request.body);
    response.status(200).send({status: "Success"});
});

app.listen(port);