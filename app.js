const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { environments } = require("./src/config/constants.json");
const port = process.env.PORT || 5000;

/* import all routes */
const findocs = require("./src/routes/findocs");
const users = require("./src/routes/users");
const userCompany = require("./src/routes/userCompany");
const companies = require("./src/routes/companies");

/* middlewares */
/* Serve static files from the React app */
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());
/* security package */
app.use(helmet());

if (process.env.NODE_ENV === environments.DEVELOPMENT) {
  app.use(cors());
  app.use(morgan("tiny"));
}

app.use("/api/findocs", findocs);
app.use("/api/users", users);
app.use("/api/userCompany", userCompany);
app.use("/api/companies", companies);

/* routes */

/* gets you to react generated index file - root of your application */
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

/* startup */
app.listen(port, undefined, () =>
  console.log(`server is running on port: ${port}`)
);
