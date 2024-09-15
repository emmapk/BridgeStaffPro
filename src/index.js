import dotenv from "dotenv";
import { app } from "../src/app.js";
import conectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
})


conectDB()
.then(() => {
    const PORT = process.env.PORT || 7000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

})

.catch((err) => {
    console.log("mongodb connection error", err)
})


