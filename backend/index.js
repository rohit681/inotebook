const connectToMongo = require("./db");
const express = require("express");

connectToMongo();
const app = express();
const port = 5000;

//middle ware
app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/notes"));

app.listen(port, () => {
  console.log(`App is lisitening at http://localhost:${port}`);
});
