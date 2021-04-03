const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const listEndpoints = require("express-list-endpoints");
const error_handler = require("node-error-handler");
const apiRoutes = require("./services");

const server = express();
const port = process.env.PORT || 5001;
const whitelist = ["http://localhost:3000"];

//*MIDDLEWARES
server.use(express.json());
server.use(
  cors({
    origin: whitelist,
    credentials: true,
  })
);

//*ROUTES
server.use("/api", apiRoutes);

//*ERROR HANDLER
server.use(error_handler({ log: true, debug: true }));

console.log(listEndpoints(server));

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    server.listen(port, () => {
      console.log("server connected at port:", port);
    })
  )
  .catch(err => console.log(err));
