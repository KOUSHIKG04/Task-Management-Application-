// Import required modules
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// Initialize Express app and database connection
const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "PERMALIST", 
  password: "admin@123",
  port: 5432,
});
db.connect();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM items;");
    const items = result.rows;

    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).send("Error fetching tasks");
  }
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;

  try {
    // Perform input validation
    if (!item) {
      return res.status(400)
        .send(`<p style="font-family: 'Indie Flower', cursive; font-weight: 300px ; font-size: 20px">Please enter the "TASK"</p>
        <h3><a href="/" style="font-family: 'Indie Flower', cursive;">Go back</a></h3>`);
    }

    await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
    res.redirect("/");
  } catch (err) {
    console.error("Error adding task:", err);
    res.status(500).send("Error adding task");
  }
});

app.post("/edit", async (req, res) => {
  const item = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;

  try {
    // Perform input validation
    if (!item || !id) {
      return res.status(400)
        .send(`<h1 style="font-family: 'Indie Flower', cursive; font-weight: 300px ; font-size: 20px">Shouldn't leave empty while editing the "TASK"</h1>
      <h3><a href="/" style="font-family: 'Indie Flower', cursive; ">Go back</a></h3>`);
    }

    await db.query("UPDATE items SET title = ($1) WHERE id = $2", [item, id]);
    res.redirect("/");
  } catch (err) {
    console.error("Error updating task:", err);
    res.status(500).send("Error updating task");
  }
});

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;

  try {
    // Perform input validation
    if (!id) {
      return res.status(400).send("<h1>Task ID is required.</h1>");
    }

    await db.query("DELETE FROM items WHERE id = $1", [id]);
    res.redirect("/");
  } catch (err) {
    console.error("Error deleting task:", err);
    res.status(500).send("Error deleting task");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
