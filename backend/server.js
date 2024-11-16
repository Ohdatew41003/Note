const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const port = 3001;
const routes = require("./routes");
const redis = require("redis");



main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://mongo:27017/todos", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  // Kết nối Redis
  const redisClient = redis.createClient({
    host: 'redis',
    port: 6379
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/api", routes);

  app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
  });
}