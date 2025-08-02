const express = require("express");
const path = require("path");
const app = express();
const userRoute = require("./routes/userRoute");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../Frontend/public/views"));
app.use(express.static(path.join(__dirname, "../Frontend/public")));
app.use("/", userRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));