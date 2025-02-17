const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");
dotenv.config({ path: "./.env" });
const DB = process.env.DATABASE_CONNECTION_STRING.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
// mongoose.connect(DB,);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => console.log(err.message));
app.listen(3000, () => {
  console.log("app running on port 3000");
});
