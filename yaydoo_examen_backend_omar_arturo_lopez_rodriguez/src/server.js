import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { validateApiKey } from "./middleware/auth";
import handleError from "./middleware/handleError";
import routes from "./routes/index.js";
const app = express();

dotenv.config();

//express
try {
   app.use(express.urlencoded({ extended: false }));
   app.use(express.json({ limit: "60mb" }));

   var allowlist = ["http://localhost:3000"];
   var corsOptionsDelegate = (req, callback) => {
      var corsOptions;
      if (allowlist.indexOf(req.header("Origin")) !== -1) {
         corsOptions = { origin: true, credentials: true };
      } else {
         corsOptions = { origin: false };
      }
      callback(null, corsOptions);
   };

   app.use(cors(corsOptionsDelegate));
   app.set("port", process.env.PORT || 3000);
   app.use(validateApiKey);
   app.use(routes);
   app.use(handleError);
   const port = process.env.PORT || 3000;
   app.listen(port, function () {
      console.log("Express server running on *: http://localhost:" + port);
   });
} catch (e) {
   console.log(e);
}
