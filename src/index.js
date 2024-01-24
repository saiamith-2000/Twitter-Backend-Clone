import express from "express";
import { ServerConfig } from "./config/server-config.js";
import connect from "./config/database.js";
import TweetRepository from "./repository/tweet-repository.js";
import apiRoutes from "./routes/index.js";

const app = express();

// Middleware for parsing JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register your API routes
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Server started on PORT: ${ServerConfig.PORT}`);
  connect();
});
