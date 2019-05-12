const express = require("express")
const app = express();

app.get("/test", (req, res) => {
    res.send(header, "<h1>Test is running</h1>")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server is running on port: " + PORT))