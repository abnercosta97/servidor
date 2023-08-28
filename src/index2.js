const express = require("express");
const app = express();
app.use(express.json());

const PORT = 3002;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/um", function (req, res) {
  res.send("Boa noite");
});

app.get("/soma/:a/:b", function (req, res) {
  const aa = parseFloat(req.params.a);
  const bb = parseFloat(req.params.b);
  res.send(aa + bb + "");
});

app.get("/sub", function (req, res) {
  const aa = parseFloat(req.body.a);
  const bb = parseFloat(req.body.b);
  res.send(aa - bb + "");
});

app.listen(PORT, function () {
  console.log(`Rodando ${PORT}`);
});
