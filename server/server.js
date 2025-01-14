const app = require("./app");

const port = process.env.PORT || 3000;



//testing endpoint

app.get("/", (req, res) => {
    res.send("Test endpoint");
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

