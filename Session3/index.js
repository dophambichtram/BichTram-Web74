import { registerValidator } from './middleware/users.middleware';

const app = express();
const PORT = 3000;

app.get(
  "/register",
  registerValidator, (req, res, next) => {
    return res.json({
      message: "Register successfully",
    });
  },
  (err, req, res, next) => {
    return res.json({
      error: err.message,
    })
  }
);

app.get(

);