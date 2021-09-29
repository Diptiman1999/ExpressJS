const express = require("express");
const path = require("path");

const app = express();
const { logger } = require("./middleware/logger");

// Init Middleware
// app.use(logger);

// express.static used to make the folder static
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

// app.get("/", (req, res) => {
//   //   res.send("<h1>Hello Diptiman</h1>");
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Start on port ${PORT}`));
