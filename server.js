const { spawn } = require("child_process");
const express = require("express");
const app = express();

app.use(express.json());

app.post("/predict", (req, res) => {
  const input = req.body; // e.g. { "number": 5 }

  const py = spawn("python", ["ml_model.py"]);

  let data = "";
  py.stdout.on("data", (chunk) => {
    data += chunk.toString();
  });

  py.on("close", () => {
    res.json(JSON.parse(data));
  });

  py.stdin.write(JSON.stringify(input));
  py.stdin.end();
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
