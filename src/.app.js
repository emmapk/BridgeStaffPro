import express from "express";
 import bodyParser from "body-parser"
import cors from "cors";
import ejs from "ejs"

const app = express();

// Enable CORS
app.use(cors());

// Common middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));;
app.use(express.static("public"));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', 'src/views');


// Import routes
// import { healthCheckRoute } from "./routes/healthCheck.route.js"
import userRoute from "./routes/user.route.js";

// Import error handling middleware
import { errorHandler } from "./middlewares/error.Middleware.js";

// Define routes
app.use(userRoute)
// app.use(healthCheckRoute)

// Use error handling middleware
app.use(errorHandler);

export { app };
