const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.post("/", (req, res) => {
  const name = req.body.name;
  // res.sendFile(`${__dirname}/public/post-index.html`);
  res.send(`君の名は ${name}`);
  console.log("/ へアクセスがありました");
});


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

