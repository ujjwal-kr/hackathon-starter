import app from "./app.js";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to DB");
  })
  .catch((e) => {
    console.log("Error connecting to DB", e);
  });

let port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port} 🚀`);
});
