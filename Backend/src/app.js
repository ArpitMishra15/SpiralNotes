import express from "express";
import cors from "cors"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./comfig/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());                                                         // this middleware will parse JSON bodies: req.body                                

app.use(
  cors({
    origin: "http://localhost:5173",
}
));
app.use(rateLimiter);

app.use((req, res, next) => {                                                  // my custom middleware
    console.log(`Req method is ${req.method} & Req URL is "${req.url}" `);
    next();
})

const PORT = process.env.PORT || 5001;
app.use("/api/notes", notesRoutes)

// app.listen(PORT, () => {
//     console.log("Server started on PORT:", PORT);
// });

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});