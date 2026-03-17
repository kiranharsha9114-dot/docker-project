const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  host: "db",
  user: "postgres",
  password: "postgres",
  database: "mydb",
});

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.send(`DB Time: ${result.rows[0].now}`);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
