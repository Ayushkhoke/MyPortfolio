const express = require("express");
const app = express();

const ContactRoute = require("./routes/Contact");
const cors = require("cors");
const database = require("./config/database");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

// DB connect
database.connect();

// Middleware
app.use(express.json());

const allowedOrigins = ["http://localhost:5173", "http://localhost:3001"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Routes
app.use("/api/v1", ContactRoute);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Your server is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
