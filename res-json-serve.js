const express = require("express");
const app = express();
const port = 3000;

app.get("/", (erq, res) => {
  const data = {
    "message": "Hello world",
    "date": "2021-09-23"
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

