const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('assets'))

const port = 4000;

app.use("/", require("./routes/index"));
app.use("/favorite", require("./routes/favorite"));
app.use("/login", require("./routes/login"));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);