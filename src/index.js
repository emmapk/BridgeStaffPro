import dotenv from "dotenv"
import { app } from "./.app.js";
import connectDB  from "./db/index.js";

dotenv.config({
    path: "./.env"
})


connectDB() 
.then(() => {
    const PORT = process.env.PORT || 5002
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})
})

.catch((err) => {
    console.log("mongodb connection error", err)
})