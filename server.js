import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setting up enviroment variables from .env file (which heroku will automatically set)
dotenv.config({ path: path.join(__dirname, ".env") });
app.get("/env", (req, res) => {
    return res.json({ API_URL: process.env.API_URL });
});

// Setting up the static folder for the frontend
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static("public"));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// app.use(requireHTTPS); // Optional, if you want to force https on heroku

app.listen(process.env.PORT ?? 3000, () => {
    console.log(`server started on port ${process.env.PORT ?? 3000}`);
});

// Optional, if you want to force https on heroku
// function requireHTTPS(req, res, next) {
//     if (!req.secure && req.get("x-forwarded-proto") !== "https" && process.env.REACT_APP_ENV !== "development") {
//         return res.redirect("https://" + req.get("host") + req.url);
//     }
//     next();
// }