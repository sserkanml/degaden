import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("../public"));
app.use("/assets", express.static("../public/assets"));
app.use("/img", express.static("../public/img"));
app.use("theme-icon", express.static("../public/theme-icon"));

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile("index.html", { root: "../public/" });
});
app.get("/references", (req, res) => {
  res.statusCode = 200;
  res.sendFile("refs.html", { root: "../public/" });
});

app.get("/contact", (req, res) => {
  res.statusCode = 200;
  res.sendFile("contact.html", { root: "../public/" });
});
app.get("/about", (req, res) => {
  res.statusCode = 200;
  res.sendFile("about.html", { root: "../public/" });
});
app.get("/blog", (req, res) => {
  res.statusCode = 200;
  res.sendFile("blog.html", { root: "../public/" });
});
app.get("/career", (req, res) => {
  res.statusCode = 200;
  res.sendFile("career.html", { root: "../public/" });
});
app.get("*", (req, res) => {
  res.statusCode = 404;
  res.sendFile("page-404.html", { root: "../public" });
});

app.listen(5000, () => {
  console.log("http://localhost:5000/");
});
