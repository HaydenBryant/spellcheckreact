const express = require("express")
const app = express();
const uri = require("./passwords")
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
const MyMethods = require("./checkSpelling");
const checkSpelling = MyMethods.method;


app.use(cors());
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

let dictionaryData;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if (err) {
        throw err
    }
    const collection = client.db("data").collection("data");

    // perform actions on the collection object
    dictionaryData = collection
})

app.get("/test", (req, res) => {
    res.send("EXPRESS SERVER IS RUNNING ON PORT 3000, route /")
})

app.post("/checked", (req, res) => {
    console.log(req.body.userInput)
    checkSpelling(req.body.userInput, dictionaryData)
    .then((result) => {
        console.log(result);
        // res.send(outputSpellCheck(result, req.body.userInput));
    });
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.log("Server is running on port: " + PORT)
})