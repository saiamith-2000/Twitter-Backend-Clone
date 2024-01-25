import express from "express";
import { ServerConfig } from "./config/server-config.js";
import connect from "./config/database.js";
import apiRoutes from "./routes/index.js";
import passport from "passport";
import passportAuth from "./middlewares/jwt-middlewares.js";

const app = express();

// Middleware for parsing JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

// Call passportAuth as a function and pass passport to it
passportAuth(passport);

// Register your API routes
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Server started on PORT: ${ServerConfig.PORT}`);
  connect();
});
