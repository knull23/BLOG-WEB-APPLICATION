import express from "express";
import { fileURLToPath } from 'url';
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");
// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Middleware for serving static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
    res.render("blog");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/faq", (req, res) => {
    res.render("faq");
});

app.get("/arts", (req, res) => {
    res.render("ARTS");
});

app.get("/commerce", (req, res) => {
    res.render("COMMERCE");
});

app.get("/pcm", (req, res) => {
    res.render("PCM");
});

app.get("/pcb", (req, res) => {
    res.render("PCB");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});