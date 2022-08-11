import app from "./app.js";

// TODO: setup db

let port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port} 🚀`);
});
