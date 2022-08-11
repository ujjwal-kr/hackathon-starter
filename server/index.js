import express from 'express';
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is Running");
});
