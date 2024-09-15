import express from "express"
import cors from "cors"

const app = express()


app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)
// common middleware
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

// import route
import healthCheckRouter from "./routes/healthCgeck.rou.js"

import userRoute from "./routes/user.route.js"
import { errorHandler } from "./middlewares/error.middleware.js"

// route
app.use("/api/v1/checkhealth", healthCheckRouter)
app.use("/api/v1/users", userRoute)



export { app }