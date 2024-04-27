import express from "express";
import { getTransporter } from "./utils.js";
import "dotenv/config";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});

// Middleware
app.use(express.json());

// Handle CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

let transporter = getTransporter();

app.post("/email", async (req, res) => {
  const { email, name } = req.body;

  try {
    await transporter.sendMail({
      from: `${name} 👻 <${email}>`,
      to: "company.email@gmail.com",
      subject: "Hello, from the website ✔",
      text: "Hello, from the website",
      html: "<b>Hello, from the website</b>",
    });

    res.status(200);
    res.send("Email has been sent.");
  } catch (e) {
    res.status(500);
    res.send("Server Error.");
  }
});
