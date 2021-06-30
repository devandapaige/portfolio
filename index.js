const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}

//insert the routes for projects (just need a GET)
app.get("/projects", async (req, res) => {
  try {
    const allProjects = await pool.query("SELECT * FROM projects");
    res.json(allProjects.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`server has started on http://localhost:${PORT}`);
});
