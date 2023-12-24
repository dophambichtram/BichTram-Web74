import express from "express"
import morgan from "morgan"
import { config } from "dotenv";
import cors from "cors"
import { makeToken, validateToken } from "./controller/validateToken.js"
import { databaseUnit } from "./service/database/database.js"
import { userRoute } from "./routes/user.routes.js"
import { MediaRoute } from "./routes/uploadIMG.routes.js"
import { PostRoute } from "./routes/post.routes.js";

const app = express()
const port = 3000
config();

app.use(morgan('combined'))
app.use(express.json())
app.use(cors())
app.use("/user", userRoute);
app.use("/media", MediaRoute);
app.use("/post", PostRoute)
app.use((err, req, res, next) => {
  if (err) {
    return res.json({
      error: err
    })
  }
})

const database = databaseUnit.users;

app.post('/register', makeToken);
app.post('/login', validateToken);

databaseUnit.run()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})