import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

/* ROUTE IMPORTS */
import projectRoutes from "./routes/projectRoutes.js";

/* CONFIGURATION */
const app = express();
const port = Number(process.env.PORT) || 3001;

/* MIDDLEWARE */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(helmet());
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  }),
);

app.use(morgan("common"));

app.use(cors());

/* ROUTES */
app.get("/", (req, res) => {
  res.send("This is home route");
});

app.use("/projects", projectRoutes)

/* START SERVER */
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
